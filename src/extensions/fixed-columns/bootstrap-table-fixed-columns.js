/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */


const Utils = BootstrapTable.utils

// Reasonable defaults
const PIXEL_STEP = 10
const LINE_HEIGHT = 40
const PAGE_HEIGHT = 800

function normalizeWheel (event) {
  let sX = 0 // spinX
  let sY = 0 // spinY
  let pX // pixelX
  let pY // pixelY

  // Legacy
  if ('detail' in event) {
    sY = event.detail
  }
  if ('wheelDelta' in event) {
    sY = -event.wheelDelta / 120
  }
  if ('wheelDeltaY' in event) {
    sY = -event.wheelDeltaY / 120
  }
  if ('wheelDeltaX' in event) {
    sX = -event.wheelDeltaX / 120
  }

  // side scrolling on FF with DOMMouseScroll
  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY
    sY = 0
  }

  pX = sX * PIXEL_STEP
  pY = sY * PIXEL_STEP

  if ('deltaY' in event) {
    pY = event.deltaY
  }
  if ('deltaX' in event) {
    pX = event.deltaX
  }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode === 1) { // delta in LINE units
      pX *= LINE_HEIGHT
      pY *= LINE_HEIGHT
    } else { // delta in PAGE units
      pX *= PAGE_HEIGHT
      pY *= PAGE_HEIGHT
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1
  }
  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1
  }

  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  }
}

Object.assign(BootstrapTable.defaults, {
  fixedColumns: false,
  fixedNumber: 0,
  fixedRightNumber: 0
})

export default class extends BootstrapTable {

  fixedColumnsSupported () {
    return this.options.fixedColumns &&
      !this.options.detailView &&
      !this.options.cardView
  }

  initContainer () {
    super.initContainer()

    if (!this.fixedColumnsSupported()) {
      return
    }

    if (this.options.fixedNumber) {
      const div = document.createElement('div')

      div.className = 'fixed-columns'
      this.$tableContainer.appendChild(div)
      this.$fixedColumns = this.$tableContainer.querySelector('.fixed-columns')
    }

    if (this.options.fixedRightNumber) {
      const div = document.createElement('div')

      div.className = 'fixed-columns-right'
      this.$tableContainer.appendChild(div)
      this.$fixedColumnsRight = this.$tableContainer.querySelector('.fixed-columns-right')
    }
  }

  initBody (...args) {
    super.initBody(...args)

    if (this.$fixedColumns) {
      this.$fixedColumns.style.display = this.fixedColumnsSupported() ? '' : 'none'
    }
    if (this.$fixedColumnsRight) {
      this.$fixedColumnsRight.style.display = this.fixedColumnsSupported() ? '' : 'none'
    }

    if (!this.fixedColumnsSupported()) {
      return
    }

    if (this.options.showHeader && this.options.height) {
      return
    }

    this.initFixedColumnsBody()
    this.initFixedColumnsEvents()
  }

  trigger (...args) {
    super.trigger(...args)

    if (!this.fixedColumnsSupported()) {
      return
    }

    if (args[0] === 'post-header') {
      this.initFixedColumnsHeader()
    } else if (args[0] === 'scroll-body') {
      if (this.needFixedColumns && this.options.fixedNumber) {
        this.$fixedBody.scrollTop = this.$tableBody.scrollTop
      }

      if (this.needFixedColumns && this.options.fixedRightNumber) {
        this.$fixedBodyRight.scrollTop = this.$tableBody.scrollTop
      }
    }
  }

  updateSelected () {
    super.updateSelected()

    if (!this.fixedColumnsSupported()) {
      return
    }

    this.$tableBody.querySelectorAll('tr').forEach(el => {
      const index = el.dataset.index
      const classes = el.getAttribute('class') || ''
      const inputSelector = `[name="${this.options.selectItemName}"]`
      const input = el.querySelector(inputSelector)

      if (typeof index === 'undefined') {
        return
      }

      const updateFixedBody = (fixedHeader, fixedBody) => {
        const tr = fixedBody.querySelector(`tr[data-index="${index}"]`)

        if (!tr) return

        tr.setAttribute('class', classes)

        if (input) {
          const fixedInput = tr.querySelector(inputSelector)

          if (fixedInput) fixedInput.checked = input.checked
        }

        if (this.$selectAll && this.$selectAll.length) {
          const checked = this.$selectAll[0]?.checked ?? false;

          [
            ...fixedHeader.querySelectorAll('[name="btSelectAll"]'),
            ...fixedBody.querySelectorAll('[name="btSelectAll"]')
          ].forEach(cb => {
            cb.checked = checked
          })
        }
      }

      if (this.$fixedBody && this.options.fixedNumber) {
        updateFixedBody(this.$fixedHeader, this.$fixedBody)
      }

      if (this.$fixedBodyRight && this.options.fixedRightNumber) {
        updateFixedBody(this.$fixedHeaderRight, this.$fixedBodyRight)
      }
    })
  }

  hideLoading () {
    super.hideLoading()

    if (this.needFixedColumns && this.options.fixedNumber) {
      const loading = this.$fixedColumns.querySelector('.fixed-table-loading')

      if (loading) loading.style.display = 'none'
    }

    if (this.needFixedColumns && this.options.fixedRightNumber && this.$fixedColumnsRight) {
      const loading = this.$fixedColumnsRight.querySelector('.fixed-table-loading')

      if (loading) loading.style.display = 'none'
    }
  }

  initFixedColumnsHeader () {
    if (this.options.height) {
      this.needFixedColumns = this.$tableHeader.offsetWidth < this.$tableHeader.querySelector('table').offsetWidth
    } else {
      this.needFixedColumns = this.$tableBody.offsetWidth < this.$tableBody.querySelector('table').offsetWidth
    }

    const initFixedHeader = (fixedColumns, isRight) => {
      fixedColumns.querySelector('.fixed-table-header')?.remove()
      fixedColumns.appendChild(this.$tableHeader.cloneNode(true))
      fixedColumns.style.width = `${this.getFixedColumnsWidth(isRight)}px`
      return fixedColumns.querySelector('.fixed-table-header')
    }

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedHeader = initFixedHeader(this.$fixedColumns)
      this.$fixedHeader.style.marginRight = ''
    } else if (this.$fixedColumns) {
      this.$fixedColumns.innerHTML = ''
      this.$fixedColumns.style.width = ''
    }

    if (this.needFixedColumns && this.options.fixedRightNumber && this.$fixedColumnsRight) {
      this.$fixedHeaderRight = initFixedHeader(this.$fixedColumnsRight, true)
      this.$fixedHeaderRight.scrollLeft = this.$fixedHeaderRight.querySelector('table')?.offsetWidth || 0
    } else if (this.$fixedColumnsRight) {
      this.$fixedColumnsRight.innerHTML = ''
      this.$fixedColumnsRight.style.width = ''
    }

    this.initFixedColumnsBody()
    this.initFixedColumnsEvents()
  }

  initFixedColumnsBody () {
    const initFixedBody = (fixedColumns, fixedHeader) => {
      fixedColumns.querySelector('.fixed-table-body')?.remove()
      fixedColumns.appendChild(this.$tableBody.cloneNode(true))
      fixedColumns.querySelector('.fixed-table-body table')?.removeAttribute('id')

      const fixedBody = fixedColumns.querySelector('.fixed-table-body')
      const tableBody = this.$tableBody
      const scrollHeight = tableBody.scrollWidth > tableBody.clientWidth ?
        Utils.getScrollBarWidth() : 0
      const height = this.$tableContainer.offsetHeight - scrollHeight - 1

      fixedColumns.style.height = `${height}px`
      fixedBody.style.height = `${height - fixedHeader.offsetHeight}px`

      return fixedBody
    }

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedBody = initFixedBody(this.$fixedColumns, this.$fixedHeader)
    }

    if (this.needFixedColumns && this.options.fixedRightNumber && this.$fixedColumnsRight) {
      this.$fixedBodyRight = initFixedBody(this.$fixedColumnsRight, this.$fixedHeaderRight)
      this.$fixedBodyRight.scrollLeft = this.$fixedBodyRight.querySelector('table')?.offsetWidth || 0
      this.$fixedBodyRight.style.overflowY = this.options.height ? 'auto' : 'hidden'
    }
  }

  getFixedColumnsWidth (isRight) {
    let visibleFields = this.getVisibleFields()
    let width = 0
    let fixedNumber = this.options.fixedNumber
    let marginRight = 0

    if (isRight) {
      visibleFields = visibleFields.reverse()
      fixedNumber = this.options.fixedRightNumber
      marginRight = parseInt(getComputedStyle(this.$tableHeader).marginRight, 10) || 0
    }

    for (let i = 0; i < fixedNumber; i++) {
      width += this.$header.querySelector(`th[data-field="${visibleFields[i]}"]`)?.offsetWidth || 0
    }

    return width + marginRight + 1
  }

  initFixedColumnsEvents () {
    const toggleHover = (e, toggle) => {
      const index = e.currentTarget.dataset.index
      const tr = `tr[data-index="${index}"]`
      const isFromFixed = !!e.currentTarget.closest('.fixed-columns, .fixed-columns-right')
      const trs = []

      if (isFromFixed) {
        trs.push(...this.$tableBody.querySelectorAll(tr))
      }

      if (this.$fixedBody) {
        trs.push(...this.$fixedBody.querySelectorAll(tr))
      }
      if (this.$fixedBodyRight) {
        trs.push(...this.$fixedBodyRight.querySelectorAll(tr))
      }

      trs.forEach(row => row.classList.toggle('hover-row', toggle))
    }

    const bindHover = el => {
      el.querySelectorAll('tr').forEach(tr => {
        tr.addEventListener('mouseenter', e => toggleHover(e, true))
        tr.addEventListener('mouseleave', e => toggleHover(e, false))
      })
    }

    bindHover(this.$tableBody)

    const isFirefox = typeof navigator !== 'undefined' &&
      navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    const mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
    const updateScroll = (e, fixedBody) => {
      const normalized = normalizeWheel(e)
      const deltaY = Math.ceil(normalized.pixelY)
      const top = this.$tableBody.scrollTop + deltaY

      if (
        deltaY < 0 && top > 0 ||
        deltaY > 0 && top < fixedBody.scrollHeight - fixedBody.clientHeight
      ) {
        e.preventDefault()
      }

      this.$tableBody.scrollTop = top
      if (this.$fixedBody) {
        this.$fixedBody.scrollTop = top
      }
      if (this.$fixedBodyRight) {
        this.$fixedBodyRight.scrollTop = top
      }
    }

    if (this.needFixedColumns && this.options.fixedNumber && this.$fixedBody) {
      bindHover(this.$fixedBody)

      this.$fixedBody.addEventListener(mousewheel, e => {
        updateScroll(e, this.$fixedBody)
      })
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      bindHover(this.$fixedBodyRight)

      if (this._fixedColumnsRightScrollHandler) {
        this.$fixedBodyRight.removeEventListener('scroll', this._fixedColumnsRightScrollHandler)
      }
      this._fixedColumnsRightScrollHandler = () => {
        const top = this.$fixedBodyRight.scrollTop

        this.$tableBody.scrollTop = top
        if (this.$fixedBody) {
          this.$fixedBody.scrollTop = top
        }
      }
      this.$fixedBodyRight.addEventListener('scroll', this._fixedColumnsRightScrollHandler)
    }

    if (this.options.filterControl) {
      if (this._fixedColumnsFilterHandler) {
        this.$fixedColumns.removeEventListener('keyup', this._fixedColumnsFilterHandler)
        this.$fixedColumns.removeEventListener('change', this._fixedColumnsFilterHandler)
      }
      this._fixedColumnsFilterHandler = e => {
        const target = e.target
        const value = target.value
        const field = target.closest('th')?.dataset.field
        const coreTh = this.$header.querySelector(`th[data-field="${field}"]`)

        if (!coreTh) return

        if (target.tagName === 'INPUT') {
          const coreInput = coreTh.querySelector('input')

          if (coreInput) coreInput.value = value
        } else if (target.tagName === 'SELECT') {
          const select = coreTh.querySelector('select')

          if (select) {
            select.querySelectorAll('option[selected]').forEach(opt => opt.removeAttribute('selected'))
            const opt = select.querySelector(`option[value="${value}"]`)

            if (opt) opt.setAttribute('selected', 'true')
          }
        }

        this.triggerSearch()
      }
      this.$fixedColumns.addEventListener('keyup', this._fixedColumnsFilterHandler)
      this.$fixedColumns.addEventListener('change', this._fixedColumnsFilterHandler)
    }
  }

  renderStickyHeader () {
    if (!this.options.stickyHeader) {
      return
    }

    this.$stickyContainer = this.$container.querySelector('.sticky-header-container')
    super.renderStickyHeader()

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedColumns.style.zIndex = 101
      const stickyContainer = this.$fixedColumns.querySelector('.sticky-header-container')

      if (stickyContainer) {
        stickyContainer.style.right = ''
        stickyContainer.style.width = `${this.$fixedColumns.offsetWidth}px`
      }
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedColumnsRight.style.zIndex = 101
      const stickyContainerRight = this.$fixedColumnsRight.querySelector('.sticky-header-container')

      if (stickyContainerRight) {
        stickyContainerRight.style.left = ''
        stickyContainerRight.scrollLeft = stickyContainerRight.querySelector('.table')?.offsetWidth || 0
        stickyContainerRight.style.width = `${this.$fixedColumnsRight.offsetWidth}px`
      }
    }
  }

  matchPositionX () {
    if (!this.options.stickyHeader) {
      return
    }

    if (this.$stickyContainer) {
      this.$stickyContainer.scrollLeft = this.$tableBody.scrollLeft
    }
  }
}
