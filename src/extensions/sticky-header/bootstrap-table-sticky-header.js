/**
 * @author vincent loh <vincent.ml@gmail.com>
 * @update J Manuel Corona <jmcg92@gmail.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */


const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.defaults, {
  stickyHeader: false,
  stickyHeaderOffsetY: 0,
  stickyHeaderOffsetLeft: 0,
  stickyHeaderOffsetRight: 0
})

export default class extends BootstrapTable {
  initHeader (...args) {
    super.initHeader(...args)
    if (!this.options.stickyHeader) {
      return
    }

    this.$tableBody.querySelectorAll('.sticky-header-container,.sticky_anchor_begin,.sticky_anchor_end').forEach(el => el.remove())

    this.$el.insertAdjacentHTML('beforebegin', '<div class="sticky-header-container"></div>')
    this.$el.insertAdjacentHTML('beforebegin', '<div class="sticky_anchor_begin"></div>')
    this.$el.insertAdjacentHTML('afterend', '<div class="sticky_anchor_end"></div>')
    this.$header.classList.add('sticky-header')

    // clone header just once, to be used as sticky header
    // deep clone header, using source header affects tbody>td width
    this.$stickyContainer = this.$tableBody.querySelector('.sticky-header-container')
    this.$stickyBegin = this.$tableBody.querySelector('.sticky_anchor_begin')
    this.$stickyEnd = this.$tableBody.querySelector('.sticky_anchor_end')
    this.$stickyHeader = this.$header.cloneNode(true)

    // render sticky on window scroll or resize
    const resizeEvent = Utils.getEventName('resize.sticky-header-table', this.$el.getAttribute('id'))
    const scrollEvent = Utils.getEventName('scroll.sticky-header-table', this.$el.getAttribute('id'))

    if (this._stickyResizeHandler) {
      window.removeEventListener(resizeEvent, this._stickyResizeHandler)
    }
    if (this._stickyScrollHandler) {
      window.removeEventListener(scrollEvent, this._stickyScrollHandler)
    }
    if (this._stickyBodyScrollHandler) {
      this.$tableBody.removeEventListener('scroll', this._stickyBodyScrollHandler)
    }

    this._stickyResizeHandler = () => this.renderStickyHeader()
    this._stickyScrollHandler = () => this.renderStickyHeader()
    this._stickyBodyScrollHandler = () => this.matchPositionX()

    window.addEventListener(resizeEvent, this._stickyResizeHandler)
    window.addEventListener(scrollEvent, this._stickyScrollHandler)
    this.$tableBody.addEventListener('scroll', this._stickyBodyScrollHandler)
  }

  onColumnSearch ({ currentTarget, keyCode }) {
    super.onColumnSearch({ currentTarget, keyCode })
    if (!this.options.stickyHeader) {
      return
    }

    this.renderStickyHeader()
  }

  resetView (...args) {
    super.resetView(...args)
    if (!this.options.stickyHeader) {
      return
    }

    const fullscreen = document.querySelector('.bootstrap-table.fullscreen')

    if (fullscreen) {
      if (this._fullscreenScrollHandler) {
        fullscreen.removeEventListener('scroll', this._fullscreenScrollHandler)
      }
      this._fullscreenScrollHandler = () => this.renderStickyHeader()
      fullscreen.addEventListener('scroll', this._fullscreenScrollHandler)
    }
  }

  resetCaret (...args) {
    super.resetCaret(...args)
    if (!this.options.stickyHeader) {
      return
    }

    if (this.$stickyHeader) {
      const ths = [...this.$stickyHeader.querySelectorAll('th')]

      this.$header.querySelectorAll('th').forEach((th, i) => {
        const sortable = ths[i]?.querySelector('.sortable')
        const srcSortable = th.querySelector('.sortable')

        if (sortable && srcSortable) {
          sortable.setAttribute('class', srcSortable.getAttribute('class'))
        }
      })
    }
  }

  horizontalScroll () {
    super.horizontalScroll()
    if (!this.options.stickyHeader) {
      return
    }

    if (this._stickyHScrollHandler) {
      this.$tableBody.removeEventListener('scroll', this._stickyHScrollHandler)
    }
    this._stickyHScrollHandler = () => this.matchPositionX()
    this.$tableBody.addEventListener('scroll', this._stickyHScrollHandler)
  }

  renderStickyHeader () {
    if (
      !this.$stickyContainer ||
      !this.$stickyBegin ||
      !this.$stickyEnd
    ) {
      return
    }

    this.$stickyHeader = this.$header.cloneNode(true)

    if (this.options.filterControl) {
      this.$stickyHeader.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('keyup', e => this._onStickyFilterEvent(e))
        el.addEventListener('change', e => this._onStickyFilterEvent(e))
        el.addEventListener('mouseup', e => this._onStickyFilterEvent(e))
      })
    }

    const top = window.scrollY
    // top anchor scroll position, minus header height
    const start = this.$stickyBegin.getBoundingClientRect().top + window.scrollY - this.options.stickyHeaderOffsetY
    // bottom anchor scroll position, minus header height, minus sticky height
    const end = this.$stickyEnd.getBoundingClientRect().top + window.scrollY - this.options.stickyHeaderOffsetY - this.$header.offsetHeight

    // show sticky when top anchor touches header, and when bottom anchor not exceeded
    if (top > start && top <= end) {
      // ensure clone and source column widths are the same
      const srcRows = [...this.$header.querySelectorAll('tr')]

      this.$stickyHeader.querySelectorAll('tr').forEach((row, indexRows) => {
        [...row.querySelectorAll('th')].forEach((el, index) => {
          const srcTh = srcRows[indexRows]?.querySelectorAll('th')[index]

          if (srcTh) {
            el.style.minWidth = srcTh.style.width
          }
        })
      })
      // match bootstrap table style
      this.$stickyContainer.style.display = ''
      this.$stickyContainer.classList.add('fix-sticky', 'fixed-table-container')
      // stick it in position
      const coords = this.$tableBody.getBoundingClientRect()
      let width = '100%'
      let stickyHeaderOffsetLeft = this.options.stickyHeaderOffsetLeft
      let stickyHeaderOffsetRight = this.options.stickyHeaderOffsetRight

      if (!stickyHeaderOffsetLeft) {
        stickyHeaderOffsetLeft = coords.left
      }
      if (!stickyHeaderOffsetRight) {
        width = `${coords.width}px`
      }
      if (this.$el.closest('.bootstrap-table')?.classList.contains('fullscreen')) {
        stickyHeaderOffsetLeft = 0
        stickyHeaderOffsetRight = 0
        width = '100%'
      }
      this.$stickyContainer.style.top = `${this.options.stickyHeaderOffsetY}px`
      this.$stickyContainer.style.left = `${stickyHeaderOffsetLeft}px`
      this.$stickyContainer.style.right = `${stickyHeaderOffsetRight}px`
      this.$stickyContainer.style.width = width
      // create scrollable container for header
      this.$stickyTable = document.createElement('table')
      this.$stickyTable.className = this.options.classes
      // append cloned header to dom
      this.$stickyTable.appendChild(this.$stickyHeader)
      this.$stickyContainer.innerHTML = ''
      this.$stickyContainer.appendChild(this.$stickyTable)
      // match clone and source header positions when left-right scroll
      this.matchPositionX()
    } else {
      this.$stickyContainer.classList.remove('fix-sticky')
      this.$stickyContainer.style.display = 'none'
    }
  }

  _onStickyFilterEvent (e) {
    const target = e.target
    const value = target.value
    const th = target.closest('th[data-field]')
    const field = th?.dataset.field

    if (!field) return

    const coreTh = this.$header.querySelector(`th[data-field="${field}"]`)

    if (!coreTh) return

    if (target.tagName === 'INPUT') {
      const coreInput = coreTh.querySelector('input')

      if (coreInput) coreInput.value = value
    } else if (target.tagName === 'SELECT') {
      const coreSelect = coreTh.querySelector('select')

      if (coreSelect) {
        const normalizedValue = value === null ?
          coreSelect.multiple ? [] : null :
          value

        coreSelect.value = normalizedValue
      }
    }

    if (typeof this.triggerSearch === 'function') {
      this.triggerSearch()
    }
  }

  matchPositionX () {
    this.$stickyContainer.scrollLeft = this.$tableBody.scrollLeft
  }
}
