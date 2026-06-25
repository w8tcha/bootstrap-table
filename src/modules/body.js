/* eslint-disable no-use-before-define */
import Utils from '../utils/index.js'
import VirtualScroll from '../virtual-scroll/index.js'

export default {
  initBodyEvent () {
    // Remove old event listeners
    if (this._bodyClickHandler) {
      this.$body.removeEventListener('click', this._bodyClickHandler)
      this.$body.removeEventListener('dblclick', this._bodyClickHandler)
    }
    if (this._bodyMousedownHandler) {
      this.$body.removeEventListener('mousedown', this._bodyMousedownHandler)
    }

    // click to select by column — use event delegation on $body
    this._bodyClickHandler = e => {
      const td = e.target.closest('td')

      if (!td || !this.$body.contains(td)) return
      const tr = td.parentElement

      if (!tr || !tr.hasAttribute('data-index') || tr.parentElement !== this.$body) return

      if (
        td.querySelector('.detail-icon') ||
        td.cellIndex - Utils.getDetailViewIndexOffset(this.options) < 0
      ) {
        return
      }

      const cardViewsEl = e.target.closest('.card-views')
      const cardViewTarget = e.target.closest('.card-view')
      const rowIndex = +tr.dataset.index
      const item = this.data[rowIndex]
      let index

      if (this.options.cardView) {
        const cardViewArr = cardViewsEl ? Array.from(cardViewsEl.children) : []

        index = cardViewArr.indexOf(cardViewTarget)
      } else {
        index = td.cellIndex
      }

      const fields = this.getVisibleFields()
      const field = fields[index - Utils.getDetailViewIndexOffset(this.options)]
      const column = this.columns[this.fieldsColumnsIndex[field]]
      const value = Utils.getItemField(item, field, this.options.escape, column.escape)

      this.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, td)
      this.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, tr, field)

      // if click to select - then trigger the checkbox/radio click
      if (
        e.type === 'click' &&
        this.options.clickToSelect &&
        column.clickToSelect &&
        !Utils.calculateObjectValue(this.options, this.options.ignoreClickToSelectOn, [e.target])
      ) {
        const selectItem = tr.querySelector(Utils.sprintf('[name="%s"]', this.options.selectItemName))

        if (selectItem) {
          selectItem.click()
        }
      }

      if (e.type === 'click' && this.options.detailViewByClick) {
        this.toggleDetailView(rowIndex, this.header.detailFormatters[this.fieldsColumnsIndex[field]])
      }
    }

    // https://github.com/jquery/jquery/issues/1741
    this._bodyMousedownHandler = e => {
      this.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey
      this.multipleSelectRowShiftKey = e.shiftKey
    }

    this.$body.addEventListener('click', this._bodyClickHandler)
    this.$body.addEventListener('dblclick', this._bodyClickHandler)
    this.$body.addEventListener('mousedown', this._bodyMousedownHandler)

    // detail icon click — delegation
    if (this._bodyDetailIconHandler) {
      this.$body.removeEventListener('click', this._bodyDetailIconHandler)
    }
    this._bodyDetailIconHandler = e => {
      const icon = e.target.closest('.detail-icon')

      if (!icon) return
      e.preventDefault()
      const td = icon.parentElement
      const tr = td ? td.parentElement : null

      if (tr && tr.hasAttribute('data-index')) {
        this.toggleDetailView(+tr.dataset.index)
      }
    }
    this.$body.addEventListener('click', this._bodyDetailIconHandler)

    // select item click
    this.$selectItem = Array.from(
      this.$body.querySelectorAll(Utils.sprintf('[name="%s"]', this.options.selectItemName))
    )

    if (this._selectItemClickHandler) {
      // handlers were on old elements which are now gone — just reset
    }
    this._selectItemClickHandler = e => {
      e.stopImmediatePropagation()
      const el = e.currentTarget

      this._toggleCheck(el.checked, +el.dataset.index)
    }
    this.$selectItem.forEach(el => el.addEventListener('click', this._selectItemClickHandler))

    this.header.events.forEach((_events, i) => {
      let events = _events

      if (!events) {
        return
      }
      // fix bug, if events is defined with namespace
      if (typeof events === 'string') {
        events = Utils.calculateObjectValue(null, events)
      }

      if (!events) {
        throw new Error(`Unknown event in the scope: ${_events}`)
      }

      const field = this.header.fields[i]
      let fieldIndex = this.getVisibleFields().indexOf(field)

      if (fieldIndex === -1) {
        return
      }

      fieldIndex += Utils.getDetailViewIndexOffset(this.options)

      for (const key in events) {
        if (!events.hasOwnProperty(key)) {
          continue
        }
        const event = events[key]

        this.$body.querySelectorAll(':scope > tr:not(.no-records-found)').forEach(tr => {
          const tds = this.options.cardView ? tr.querySelectorAll('.card-views > .card-view') : tr.querySelectorAll(':scope > td')
          const td = tds[fieldIndex]

          if (!td) return
          const index = key.indexOf(' ')
          const name = key.substring(0, index)
          const el = key.substring(index + 1)

          td.querySelectorAll(el).forEach(target => {
            target.addEventListener(name, e => {
              const rowIndex = +tr.dataset.index
              const row = this.data[rowIndex]
              const value = row[field]

              event.apply(this, [e, value, row, rowIndex])
            })
          })
        })
      }
    })
  },

  initHiddenRows () {
    this.hiddenRows = []
  },

  // eslint-disable-next-line no-unused-vars
  initRow (item, i, data, trFragments) {
    if (Utils.findIndex(this.hiddenRows, item) > -1) {
      return
    }
    const style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], {})
    const attributes = Utils.calculateObjectValue(this.options,
      this.options.rowAttributes, [item, i], {})
    const data_ = {}

    if (item._data && !Utils.isEmptyObject(item._data)) {
      for (const [k, v] of Object.entries(item._data)) {
        // ignore data-index
        if (k === 'index') {
          return
        }
        data_[`data-${k}`] = typeof v === 'object' ? JSON.stringify(v) : v
      }
    }
    const tr = Utils.h('tr', {
      id: Array.isArray(item) ? undefined : item._id,
      class: style && style.classes || (Array.isArray(item) ? undefined : item._class),
      style: style && style.css || (Array.isArray(item) ? undefined : item._style),
      'data-index': i,
      'data-uniqueid': Utils.getItemField(item, this.options.uniqueId, false),
      'data-has-detail-view': this.options.detailView &&
        Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined,
      ...attributes,
      ...data_
    })
    const trChildren = []
    let detailViewTemplate = ''

    if (Utils.hasDetailViewIcon(this.options)) {
      detailViewTemplate = Utils.h('td')

      if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
        detailViewTemplate.append(Utils.h('a', {
          class: 'detail-icon',
          href: '#',
          html: Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)
        }))
      }
    }

    if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
      trChildren.push(detailViewTemplate)
    }

    const tds = this.header.fields.map((field, j) => {
      const column = this.columns[j]
      const value_ = Utils.getItemField(item, field, this.options.escape, column.escape)
      let value
      const attrs = {
        class: this.header.classes[j] ? [this.header.classes[j]] : [],
        style: this.header.styles[j] ? [this.header.styles[j]] : []
      }
      const cardViewClass = `card-view card-view-field-${field}`

      if ((this.fromHtml || this.autoMergeCells) && typeof value_ === 'undefined') {
        if (!column.checkbox && !column.radio) {
          return
        }
      }

      if (!column.visible) {
        return
      }

      if (this.options.cardView && !column.cardVisible) {
        return
      }

      // handle class, style, id, rowspan, colspan and title of td
      for (const attr of ['class', 'style', 'id', 'rowspan', 'colspan', 'title']) {
        const value = item[`_${field}_${attr}`]

        if (!value) {
          continue
        }
        if (attrs[attr]) {
          attrs[attr].push(value)
        } else {
          attrs[attr] = value
        }
      }

      const cellStyle = Utils.calculateObjectValue(this.header,
        this.header.cellStyles[j], [value_, item, i, field], {})

      if (cellStyle.classes) {
        attrs.class.push(cellStyle.classes)
      }
      if (cellStyle.css) {
        attrs.style.push(cellStyle.css)
      }

      value = Utils.calculateObjectValue(column,
        this.header.formatters[j], [value_, item, i, field], value_)

      if (!(column.checkbox || column.radio)) {
        value = typeof value === 'undefined' || value === null ?
          this.options.undefinedText : value
      }

      if (
        column.searchable &&
        this.searchText &&
        this.options.searchHighlight &&
        !(column.checkbox || column.radio)
      ) {
        let searchText = this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (this.options.searchAccentNeutralise && typeof value === 'string') {
          const indexRegex = new RegExp(`${Utils.normalizeAccent(searchText)}`, 'gmi')
          const match = indexRegex.exec(Utils.normalizeAccent(value))

          if (match) {
            searchText = value.substring(match.index, match.index + searchText.length)
          }
        }

        const defValue = Utils.replaceSearchMark(value, searchText)

        value = Utils.calculateObjectValue(column, column.searchHighlightFormatter,
          [value, this.searchText], defValue)
      }

      if (item[`_${field}_data`] && !Utils.isEmptyObject(item[`_${field}_data`])) {
        for (const [k, v] of Object.entries(item[`_${field}_data`])) {
          // ignore data-index
          if (k === 'index') {
            return
          }
          attrs[`data-${k}`] = v
        }
      }

      if (column.checkbox || column.radio) {
        const type = column.checkbox ? 'checkbox' : 'radio'
        const isChecked = Utils.isObject(value) && value.hasOwnProperty('checked') ?
          value.checked : (value === true || value_) && value !== false
        const isDisabled = !column.checkboxEnabled || value && value.disabled
        const valueNodes = this.header.formatters[j] && (typeof value === 'string' || Utils.isDomNode(value)) ? Utils.htmlToNodes(value) : []

        item[this.header.stateField] = value === true || (!!value_ || value && value.checked)

        const inputAttrs = {
          'data-index': i,
          name: this.options.selectItemName,
          type,
          value: item[this.options.idField],
          checked: isChecked ? 'checked' : undefined,
          disabled: isDisabled ? 'disabled' : undefined
        }
        const config = Utils.getCheckboxVdomConfig({
          inputAttrs,
          formCheckClass: this.constants.classes.formCheck,
          formCheckInputClass: this.constants.classes.formCheckInput
        })
        const wrapperChildNodes = [Utils.h('input', config.inputAttrs)]

        if (config.hasSpan) {
          wrapperChildNodes.push(Utils.h('span'))
        }
        const children = [
          Utils.h(config.wrapperTag, config.wrapperAttrs, wrapperChildNodes),
          ...valueNodes
        ]

        return Utils.h(this.options.cardView ? 'div' : 'td', {
          class: [this.options.cardView ? cardViewClass : 'bs-checkbox', column.class],
          style: this.options.cardView ? undefined : attrs.style
        }, children)
      }

      if (this.options.cardView) {
        if (this.options.smartDisplay && value === '') {
          return Utils.h('div', { class: cardViewClass })
        }

        const cardTitle = this.options.showHeader ?
          Utils.h('span', {
            class: ['card-view-title', cellStyle.classes],
            style: attrs.style,
            html: Utils.getFieldTitle(this.columns, field)
          }) : ''

        return Utils.h('div', { class: cardViewClass }, [
          cardTitle,
          Utils.h('span', {
            class: ['card-view-value', cellStyle.classes],
            style: attrs.style
          }, [...Utils.htmlToNodes(value)])
        ])
      }

      return Utils.h('td', attrs, [...Utils.htmlToNodes(value)])
    }).filter(x => x)

    trChildren.push(...tds)

    if (detailViewTemplate && this.options.detailViewAlign === 'right') {
      trChildren.push(detailViewTemplate)
    }

    if (this.options.cardView) {
      tr.append(Utils.h('td', {
        colspan: this.header.fields.length
      }, [
        Utils.h('div', { class: 'card-views' }, trChildren)
      ]))
    } else {
      tr.append(...trChildren)
    }

    return tr
  },

  initBody (fixedScroll, updatedUid) {
    const data = this.getData()

    this.trigger('pre-body', data)

    this.$body = this.$el.querySelector(':scope > tbody')
    if (!this.$body) {
      this.$body = document.createElement('tbody')
      this.$el.appendChild(this.$body)
    }

    // Fix #389 Bootstrap-table-flatJSON is not working
    if (!this.options.pagination || this.options.sidePagination === 'server') {
      this.pageFrom = 1
      this.pageTo = data.length
    }

    const rows = []
    const trFragments = document.createDocumentFragment()
    let hasTr = false
    const toExpand = []

    this.autoMergeCells = Utils.checkAutoMergeCells(data.slice(this.pageFrom - 1, this.pageTo))

    for (let i = this.pageFrom - 1; i < this.pageTo; i++) {
      const item = data[i]
      const tr = this.initRow(item, i, data, trFragments)

      hasTr = hasTr || !!tr
      if (tr && tr instanceof Node) {
        const uniqueId = this.options.uniqueId
        const toAppend = [tr]

        if (uniqueId && item.hasOwnProperty(uniqueId)) {
          const itemUniqueId = item[uniqueId]
          const oldTr = this.$body.querySelector(
            Utils.sprintf(':scope > tr[data-uniqueid="%s"][data-has-detail-view]', itemUniqueId)
          )
          const oldTrNext = oldTr ? oldTr.nextElementSibling : null

          if (oldTrNext && oldTrNext.classList.contains('detail-view')) {
            toExpand.push(i)

            if (!updatedUid || itemUniqueId !== updatedUid) {
              toAppend.push(oldTrNext)
            }
          }
        }

        if (!this.options.virtualScroll) {
          toAppend.forEach(el => trFragments.appendChild(el))
        } else {
          rows.push(toAppend.map(el => el.outerHTML).join(''))
        }
      }
    }

    this.$el.removeAttribute('role')

    // show no records
    if (!hasTr) {
      this.$body.innerHTML = Utils.sprintf('<tr class="no-records-found"><td colspan="%s">%s</td></tr>',
        this.getVisibleFields().length + Utils.getDetailViewIndexOffset(this.options),
        this.options.formatNoMatches())
      this.$el.setAttribute('role', 'presentation')
    } else if (!this.options.virtualScroll) {
      this.$body.innerHTML = ''
      this.$body.appendChild(trFragments)
    } else {
      if (this.virtualScroll) {
        this.virtualScroll.destroy()
      }
      this.virtualScroll = new VirtualScroll({
        rows,
        fixedScroll,
        scrollEl: this.$tableBody,
        contentEl: this.$body,
        itemHeight: this.options.virtualScrollItemHeight,
        callback: (startIndex, endIndex) => {
          this.fitHeader()
          this.initBodyEvent()
          this.trigger('virtual-scroll', startIndex, endIndex)
        }
      })
    }

    toExpand.forEach(index => {
      this.expandRow(index)
    })

    if (!fixedScroll) {
      this.scrollTo(0)
    }

    this.initBodyEvent()
    this.initFooter()
    this.resetView()
    this.updateSelected()

    if (this.options.sidePagination !== 'server') {
      this.options.totalRows = data.length
    }

    this.trigger('post-body', data)
  },

  resetView (params) {
    let padding = 0

    if (params && params.height) {
      this.options.height = params.height
    }

    this.$tableContainer.classList.toggle('has-card-view', this.options.cardView)

    if (this.options.height) {
      const fixedBody = this.$tableBody

      this.hasScrollBar = fixedBody.scrollWidth > fixedBody.clientWidth
    }

    if (!this.options.cardView && this.options.showHeader && this.options.height) {
      this.$tableHeader.style.display = ''
      this.resetHeader()
      padding += this.$header.offsetHeight + 1
    } else {
      this.$tableHeader.style.display = 'none'
      this.trigger('post-header')
    }

    if (!this.options.cardView && this.options.showFooter) {
      this.$tableFooter.style.display = ''
      this.fitFooter()
      if (this.options.height) {
        padding += this.$tableFooter.offsetHeight
      }
    }

    if (this.$container.classList.contains('fullscreen')) {
      this.$tableContainer.style.height = ''
      this.$tableContainer.style.width = ''
    } else if (this.options.height) {
      if (this.$tableBorder) {
        this.$tableBorder.style.width = ''
        this.$tableBorder.style.height = ''
      }

      const toolbarHeight = outerHeight(this.$toolbar)
      const paginationHeight = this.$pagination.reduce((sum, el) => sum + outerHeight(el), 0)
      const height = this.options.height - toolbarHeight - paginationHeight
      const bodyTable = this.$tableBody.querySelector(':scope > table')
      const tableHeight = bodyTable ? bodyTable.offsetHeight : 0

      this.$tableContainer.style.height = `${height}px`

      if (this.$tableBorder && bodyTable && bodyTable.offsetParent !== null) {
        let tableBorderHeight = height - tableHeight - 2

        if (this.hasScrollBar) {
          tableBorderHeight -= Utils.getScrollBarWidth()
        }
        this.$tableBorder.style.width = `${bodyTable.offsetWidth}px`
        this.$tableBorder.style.height = `${tableBorderHeight}px`
      }
    }

    if (this.options.cardView) {
      // remove the element css
      this.$el.style.marginTop = '0'
      this.$tableContainer.style.paddingBottom = '0'
      if (this.$tableFooter) this.$tableFooter.style.display = 'none'
    } else {
      // Assign the correct sortable arrow
      this.resetCaret()
      this.$tableContainer.style.paddingBottom = `${padding}px`
    }

    this.trigger('reset-view')
  },

  showLoading () {
    this.$tableLoading.classList.add('open')

    let fontSize = this.options.loadingFontSize

    if (this.options.loadingFontSize === 'auto') {
      fontSize = this.$tableLoading.offsetWidth * 0.04
      fontSize = Math.max(12, fontSize)
      fontSize = Math.min(32, fontSize)
      fontSize = `${fontSize}px`
    }

    const loadingWrap = this.$tableLoading.querySelector('.loading-wrap')

    if (loadingWrap) {
      loadingWrap.style.fontSize = fontSize
    } else {
      this.$tableLoading.style.fontSize = fontSize
    }

    const loadingText = this.$tableLoading.querySelector('.loading-text')

    if (loadingText) loadingText.style.fontSize = fontSize
  },

  hideLoading () {
    this.$tableLoading.classList.remove('open')
  },

  scrollTo (params) {
    let options = { unit: 'px', value: 0 }

    if (typeof params === 'object') {
      options = Object.assign(options, params)
    } else if (typeof params === 'string' && params === 'bottom') {
      options.value = this.$tableBody.scrollHeight
    } else if (typeof params === 'string' || typeof params === 'number') {
      options.value = params
    }

    let scrollTo = options.value

    if (options.unit === 'rows') {
      scrollTo = 0
      const trs = Array.from(this.$body.querySelectorAll(':scope > tr')).slice(0, options.value)

      trs.forEach(tr => {
        scrollTo += outerHeight(tr)
      })
    }

    this.$tableBody.scrollTop = scrollTo
  },

  getScrollPosition () {
    return this.$tableBody.scrollTop
  },

  showRow (params) {
    this._toggleRow(params, true)
  },

  hideRow (params) {
    this._toggleRow(params, false)
  },

  _toggleRow (params, visible) {
    let row

    if (params.hasOwnProperty('index')) {
      row = this.getData()[params.index]
    } else if (params.hasOwnProperty('uniqueId')) {
      row = this.getRowByUniqueId(params.uniqueId)
    }

    if (!row) {
      return
    }

    const index = Utils.findIndex(this.hiddenRows, row)

    if (!visible && index === -1) {
      this.hiddenRows.push(row)
    } else if (visible && index > -1) {
      this.hiddenRows.splice(index, 1)
    }

    this.initBody(true)
    this.initPagination()
  },

  getHiddenRows (show) {
    if (show) {
      this.initHiddenRows()
      this.initBody(true)
      this.initPagination()
      return
    }
    const data = this.getData()
    const rows = []

    for (const row of data) {
      if (this.hiddenRows.includes(row)) {
        rows.push(row)
      }
    }
    this.hiddenRows = rows
    return rows
  },

  showColumn (field) {
    this._toggleColumns(Array.isArray(field) ? field : [field], true, true)
  },

  hideColumn (field) {
    this._toggleColumns(Array.isArray(field) ? field : [field], false, true)
  },

  _toggleColumnVisibility (index, checked) {
    if (index === undefined || this.columns[index].visible === checked) {
      return false
    }
    this.columns[index].visible = checked
    return true
  },

  _updateAfterColumnToggle (changedIndices, checked, needUpdate) {
    this.initHeader()
    this.initSearch()
    this.initPagination()
    this.initBody()

    if (this.options.showColumns) {
      const items = Array.from(this.$toolbar.querySelectorAll('.keep-open input:not(.toggle-all)'))

      items.forEach(el => {
        el.disabled = false
      })

      if (needUpdate) {
        for (const index of changedIndices) {
          const item = items.find(el => el.value === String(index))

          if (item) item.checked = checked
        }
      }

      const checkedItems = items.filter(el => el.checked)

      if (checkedItems.length <= this.options.minimumCountColumns) {
        checkedItems.forEach(el => {
          el.disabled = true
        })
      }
    }
  },

  _toggleColumns (fields, checked, needUpdate) {
    if (!fields.length) {
      return
    }

    const changedIndices = []

    for (const field of fields) {
      const index = this.fieldsColumnsIndex[field]

      if (this._toggleColumnVisibility(index, checked)) {
        changedIndices.push(index)
      }
    }

    if (changedIndices.length) {
      this._updateAfterColumnToggle(changedIndices, checked, needUpdate)
    }
  },

  showAllColumns () {
    this._toggleAllColumns(true)
  },

  hideAllColumns () {
    this._toggleAllColumns(false)
  },

  _toggleAllColumns (visible) {
    for (const column of this.columns.slice().reverse()) {
      if (column.switchable) {
        if (
          !visible &&
          this.options.showColumns &&
          this.getVisibleColumns().filter(it => it.switchable).length === this.options.minimumCountColumns
        ) {
          continue
        }
        column.visible = visible
      }
    }

    this.initHeader()
    this.initSearch()
    this.initPagination()
    this.initBody()
    if (this.options.showColumns) {
      const items = Array.from(this.$toolbar.querySelectorAll('.keep-open input[type="checkbox"]:not(.toggle-all)'))

      items.forEach(el => {
        el.disabled = false
      })

      if (visible) {
        items.forEach(el => {
          el.checked = visible
        })
      } else {
        items.slice().reverse().forEach(item => {
          const checkedItems = items.filter(el => el.checked)

          if (checkedItems.length > this.options.minimumCountColumns) {
            item.checked = visible
          }
        })
      }

      const checkedItems = items.filter(el => el.checked)

      if (checkedItems.length <= this.options.minimumCountColumns) {
        checkedItems.forEach(el => {
          el.disabled = true
        })
      }
    }
  },

  mergeCells (options) {
    const row = options.index
    let col = this.getVisibleFields().indexOf(options.field)
    const rowspan = +options.rowspan || 1
    const colspan = +options.colspan || 1
    let i
    let j
    const trs = Array.from(this.$body.querySelectorAll(':scope > tr[data-index]'))

    col += Utils.getDetailViewIndexOffset(this.options)

    const td = trs[row] ? Array.from(trs[row].querySelectorAll(':scope > td'))[col] : null

    if (row < 0 || col < 0 || row >= this.data.length) {
      return
    }

    for (i = row; i < row + rowspan; i++) {
      const rowTds = trs[i] ? Array.from(trs[i].querySelectorAll(':scope > td')) : []

      for (j = col; j < col + colspan; j++) {
        if (rowTds[j]) rowTds[j].style.display = 'none'
      }
    }

    if (td) {
      td.setAttribute('rowspan', rowspan)
      td.setAttribute('colspan', colspan)
      td.style.display = ''
    }
  },

  getVisibleColumns () {
    return this.columns.filter(column => column.visible && !this.isSelectionColumn(column))
  },

  getHiddenColumns () {
    return this.columns.filter(({ visible }) => !visible)
  }
}

function outerHeight (el) {
  if (!el) return 0
  const style = getComputedStyle(el)

  return el.offsetHeight + (parseInt(style.marginTop) || 0) + (parseInt(style.marginBottom) || 0)
}
