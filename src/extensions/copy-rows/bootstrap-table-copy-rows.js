/**
 * @author Homer Glascock <HopGlascock@gmail.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */


const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.locales, {
  formatCopyRows () {
    return 'Copy Rows'
  }
})
Object.assign(BootstrapTable.defaults, BootstrapTable.locales)

Utils.assignIcons(BootstrapTable.icons, 'copy', {
  glyphicon: 'glyphicon-copy icon-pencil',
  fa: 'fa-copy',
  bi: 'bi-clipboard',
  icon: 'icon-copy',
  'material-icons': 'content_copy'
})

const copyText = text => {
  const textField = document.createElement('textarea')

  textField.innerHTML = text
  document.body.appendChild(textField)
  textField.select()

  try {
    document.execCommand('copy')
  } catch (e) {
    console.warn('Oops, unable to copy', e)
  }
  textField.remove()
}

Object.assign(BootstrapTable.defaults, {
  showCopyRows: false,
  copyWithHidden: false,
  copyDelimiter: ', ',
  copyNewline: '\n',
  copyRowsHandler (text) {
    return text
  }
})

Object.assign(BootstrapTable.columnDefaults, {
  ignoreCopy: false,
  rawCopy: false
})

BootstrapTable.methods.push(
  'copyColumnsToClipboard'
)

export default class extends BootstrapTable {

  initToolbar (...args) {
    if (this.options.showCopyRows && this.header.stateField) {
      this.buttons = Object.assign(this.buttons, {
        copyRows: {
          text: this.options.formatCopyRows(),
          icon: this.options.icons.copy,
          event: this.copyColumnsToClipboard,
          attributes: {
            'aria-label': this.options.formatCopyRows(),
            title: this.options.formatCopyRows()
          }
        }
      })
    }

    super.initToolbar(...args)
    this.$copyButton = this.$toolbar.querySelector(':scope > .columns [name="copyRows"]')

    if (this.options.showCopyRows && this.header.stateField) {
      this.updateCopyButton()
    }
  }

  copyColumnsToClipboard () {
    const rows = []

    for (const row of this.getSelections()) {
      const cols = []

      this.options.columns[0].forEach((column, index) => {
        if (
          column.field !== this.header.stateField &&
          (!this.options.copyWithHidden || this.options.copyWithHidden && column.visible) &&
          !column.ignoreCopy
        ) {
          if (row[column.field] !== null) {
            const columnValue = column.rawCopy ? row[column.field] :
              Utils.calculateObjectValue(column, this.header.formatters[index], [row[column.field], row, index], row[column.field])

            cols.push(columnValue)
          }
        }
      })
      rows.push(cols.join(this.options.copyDelimiter))
    }

    let text = rows.join(this.options.copyNewline)

    text = Utils.calculateObjectValue(this.options, this.options.copyRowsHandler, [text], text)

    copyText(text)
  }

  updateSelected () {
    super.updateSelected()
    this.updateCopyButton()
  }

  updateCopyButton () {
    if (this.options.showCopyRows && this.header.stateField && this.$copyButton) {
      this.$copyButton.disabled = !this.getSelections().length
    }
  }
}
