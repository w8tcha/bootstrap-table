/**
 * @author: Dennis Hernández
 * @version: v3.0.0
 *
 * Dependency-free column resizing (replaces jquery-resizable-columns).
 */

const HANDLE_WIDTH = 8

Object.assign(BootstrapTable.defaults, {
  resizable: false,
  resizableMinWidth: 30
})

// Leaf header cells (no colspan) in visual left-to-right order
const getLeafThs = thead => {
  if (!thead) {
    return []
  }
  return Array.from(thead.querySelectorAll('th'))
    .filter(th => (th.colSpan || 1) <= 1 && th.offsetWidth > 0)
    .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)
}

// Optional persistence via store.js (window.store), kept for backwards compatibility
// with jquery-resizable-columns: requires `data-resizable-columns-id` on the table
const getStoreKey = (that, field) => {
  const id = that.$el.getAttribute('data-resizable-columns-id')

  return id && field ? `${id}-${field}` : null
}

export default class extends BootstrapTable {

  init (...args) {
    this._resizableWidths = this._resizableWidths || {}
    super.init(...args)
  }

  initHeader (...args) {
    super.initHeader(...args)
    this._applyResizableWidths()
  }

  initBody (...args) {
    super.initBody(...args)
    this._initResizable()
  }

  toggleView (...args) {
    super.toggleView(...args)
    this._initResizable()
  }

  resetView (...args) {
    super.resetView(...args)

    if (this.options.resizable) {
      // fitHeader runs in a timeout, so wait for it before positioning handles
      setTimeout(() => this._updateResizableHandles(), 100)
    }
  }

  destroy (...args) {
    this._destroyResizable()
    super.destroy(...args)
  }

  _initResizable () {
    if (!this.options.resizable || this.options.cardView) {
      this._destroyResizable()
      return
    }

    if (!this.$resizableHandles) {
      this.$resizableHandles = document.createElement('div')
      this.$resizableHandles.className = 'rc-handle-container'
      Object.assign(this.$resizableHandles.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '0'
      })
      this.$tableContainer.appendChild(this.$resizableHandles)

      this._resizableUpdate = () => this._updateResizableHandles()
      this.$tableBody.addEventListener('scroll', this._resizableUpdate)
      window.addEventListener('resize', this._resizableUpdate)

      if (typeof ResizeObserver !== 'undefined') {
        this._resizableObserver = new ResizeObserver(this._resizableUpdate)
        this._resizableObserver.observe(this.$el)
      }
    }

    this._updateResizableHandles()
  }

  _destroyResizable () {
    if (!this.$resizableHandles) {
      return
    }
    this.$tableBody.removeEventListener('scroll', this._resizableUpdate)
    window.removeEventListener('resize', this._resizableUpdate)
    if (this._resizableObserver) {
      this._resizableObserver.disconnect()
      this._resizableObserver = null
    }
    this.$resizableHandles.remove()
    this.$resizableHandles = null
  }

  // The header the user sees: the cloned one when `height` is set, otherwise the table's own
  _getVisibleResizableHeader () {
    if (this.options.height && this.$header_ && this.$header_.isConnected) {
      return this.$header_
    }
    return this.$header
  }

  _updateResizableHandles () {
    const container = this.$resizableHandles

    if (!container) {
      return
    }

    const thead = this._getVisibleResizableHeader()
    const ths = getLeafThs(thead)
    const count = Math.max(ths.length - 1, 0)

    while (container.children.length > count) {
      container.lastElementChild.remove()
    }
    while (container.children.length < count) {
      container.appendChild(this._createResizableHandle(container.children.length))
    }

    if (!count || this.$el.offsetParent === null) {
      return
    }

    const containerRect = this.$tableContainer.getBoundingClientRect()
    const theadRect = thead.getBoundingClientRect()
    const maxX = this.$tableContainer.clientWidth
    // Span the whole visible table: from the header down to the bottom of the body
    // (clipped to the scroll area when `height` is set)
    const bottom = Math.min(
      this.$el.getBoundingClientRect().bottom,
      this.$tableBody.getBoundingClientRect().bottom
    )
    const top = theadRect.top - containerRect.top
    const height = Math.max(bottom - theadRect.top, theadRect.height)

    ths.slice(0, -1).forEach((th, i) => {
      const handle = container.children[i]
      const x = th.getBoundingClientRect().right - containerRect.left

      handle.style.display = x <= 0 || x >= maxX ? 'none' : ''
      handle.style.left = `${x - HANDLE_WIDTH / 2}px`
      handle.style.top = `${top}px`
      handle.style.height = `${height}px`
    })
  }

  _createResizableHandle (index) {
    const handle = document.createElement('div')

    handle.className = 'rc-handle'
    Object.assign(handle.style, {
      position: 'absolute',
      width: `${HANDLE_WIDTH}px`,
      cursor: 'col-resize',
      zIndex: '5',
      touchAction: 'none'
    })
    handle.addEventListener('pointerdown', e => this._startResize(e, index))
    return handle
  }

  _startResize (e, index) {
    if (e.button !== 0) {
      return
    }
    e.preventDefault()
    e.stopPropagation()

    // Widths are always applied to the real table header; the fixed header follows via fitHeader
    const ths = getLeafThs(this.$header)
    const leftTh = ths[index]
    const rightTh = ths[index + 1]

    if (!leftTh || !rightTh) {
      return
    }

    const handle = e.currentTarget
    const tableWidth = this.$el.offsetWidth
    const minWidth = this.options.resizableMinWidth
    const toPercent = px => `${px / tableWidth * 100}%`

    // Freeze every column at its current width so only the dragged pair changes
    const widths = ths.map(th => th.getBoundingClientRect().width)

    ths.forEach((th, i) => {
      th.style.width = toPercent(widths[i])
    })

    const startX = e.clientX
    const leftWidth = widths[index]
    const rightWidth = widths[index + 1]
    const prevCursor = document.body.style.cursor
    const prevUserSelect = document.body.style.userSelect
    let frame = null

    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    this.$el.classList.add('rc-table-resizing')
    try {
      handle.setPointerCapture(e.pointerId)
    } catch {
      // pointer is no longer active (or the event is synthetic)
    }

    const onMove = ev => {
      const delta = Math.min(
        Math.max(ev.clientX - startX, minWidth - leftWidth),
        rightWidth - minWidth
      )

      leftTh.style.width = toPercent(leftWidth + delta)
      rightTh.style.width = toPercent(rightWidth - delta)

      if (frame === null) {
        frame = requestAnimationFrame(() => {
          frame = null
          if (this.options.height) {
            this.fitHeader()
          }
          this._updateResizableHandles()
        })
      }
    }

    const onEnd = ev => {
      handle.removeEventListener('pointermove', onMove)
      handle.removeEventListener('pointerup', onEnd)
      handle.removeEventListener('pointercancel', onEnd)
      if (handle.hasPointerCapture(ev.pointerId)) {
        handle.releasePointerCapture(ev.pointerId)
      }
      document.body.style.cursor = prevCursor
      document.body.style.userSelect = prevUserSelect
      this.$el.classList.remove('rc-table-resizing')

      this._saveResizableWidths(ths)
      if (this.options.height) {
        this.fitHeader()
      }
      this._updateResizableHandles()
    }

    handle.addEventListener('pointermove', onMove)
    handle.addEventListener('pointerup', onEnd)
    handle.addEventListener('pointercancel', onEnd)
  }

  _saveResizableWidths (ths) {
    for (const th of ths) {
      const field = th.dataset.field

      if (!field) {
        continue
      }
      this._resizableWidths[field] = th.style.width

      const key = getStoreKey(this, field)

      if (key && window.store) {
        window.store.set(key, th.style.width)
      }
    }
  }

  // Restore user-set widths after the header is rebuilt (column switch, refreshOptions, ...)
  _applyResizableWidths () {
    if (!this.options.resizable || !this._resizableWidths) {
      return
    }

    for (const th of this.$header.querySelectorAll('th[data-field]')) {
      const field = th.dataset.field
      let width = this._resizableWidths[field]

      if (!width) {
        const key = getStoreKey(this, field)

        width = key && window.store ? window.store.get(key) : null
      }
      if (width) {
        th.style.width = width
      }
    }
  }
}
