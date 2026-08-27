/**
 * @author: Dennis Hernández
 * @update: https://github.com/wenzhixin
 * @version: v1.2.0
 *
 * Note: this extension depends on the jQuery dragtable plugin.
 * jQuery must be available and the plugin loaded for this to work.
 */


if (typeof window.$ !== 'undefined' && window.$.akottr?.dragtable?.prototype) {
  window.$.akottr.dragtable.prototype._restoreState = function (persistObj) {
    let i = 0

    for (const [field, value] of Object.entries(persistObj)) {
      const $th = this.originalTable.el.find(`th[data-field="${field}"]`)

      if (!$th.length) {
        i++
        continue
      }

      this.originalTable.startIndex = $th.prevAll().length + 1
      this.originalTable.endIndex = parseInt(value, 10) + 1 - i
      this._bubbleCols()
    }
  }
}

Object.assign(BootstrapTable.defaults, {
  reorderableColumns: false,
  maxMovingRows: 10,
  // eslint-disable-next-line no-unused-vars
  onReorderColumn (headerFields) {
    return false
  },
  dragaccept: null
})

Object.assign(BootstrapTable.events, {
  'reorder-column.bs.table': 'onReorderColumn'
})

BootstrapTable.methods.push('orderColumns')

export default class extends BootstrapTable {
  initHeader (...args) {
    super.initHeader(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    if (this.columnsSortOrder) {
      this.syncColumnsStateFromDOM()
      super.initHeader(...args)
    }

    this.makeColumnsReorderable()
  }

  syncColumnsStateFromDOM () {
    const ths = []
    const formatters = []
    const columns = []
    const optionsColumns = []

    const headerRows = this.$header.querySelectorAll('tr')
    const lastRow = headerRows[headerRows.length - 1] || this.$header
    const headerCells = [...(lastRow.querySelectorAll ? lastRow : this.$header).querySelectorAll('th[data-field]:not(.detail)')]

    headerCells.forEach(el => {
      ths.push(el.dataset.field)
      formatters.push(el.dataset.formatter)
    })

    if (ths.length < this.columns.length) {
      const columnsHidden = this.columns.filter(column => !column.visible)

      for (let i = 0; i < columnsHidden.length; i++) {
        ths.push(columnsHidden[i].field)
        formatters.push(columnsHidden[i].formatter)
      }
    }

    for (let i = 0; i < ths.length; i++) {
      const columnIndex = this.fieldsColumnsIndex[ths[i]]

      if (!Number.isInteger(columnIndex) || !this.columns[columnIndex]) {
        continue
      }

      this.fieldsColumnsIndex[ths[i]] = i
      this.columns[columnIndex].fieldIndex = i
      columns.push(this.columns[columnIndex])
    }

    this.columns = columns

    for (const column of this.columns) {
      const field = column.field
      const matchedColumn = this.options.columns[0].find(item => item.field === field)

      if (matchedColumn) {
        optionsColumns.push(matchedColumn)
      }
    }

    this.options.columns[0] = optionsColumns
    this.header.fields = ths
    this.header.formatters = formatters
  }

  _toggleColumns (...args) {
    super._toggleColumns(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    this.makeColumnsReorderable()
  }

  toggleView (...args) {
    super.toggleView(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    if (this.options.cardView) {
      return
    }

    this.makeColumnsReorderable()
  }

  resetView (...args) {
    super.resetView(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    this.makeColumnsReorderable()
  }

  // requires cookie extension enabled to persist state
  _persistColumnsSortOrder () {
    if (this.options.cookie && typeof this.persistReorderColumnsState === 'function') {
      this.persistReorderColumnsState(this)
    }
  }

  makeColumnsReorderable (order = null) {
    if (typeof window.$ === 'undefined') {
      return
    }
    try {
      $(this.$el).dragtable('destroy')
    } catch {
      // ignore
    }
    $(this.$el).dragtable({
      maxMovingRows: this.options.maxMovingRows,
      dragaccept: this.options.dragaccept,
      clickDelay: 200,
      dragHandle: '.th-inner',
      restoreState: order ? order : this.columnsSortOrder,
      beforeStop: table => {
        const sortOrder = {}

        table.el.find('th').each((i, el) => {
          if (el.dataset.field !== undefined) {
            sortOrder[el.dataset.field] = i
          }
        })

        this.columnsSortOrder = sortOrder
        this._persistColumnsSortOrder()

        this.syncColumnsStateFromDOM()
        this.initHeader()
        this.initToolbar()
        this.initSearchText()
        this.initBody()
        this.resetView()
        this.trigger('reorder-column', this.header.fields)
      }
    })
  }

  orderColumns (order) {
    if (!order || typeof order !== 'object') {
      return
    }

    const headerRows = this.$header.querySelectorAll('tr')
    const lastRow = headerRows[headerRows.length - 1]
    const target = lastRow || this.$header

    const sortedEntries = Object.entries(order).sort((a, b) => a[1] - b[1])

    for (const [field] of sortedEntries) {
      const th = target.querySelector(`th[data-field="${field}"]`)

      if (th) {
        target.appendChild(th)
      }
    }

    this.columnsSortOrder = order
    this._persistColumnsSortOrder()
    this.syncColumnsStateFromDOM()
    this.initHeader()
    this.initToolbar()
    this.initSearchText()
    this.initBody()
    this.resetView()
    this.trigger('reorder-column', this.header.fields)
  }
}
