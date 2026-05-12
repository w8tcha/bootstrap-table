import Utils from '../utils/index.js'

export default {
  initHeader () {
    const visibleColumns = {}
    const headerHtml = []

    this.header = {
      fields: [],
      styles: [],
      classes: [],
      formatters: [],
      detailFormatters: [],
      events: [],
      sorters: [],
      sortNames: [],
      cellStyles: [],
      searchables: []
    }

    Utils.updateFieldGroup(this.options.columns, this.columns)

    this.options.columns.forEach((columns, i) => {
      const html = []

      html.push(`<tr${Utils.sprintf(' class="%s"', this._headerTrClasses[i])} ${Utils.sprintf(' style="%s"', this._headerTrStyles[i])}>`)

      let detailViewTemplate = ''

      if (i === 0 && Utils.hasDetailViewIcon(this.options)) {
        const rowspan = this.options.columns.length > 1 ?
          ` rowspan="${this.options.columns.length}"` : ''

        detailViewTemplate = `<th class="detail"${rowspan}>
          <div class="fht-cell"></div>
          </th>`
      }

      if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
        html.push(detailViewTemplate)
      }

      columns.forEach((column, j) => {
        const class_ = Utils.sprintf(' class="%s"', column.class)
        const unitWidth = column.widthUnit
        const width = parseFloat(column.width)

        const columnHalign = column.halign ? column.halign : column.align
        const halign = Utils.sprintf('text-align: %s; ', columnHalign)
        const align = Utils.sprintf('text-align: %s; ', column.align)
        let style = Utils.sprintf('vertical-align: %s; ', column.valign)

        style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ?
          !column.showSelectTitle ? '36px' : undefined :
          width ? width + unitWidth : undefined)

        if (typeof column.fieldIndex === 'undefined' && !column.visible) {
          return
        }

        const headerStyle = Utils.calculateObjectValue(null, this.options.headerStyle, [column])
        const csses = []
        const data_ = []
        let classes = ''

        if (headerStyle && headerStyle.css) {
          for (const [key, value] of Object.entries(headerStyle.css)) {
            csses.push(`${key}: ${value}`)
          }
        }
        if (headerStyle && headerStyle.classes) {
          classes = Utils.sprintf(' class="%s"', column['class'] ?
            [column['class'], headerStyle.classes].join(' ') : headerStyle.classes)
        }

        if (typeof column.fieldIndex !== 'undefined') {
          this.header.fields[column.fieldIndex] = column.field
          this.header.styles[column.fieldIndex] = align + style
          this.header.classes[column.fieldIndex] = column.class
          this.header.formatters[column.fieldIndex] = column.formatter
          this.header.detailFormatters[column.fieldIndex] = column.detailFormatter
          this.header.events[column.fieldIndex] = column.events
          this.header.sorters[column.fieldIndex] = column.sorter
          this.header.sortNames[column.fieldIndex] = column.sortName
          this.header.cellStyles[column.fieldIndex] = column.cellStyle
          this.header.searchables[column.fieldIndex] = column.searchable

          if (!column.visible) {
            return
          }

          if (this.options.cardView && !column.cardVisible) {
            return
          }

          visibleColumns[column.field] = column
        }

        if (Object.keys(column._data || {}).length > 0) {
          for (const [k, v] of Object.entries(column._data)) {
            data_.push(`data-${k}='${typeof v === 'object' ? JSON.stringify(v) : v}'`)
          }
        }

        html.push(`<th${Utils.sprintf(' title="%s"', column.titleTooltip)}`,
          column.checkbox || column.radio ?
            Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') :
            classes || class_,
          Utils.sprintf(' style="%s"', (column.style || '') + halign + style + csses.join('; ') || undefined),
          Utils.sprintf(' rowspan="%s"', column.rowspan),
          Utils.sprintf(' colspan="%s"', column.colspan),
          Utils.sprintf(' scope="%s"', column.scope),
          Utils.sprintf(' data-field="%s"', column.field),
          // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
          j === 0 && i > 0 ? ' data-not-first-th' : '',
          data_.length > 0 ? data_.join(' ') : '',
          '>')

        html.push(Utils.sprintf('<div class="th-inner %s">',
          this.options.sortable && column.sortable ? `sortable${columnHalign === 'center' ? ' sortable-center' : ''} both` : ''))

        let text = this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(column.title) : column.title

        const title = text

        if (column.checkbox) {
          text = ''
          if (!this.options.singleSelect && this.options.checkboxHeader) {
            text = Utils.getCheckboxHtml({
              name: 'btSelectAll',
              centered: true,
              withLabel: false
            })
          }
          this.header.stateField = column.field
        }
        if (column.radio) {
          text = ''
          this.header.stateField = column.field
        }
        if (!text && column.showSelectTitle) {
          text += title
        }

        html.push(text)
        html.push('</div>')
        html.push('<div class="fht-cell"></div>')
        html.push('</div>')
        html.push('</th>')
      })

      if (detailViewTemplate && this.options.detailViewAlign === 'right') {
        html.push(detailViewTemplate)
      }

      html.push('</tr>')

      if (html.length > 3) {
        headerHtml.push(html.join(''))
      }
    })

    this.$header.innerHTML = headerHtml.join('')

    // Store column data on each th using WeakMap instead of jQuery .data()
    this.$header.querySelectorAll('th[data-field]').forEach(el => {
      this._thDataMap.set(el, visibleColumns[el.dataset.field])
    })

    // Event delegation for th-inner clicks (sorting)
    if (this._thInnerClickHandler) {
      this.$container.removeEventListener('click', this._thInnerClickHandler)
    }
    this._thInnerClickHandler = e => {
      const thInner = e.target.closest('.th-inner')

      if (!thInner) return
      const thEl = thInner.parentElement

      if (this.options.detailView && !thEl?.classList.contains('bs-checkbox')) {
        if (thInner.closest('.bootstrap-table') !== this.$container) {
          return
        }
      }

      if (this.options.sortable && this._thDataMap.get(thEl)?.sortable) {
        this.onSort({ type: e.type, currentTarget: thInner })
      }
    }
    this.$container.addEventListener('click', this._thInnerClickHandler)

    // Remove previous resize handler before potentially adding a new one
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler)
      this._resizeHandler = null
    }

    if (!this.options.showHeader || this.options.cardView) {
      this.$header.style.display = 'none'
      this.$tableHeader.style.display = 'none'
      this.$tableLoading.style.top = '0'
    } else {
      this.$header.style.display = ''
      this.$tableHeader.style.display = ''
      this.$tableLoading.style.top = `${this.$header.offsetHeight + 1}px`
      // Assign the correct sortable arrow
      this.resetCaret()
      this._resizeHandler = () => this.resetView()
      window.addEventListener('resize', this._resizeHandler)
    }

    this.$selectAll = this.$header.querySelector('[name="btSelectAll"]')
    if (this.$selectAll) {
      this.$selectAll.addEventListener('click', e => {
        e.stopPropagation()
        this[e.currentTarget.checked ? 'checkAll' : 'uncheckAll']()
        this.updateSelected()
      })
    }

    if (this.options.height && typeof ResizeObserver !== 'undefined') {
      if (!this.$el.offsetWidth && !this.$el.offsetHeight) {
        if (this._resizeObserver) {
          this._resizeObserver.disconnect()
          this._resizeObserver = null
        }
        const observer = new ResizeObserver(entries => {
          for (const entry of entries) {
            if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
              observer.disconnect()
              if (this._resizeObserver === observer) {
                this._resizeObserver = null
              }
              this.resetView()
              return
            }
          }
        })

        this._resizeObserver = observer
        observer.observe(this.$el)
      }
    }
  },

  getVisibleFields () {
    const visibleFields = []

    for (const field of this.header.fields) {
      const column = this.columns[this.fieldsColumnsIndex[field]]

      if (!column || !column.visible || this.options.cardView && !column.cardVisible) {
        continue
      }
      visibleFields.push(field)
    }
    return visibleFields
  },

  resetHeader () {
    // Fix #61: the hidden table reset header bug.
    const isHidden = !this.$el.offsetWidth && !this.$el.offsetHeight

    this._setDelayTimeout('header', () => this.fitHeader(), isHidden ? 100 : 0)
  },

  fitHeader () {
    if (!this.$el.offsetWidth && !this.$el.offsetHeight) {
      this._setDelayTimeout('header', () => this.fitHeader(), 100)
      return
    }

    const fixedBody = this.$tableBody
    const scrollWidth = this.hasScrollBar &&
    fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.offsetHeight ?
      Utils.getScrollBarWidth() : 0

    this.$el.style.marginTop = `-${this.$header.offsetHeight}px`

    const focused = this.$tableHeader.querySelector(':focus')

    if (focused) {
      const thEl = focused.closest('th')

      if (thEl) {
        const dataField = thEl.getAttribute('data-field')

        if (dataField !== undefined) {
          const inputs = this.$header.querySelectorAll(
            `[data-field='${dataField}'] input, [data-field='${dataField}'] select, [data-field='${dataField}'] textarea`
          )

          inputs.forEach(el => el.classList.add('focus-temp'))
        }
      }
    }

    this.$header_ = this.$header.cloneNode(true)
    this.$selectAll_ = this.$header_.querySelector('[name="btSelectAll"]')

    // Copy _thDataMap entries to cloned header ths
    this.$header.querySelectorAll('th[data-field]').forEach(origTh => {
      const data = this._thDataMap.get(origTh)

      if (data) {
        const clonedTh = this.$header_.querySelector(`th[data-field="${origTh.dataset.field}"]`)

        if (clonedTh) this._thDataMap.set(clonedTh, data)
      }
    })

    const captionEl = this.$el.querySelector('caption')
    const fixedHeaderTable = this.$tableHeader.querySelector('table')

    this.$tableHeader.style.marginRight = `${scrollWidth}px`
    fixedHeaderTable.style.width = `${this.$el.offsetWidth}px`
    fixedHeaderTable.innerHTML = ''
    fixedHeaderTable.className = this.$el.className

    if (captionEl) {
      fixedHeaderTable.appendChild(captionEl.cloneNode(true))
    }

    fixedHeaderTable.appendChild(this.$header_)

    this.$tableLoading.style.width = `${this.$el.offsetWidth}px`

    const focusedTempEl = document.querySelector('.focus-temp')

    if (focusedTempEl && focusedTempEl.offsetParent !== null) {
      focusedTempEl.focus()
      this.$header.querySelectorAll('.focus-temp').forEach(el => el.classList.remove('focus-temp'))
    }

    const visibleFields = this.getVisibleFields()
    const ths = Array.from(this.$header_.querySelectorAll('th'))
    const bodyRows = this.$body.querySelectorAll(':scope > tr:not(.no-records-found):not(.virtual-scroll-top)')
    let trEl = bodyRows[0] || null

    while (trEl && trEl.querySelector(':scope > td[colspan]:not([colspan="1"])')) {
      trEl = trEl.nextElementSibling
      while (trEl && (trEl.classList.contains('no-records-found') || trEl.classList.contains('virtual-scroll-top'))) {
        trEl = trEl.nextElementSibling
      }
    }

    if (trEl) {
      const cells = Array.from(trEl.querySelectorAll(':scope > *'))
      const trLength = cells.length

      cells.forEach((el, i) => {
        if (Utils.hasDetailViewIcon(this.options)) {
          if (
            i === 0 && this.options.detailViewAlign !== 'right' ||
            i === trLength - 1 && this.options.detailViewAlign === 'right'
          ) {
            const thDetail = ths.find(th => th.classList.contains('detail'))

            if (thDetail) {
              const fhtCell = thDetail.querySelector('.fht-cell')
              const zoomWidth = thDetail.clientWidth - (fhtCell ? fhtCell.clientWidth : 0)

              if (fhtCell) fhtCell.style.width = `${el.clientWidth - zoomWidth}px`
            }
            return
          }
        }

        const index = i - Utils.getDetailViewIndexOffset(this.options)
        const matchingThs = this.$header_.querySelectorAll(`th[data-field="${visibleFields[index]}"]`)
        let th = matchingThs[0]

        if (matchingThs.length > 1) {
          th = ths[el.cellIndex]
        }

        if (th) {
          const fhtCell = th.querySelector('.fht-cell')
          const zoomWidth = th.clientWidth - (fhtCell ? fhtCell.clientWidth : 0)

          if (fhtCell) fhtCell.style.width = `${el.clientWidth - zoomWidth}px`
        }
      })
    }

    this.horizontalScroll()
    this.trigger('post-header')
  },

  resetCaret () {
    const { sortName, sortOrder } = this.options
    const ariaSort = sortOrder === 'asc' ? 'ascending' : 'descending'

    this.$header.querySelectorAll('th').forEach(th => {
      const isActive = th.dataset.field === sortName

      if (isActive) {
        th.setAttribute('aria-sort', ariaSort)
      } else {
        th.removeAttribute('aria-sort')
      }

      th.querySelectorAll('.sortable').forEach(el => {
        el.classList.remove('desc', 'asc')
        el.classList.add(isActive ? sortOrder : 'both')
      })
    })
  },

  initFooter () {
    if (!this.options.showFooter || this.options.cardView) { // do nothing
      return
    }

    const data = this.getData()
    const html = []
    let detailTemplate = null

    if (Utils.hasDetailViewIcon(this.options)) {
      detailTemplate = Utils.h('th', { class: 'detail' }, [
        Utils.h('div', { class: 'th-inner' }),
        Utils.h('div', { class: 'fht-cell' })
      ])
    }

    if (detailTemplate && this.options.detailViewAlign !== 'right') {
      html.push(detailTemplate)
    }

    for (const column of this.columns) {
      const hasData = this.footerData && this.footerData.length > 0

      if (
        !column.visible ||
        hasData && !(column.field in this.footerData[0])
      ) {
        continue
      }

      if (this.options.cardView && !column.cardVisible) {
        return
      }

      const style = Utils.calculateObjectValue(null, column.footerStyle || this.options.footerStyle, [column])
      const csses = style && style.css || {}
      const colspan = hasData && this.footerData[0][`_${column.field}_colspan`] || 0
      let value = hasData && this.footerData[0][column.field] || ''

      value = Utils.calculateObjectValue(column, column.footerFormatter,
        [data, value], value)

      html.push(Utils.h('th', {
        class: [column['class'], style && style.classes],
        style: {
          'text-align': column.falign ? column.falign : column.align,
          'vertical-align': column.valign,
          ...csses
        },
        colspan: colspan || undefined
      }, [
        Utils.h('div', {
          class: 'th-inner'
        }, [...Utils.htmlToNodes(value)]),
        Utils.h('div', { class: 'fht-cell' })
      ]))
    }

    if (detailTemplate && this.options.detailViewAlign === 'right') {
      html.push(detailTemplate)
    }

    if (!this.options.height && !this.$tableFooter) {
      this.$el.insertAdjacentHTML('beforeend', '<tfoot><tr></tr></tfoot>')
      this.$tableFooter = this.$el.querySelector('tfoot')
    }

    if (this.$tableFooter && !this.$tableFooter.querySelector('tr')) {
      this.$tableFooter.innerHTML = '<table><thead><tr></tr></thead></table>'
    }

    const trEl = this.$tableFooter?.querySelector('tr')

    if (trEl) {
      trEl.innerHTML = ''
      for (const node of html) {
        if (node instanceof Node) {
          trEl.appendChild(node)
        } else if (typeof node === 'string') {
          trEl.insertAdjacentHTML('beforeend', node)
        }
      }
    }

    this.trigger('post-footer', this.$tableFooter)
  },

  fitFooter () {
    if (!this.$el.offsetWidth && !this.$el.offsetHeight) {
      this._setDelayTimeout('footer', () => this.fitFooter(), 100)
      return
    }

    const fixedBody = this.$tableBody
    const scrollWidth = this.hasScrollBar &&
      fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.offsetHeight ?
      Utils.getScrollBarWidth() : 0

    this.$tableFooter.style.marginRight = `${scrollWidth}px`
    const footerTable = this.$tableFooter.querySelector('table')

    if (footerTable) {
      footerTable.style.width = `${this.$el.offsetWidth}px`
      footerTable.className = this.$el.className
    }

    const ths = Array.from(this.$tableFooter.querySelectorAll('th'))

    ths.forEach(th => {
      const fhtCell = th.querySelector('.fht-cell')

      if (fhtCell) fhtCell.style.width = 'auto'
    })

    const bodyRows = this.$body.querySelectorAll(':scope > tr:not(.no-records-found)')
    let trEl = bodyRows[0] || null

    while (trEl && trEl.querySelector(':scope > td[colspan]:not([colspan="1"])')) {
      trEl = trEl.nextElementSibling
    }

    if (trEl) {
      const cells = Array.from(trEl.querySelectorAll(':scope > *'))
      const trLength = cells.length

      cells.forEach((el, i) => {
        if (Utils.hasDetailViewIcon(this.options)) {
          if (
            i === 0 && this.options.detailViewAlign === 'left' ||
            i === trLength - 1 && this.options.detailViewAlign === 'right'
          ) {
            const thDetail = ths.find(th => th.classList.contains('detail'))

            if (thDetail) {
              const fhtCell = thDetail.querySelector('.fht-cell')
              const zoomWidth = thDetail.clientWidth - (fhtCell ? fhtCell.clientWidth : 0)

              if (fhtCell) fhtCell.style.width = `${el.clientWidth - zoomWidth}px`
            }
            return
          }
        }

        const th = ths[i]

        if (th) {
          const fhtCell = th.querySelector('.fht-cell')
          const zoomWidth = th.clientWidth - (fhtCell ? fhtCell.clientWidth : 0)

          if (fhtCell) fhtCell.style.width = `${el.clientWidth - zoomWidth}px`
        }
      })
    }

    this.horizontalScroll()
  },

  horizontalScroll () {
    if (this._scrollHandler) {
      this.$tableBody.removeEventListener('scroll', this._scrollHandler)
    }
    this._scrollHandler = () => {
      const scrollLeft = this.$tableBody.scrollLeft

      if (this.options.showHeader && this.options.height) {
        this.$tableHeader.scrollLeft = scrollLeft
      }

      if (this.options.showFooter && !this.options.cardView) {
        this.$tableFooter.scrollLeft = scrollLeft
      }

      this.trigger('scroll-body', this.$tableBody)
    }
    this.$tableBody.addEventListener('scroll', this._scrollHandler)
  },

  updateColumnTitle (params) {
    if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
      return
    }

    this.columns[this.fieldsColumnsIndex[params.field]].title =
      this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(params.title) : params.title

    if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
      for (const el of this.$header.querySelectorAll('th[data-field]')) {
        if (el.dataset.field === params.field) {
          const thInner = el.querySelector('.th-inner')

          if (thInner) thInner.innerHTML = params.title
          break
        }
      }

      this.resetView()
    }
  }
}
