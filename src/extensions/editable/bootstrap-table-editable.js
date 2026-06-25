/* eslint-disable no-unused-vars */
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/vitalets/x-editable
 *
 * Note: this extension depends on the x-editable jQuery plugin.
 * jQuery must be available and the plugin loaded for this to work.
 */



const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.defaults, {
  editable: true,
  onEditableInit () {
    return false
  },
  onEditableSave (field, row, rowIndex, oldValue, el) {
    return false
  },
  onEditableShown (field, row, el, editable) {
    return false
  },
  onEditableHidden (field, row, el, reason) {
    return false
  }
})

Object.assign(BootstrapTable.columnDefaults, {
  alwaysUseFormatter: false
})

Object.assign(BootstrapTable.events, {
  'editable-init.bs.table': 'onEditableInit',
  'editable-save.bs.table': 'onEditableSave',
  'editable-shown.bs.table': 'onEditableShown',
  'editable-hidden.bs.table': 'onEditableHidden'
})

export default class extends BootstrapTable {
  initTable () {
    super.initTable()

    if (!this.options.editable) {
      return
    }

    this.editedCells = []
    this.columns.forEach((column, i) => {
      if (!column.editable) {
        return
      }

      const editableOptions = {}
      const editableDataPrefix = 'editable-'
      const processDataOptions = (key, value) => {
        // Replace camel case with dashes.
        const dashKey = key.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`)

        if (dashKey.indexOf(editableDataPrefix) === 0) {
          editableOptions[dashKey.replace(editableDataPrefix, 'data-')] = value
        }
      }

      const formatterIsSet = column.formatter ? true : false

      Object.entries(this.options).forEach(([key, value]) => processDataOptions(key, value))

      column.formatter = column.formatter || (value => value)
      column._formatter = column._formatter ? column._formatter : column.formatter
      column.formatter = (value, row, index, field) => {
        let result = Utils.calculateObjectValue(column, column._formatter, [value, row, index, field], value)

        result = typeof result === 'undefined' || result === null ? this.options.undefinedText : result
        if (this.options.uniqueId !== undefined && !column.alwaysUseFormatter) {
          const uniqueId = Utils.getItemField(row, this.options.uniqueId, false)

          if (this.editedCells.indexOf(column.field + uniqueId) !== -1) {
            result = value
          }
        }

        Object.entries(column).forEach(([key, value]) => processDataOptions(key, value))

        const editableOpts = Utils.calculateObjectValue(column,
          column.editable, [index, row], {})
        const noEditFormatter = Object.prototype.hasOwnProperty.call(editableOpts, 'noEditFormatter') &&
                                editableOpts.noEditFormatter(value, row, index, field)

        if (noEditFormatter) {
          return noEditFormatter
        }

        let editableDataMarkup = ''

        Object.entries(editableOptions).forEach(([key, value]) => {
          editableDataMarkup += ` ${key}="${value}"`
        })

        return `<a href="javascript:void(0)"
          data-name="${column.field}"
          data-pk="${row[this.options.idField]}"
          data-value="${value || ''}"
          ${editableDataMarkup}>${formatterIsSet ? result : ''}</a>` // expand all data-editable-XXX
      }
    })
  }

  initBody (fixedScroll) {
    super.initBody(fixedScroll)

    if (!this.options.editable) {
      return
    }

    this.columns.forEach((column, i) => {
      if (!column.editable) {
        return
      }

      const data = this.getData({ escape: true })
      const fields = [...this.$body.querySelectorAll(`a[data-name="${column.field}"]`)]

      fields.forEach((element, i) => {
        const tr = element.closest('tr')
        const index = +tr.dataset.index
        const row = data[index]

        const editableOpts = Utils.calculateObjectValue(column,
          column.editable, [index, row, element], {})

        // x-editable requires jQuery
        if (typeof window.$ !== 'undefined') {
          $(element).editable(editableOpts)
        }
      })

      // x-editable events require jQuery
      if (typeof window.$ !== 'undefined') {
        const $fields = $(this.$body).find(`a[data-name="${column.field}"]`)

        $fields.off('save').on('save', ({ currentTarget }, { submitValue }) => {
          const data = this.getData()
          const rowIndex = currentTarget.closest('tr[data-index]') ?
            +currentTarget.closest('tr[data-index]').dataset.index : -1
          const row = data[rowIndex]
          const oldValue = row[column.field]

          if (this.options.uniqueId !== undefined && !column.alwaysUseFormatter) {
            const uniqueId = Utils.getItemField(row, this.options.uniqueId, false)

            if (this.editedCells.indexOf(column.field + uniqueId) === -1) {
              this.editedCells.push(column.field + uniqueId)
            }
          }

          submitValue = Utils.escapeHTML(submitValue)
          currentTarget.dataset.value = submitValue
          row[column.field] = submitValue
          this.trigger('editable-save', column.field, row, rowIndex, oldValue, currentTarget)
          this.initBody()
        })

        $fields.off('shown').on('shown', ({ currentTarget }, editable) => {
          const data = this.getData()
          const rowIndex = currentTarget.closest('tr[data-index]') ?
            +currentTarget.closest('tr[data-index]').dataset.index : -1
          const row = data[rowIndex]

          this.trigger('editable-shown', column.field, row, currentTarget, editable)
        })

        $fields.off('hidden').on('hidden', ({ currentTarget }, reason) => {
          const data = this.getData()
          const rowIndex = currentTarget.closest('tr[data-index]') ?
            +currentTarget.closest('tr[data-index]').dataset.index : -1
          const row = data[rowIndex]

          this.trigger('editable-hidden', column.field, row, currentTarget, reason)
        })
      }
    })
    this.trigger('editable-init')
  }

  getData (params) {
    const data = super.getData(params)

    if (params && params.escape) {
      for (const row of data) {
        for (const [key, value] of Object.entries(row)) {
          row[key] = Utils.unescapeHTML(value)
        }
      }
    }

    return data
  }
}
