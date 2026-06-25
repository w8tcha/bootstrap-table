
export default {
  updateSelected () {
    const enabled = this.$selectItem.filter(el => !el.disabled)
    const checkAll = enabled.length > 0 &&
      enabled.length === enabled.filter(el => el.checked).length;

    [this.$selectAll, this.$selectAll_].filter(Boolean).forEach(el => {
      el.checked = checkAll
    })

    this.$selectItem.forEach(el => {
      el.closest('tr')?.classList.toggle('selected', el.checked)
    })
  },

  isSelectionColumn (column) {
    return column.radio || column.checkbox
  },

  getSelections () {
    return (this.options.maintainMetaData ? this.options.data : this.data)
      .filter(row => row[this.header.stateField] === true)
  },

  updateRows () {
    this.$selectItem.forEach(el => {
      this.data[+el.dataset.index][this.header.stateField] = el.checked
    })
  },

  resetRows () {
    if (this.data.length) {
      if (this.$selectAll) this.$selectAll.checked = false
      this.$selectItem.forEach(el => {
        el.checked = false
      })
    }
    if (this.header.stateField) {
      for (const row of this.data) {
        row[this.header.stateField] = false
      }
    }
    this.initHiddenRows()
  },

  checkAll () {
    this._toggleCheckAll(true)
  },

  uncheckAll () {
    this._toggleCheckAll(false)
  },

  _toggleCheckAll (checked) {
    const rowsBefore = this.getSelections();

    [this.$selectAll, this.$selectAll_].filter(Boolean).forEach(el => {
      el.checked = checked
    })
    this.$selectItem.filter(el => !el.disabled).forEach(el => {
      el.checked = checked
    })
    this.updateRows()
    this.updateSelected()

    const rowsAfter = this.getSelections()

    if (checked) {
      this.trigger('check-all', rowsAfter, rowsBefore)
      return
    }

    this.trigger('uncheck-all', rowsAfter, rowsBefore)
  },

  checkInvert () {
    const items = this.$selectItem.filter(el => !el.disabled)
    let checked = items.filter(el => el.checked)

    items.forEach(el => {
      el.checked = !el.checked
    })
    this.updateRows()
    this.updateSelected()
    this.trigger('uncheck-some', checked)
    checked = this.getSelections()
    this.trigger('check-some', checked)
  },

  check (index) {
    this._toggleCheck(true, index)
  },

  uncheck (index) {
    this._toggleCheck(false, index)
  },

  _toggleCheck (checked, index) {
    const $el = this.$selectItem.filter(el => +el.dataset.index === index)
    const row = this.data[index]

    if (
      $el.length > 0 && $el[0].type === 'radio' ||
      this.options.singleSelect ||
      this.options.multipleSelectRow &&
      !this.multipleSelectRowCtrlKey &&
      !this.multipleSelectRowShiftKey
    ) {
      for (const r of this.options.data) {
        r[this.header.stateField] = false
      }
      this.$selectItem.filter(el => el.checked && !$el.includes(el)).forEach(el => {
        el.checked = false
      })
    }

    row[this.header.stateField] = checked

    if (this.options.multipleSelectRow) {
      if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
        const [fromIndex, toIndex] = this.multipleSelectRowLastSelectedIndex < index ?
          [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex]

        for (let i = fromIndex + 1; i < toIndex; i++) {
          this.data[i][this.header.stateField] = true
          this.$selectItem.filter(el => +el.dataset.index === i).forEach(el => {
            el.checked = true
          })
        }
      }

      this.multipleSelectRowCtrlKey = false
      this.multipleSelectRowShiftKey = false
      this.multipleSelectRowLastSelectedIndex = checked ? index : -1
    }

    $el.forEach(el => {
      el.checked = checked
    })
    this.updateSelected()
    this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el[0])
  },

  checkBy (obj) {
    this._toggleCheckBy(true, obj)
  },

  uncheckBy (obj) {
    this._toggleCheckBy(false, obj)
  },

  _toggleCheckBy (checked, obj) {
    if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
      return
    }

    const rows = []

    this.data.forEach((row, i) => {
      if (!row.hasOwnProperty(obj.field)) {
        return false
      }
      if (obj.values.includes(row[obj.field])) {
        let els = this.$selectItem
          .filter(el => !el.disabled)
          .filter(el => +el.dataset.index === i)
        const onlyCurrentPage = obj.hasOwnProperty('onlyCurrentPage') ? obj.onlyCurrentPage : false

        els = checked ? els.filter(el => !el.checked) : els.filter(el => el.checked)

        if (!els.length && onlyCurrentPage) {
          return
        }

        els.forEach(el => {
          el.checked = checked
        })
        row[this.header.stateField] = checked
        rows.push(row)
        this.trigger(checked ? 'check' : 'uncheck', row, els[0])
      }
    })
    this.updateSelected()
    this.trigger(checked ? 'check-some' : 'uncheck-some', rows)
  }
}
