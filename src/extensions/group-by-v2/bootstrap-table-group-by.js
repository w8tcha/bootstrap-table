/**
 * @author: Yura Knoxville
 * @version: v1.1.0
 */



const Utils = BootstrapTable.utils
let initBodyCaller

const groupBy = (array, f) => {
  const tmpGroups = new Map()

  array.forEach(o => {
    const groups = f(o)

    if (!tmpGroups.has(groups)) {
      tmpGroups.set(groups, [])
    }
    tmpGroups.get(groups).push(o)
  })

  return Object.fromEntries(tmpGroups)
}

Utils.assignIcons(BootstrapTable.icons, 'collapseGroup', {
  glyphicon: 'glyphicon-chevron-up',
  fa: 'fa-angle-up',
  bi: 'bi-chevron-up',
  'material-icons': 'arrow_drop_down'
})

Utils.assignIcons(BootstrapTable.icons, 'expandGroup', {
  glyphicon: 'glyphicon-chevron-down',
  fa: 'fa-angle-down',
  bi: 'bi-chevron-down',
  'material-icons': 'arrow_drop_up'
})

Object.assign(BootstrapTable.defaults, {
  groupBy: false,
  groupByField: '',
  groupByFormatter: undefined,
  groupByToggle: false,
  groupByShowToggleIcon: false,
  groupByCollapsedGroups: []
})

const _initSort = BootstrapTable.prototype.initSort
const _initBody = BootstrapTable.prototype.initBody
const _updateSelected = BootstrapTable.prototype.updateSelected

BootstrapTable.prototype.initSort = function (...args) {
  // for custom sort
  this.enableCustomSort = this.options.groupBy && this.options.groupByField !== ''
  this.tableGroups = []

  _initSort.apply(this, args)

  if (!this.enableCustomSort) {
    return
  }

  // Initialize group expand/collapse state tracking
  if (!this._groupCollapsedState) {
    this._groupCollapsedState = new Map()
    // Pre-populate with default collapsed groups
    if (this.options.groupByCollapsedGroups) {
      let collapsedGroups = this.options.groupByCollapsedGroups

      if (typeof collapsedGroups === 'string') {
        collapsedGroups = Utils.parseStringArray(collapsedGroups)
      }

      if (Array.isArray(collapsedGroups)) {
        collapsedGroups.forEach(group => {
          this._groupCollapsedState.set(group, true)
        })
      }
    }
  }
  if (this.options.sortName !== this.options.groupByField) {
    if (this.options.customSort) {
      Utils.calculateObjectValue(this.options, this.options.customSort, [
        this.options.sortName,
        this.options.sortOrder,
        this.data
      ])
    } else {
      const groupByFields = this.getGroupByFields()

      this.data.sort((a, b) => {
        const fieldValuesA = groupByFields.map(field => a[field])
        const fieldValuesB = groupByFields.map(field => b[field])

        return fieldValuesA.join().localeCompare(fieldValuesB.join(), undefined, { numeric: true })
      })
    }
  }

  const groups = groupBy(this.data, item => {
    const groupByFields = this.getGroupByFields()
    const groupValues = []

    for (const field of groupByFields) {
      const value_ = Utils.getItemField(item, field, this.options.escape, item.escape)

      groupValues.push(value_)
    }

    return groupValues.join(', ')
  })

  let index = 0

  for (const [key, value] of Object.entries(groups)) {
    this.tableGroups.push({
      id: index,
      name: key,
      data: value
    })

    value.forEach(item => {
      // Clone _data to avoid modifying original dataset reference
      item._data = { ...item._data || {}, 'parent-index': index }

      // Remove existing hidden class from previous render
      if (item._class) {
        item._class = item._class
          .split(/\s+/)
          .filter(className => className && className !== 'hidden')
          .join(' ')
      }

      // Add hidden class if collapsed
      if (this.isCollapsed(key)) {
        item._class = `${item._class || ''} hidden`
      }
    })

    index++
  }
}

BootstrapTable.prototype.initBody = function (...args) {
  initBodyCaller = true

  this.initSort()

  _initBody.apply(this, args)

  if (this.options.groupBy && this.options.groupByField !== '') {
    let checkBox = false
    let visibleColumns = 0

    this.columns.forEach(column => {
      if (column.checkbox && !this.options.singleSelect) {
        checkBox = true
      } else if (column.visible) {
        visibleColumns += 1
      }
    })

    if (this.options.detailView && !this.options.cardView) {
      visibleColumns += 1
    }

    this.tableGroups.forEach(item => {
      const html = []
      const isCollapsed = this.isCollapsed(item.name)
      const groupClass = this.options.groupByToggle ? isCollapsed ? 'collapsed' : 'expanded' : ''

      html.push(Utils.sprintf('<tr class="info group-by %s" data-group-index="%s">', groupClass, item.id))
      if (this.options.detailView && !this.options.cardView) {
        html.push('<td class="detail"></td>')
      }

      if (checkBox) {
        html.push('<td class="bs-checkbox">',
          Utils.getCheckboxHtml({
            name: 'btSelectGroup',
            centered: true,
            withLabel: false
          }),
          '</td>'
        )
      }

      const formattedValue = this.options.groupByFormatter ?
        Utils.calculateObjectValue(this.options, this.options.groupByFormatter, [item.name, item.id, item.data]) :
        item.name

      html.push('<td',
        Utils.sprintf(' colspan="%s"', visibleColumns),
        '>', formattedValue
      )

      const icon = isCollapsed ? this.options.icons.expandGroup : this.options.icons.collapseGroup

      if (this.options.groupByToggle && this.options.groupByShowToggleIcon) {
        html.push(`<span class="float-right ${this.options.iconsPrefix} ${icon}"></span>`)
      }

      html.push('</td></tr>')

      const firstRow = this.$body.querySelector(`tr[data-parent-index="${item.id}"]`)

      if (firstRow) {
        const template = document.createElement('template')

        template.innerHTML = html.join('')
        firstRow.before(template.content.firstElementChild)
      }
    })

    this.selectGroup = []
    for (const el of this.$body.querySelectorAll('[name="btSelectGroup"]')) {
      const groupIndex = +el.closest('tr').dataset.groupIndex

      this.selectGroup.push({
        group: el,
        item: this.$selectItem.filter(si => +si.closest('tr')?.dataset.parentIndex === groupIndex)
      })
    }

    if (this.options.groupByToggle) {
      if (this._groupByClickHandler) {
        this.$container.removeEventListener('click', this._groupByClickHandler)
      }
      this._groupByClickHandler = event => {
        const groupRow = event.target.closest('.group-by')

        if (!groupRow) return
        const groupIndex = +groupRow.dataset.groupIndex
        const groupRows = [...this.$body.querySelectorAll(`tr[data-parent-index="${groupIndex}"]`)]

        groupRow.classList.toggle('expanded')
        groupRow.classList.toggle('collapsed')
        const span = groupRow.querySelector('span')

        if (span) {
          span.classList.toggle(this.options.icons.collapseGroup)
          span.classList.toggle(this.options.icons.expandGroup)
        }
        groupRows.forEach(row => row.classList.toggle('hidden'))

        // Store the user's toggle state
        const groupItem = this.tableGroups.find(g => g.id === groupIndex)

        if (groupItem) {
          this._groupCollapsedState.set(groupItem.name, groupRow.classList.contains('collapsed'))
        }

        for (const element of groupRows) {
          this.collapseRow(+element.dataset.index)
        }
      }
      this.$container.addEventListener('click', this._groupByClickHandler)
    }

    if (this._groupSelectHandler) {
      this.$container.removeEventListener('click', this._groupSelectHandler)
    }
    this._groupSelectHandler = event => {
      const checkbox = event.target.closest('[name="btSelectGroup"]')

      if (!checkbox) return
      event.stopImmediatePropagation()

      const checked = checkbox.checked

      this[checked ? 'checkGroup' : 'uncheckGroup'](+checkbox.closest('tr').dataset.groupIndex)
    }
    this.$container.addEventListener('click', this._groupSelectHandler)
  }

  initBodyCaller = false
  this.updateSelected()
}

BootstrapTable.prototype.updateSelected = function (...args) {
  if (!initBodyCaller) {
    _updateSelected.apply(this, args)

    if (this.options.groupBy && this.options.groupByField !== '') {
      this.selectGroup.forEach(item => {
        const enabledItems = item.item.filter(el => !el.disabled)

        item.group.checked = enabledItems.length > 0 &&
          enabledItems.length === enabledItems.filter(el => el.checked).length
      })
    }
  }
}

BootstrapTable.prototype.checkGroup = function (index) {
  this.checkGroup_(index, true)
}

BootstrapTable.prototype.uncheckGroup = function (index) {
  this.checkGroup_(index, false)
}

BootstrapTable.prototype.isCollapsed = function (groupKey) {
  // First, respect any explicitly stored collapsed state
  if (this._groupCollapsedState && this._groupCollapsedState.has(groupKey)) {
    return this._groupCollapsedState.get(groupKey)
  }

  let groupByCollapsedGroups = this.options.groupByCollapsedGroups

  if (typeof groupByCollapsedGroups === 'string') {
    groupByCollapsedGroups = Utils.parseStringArray(groupByCollapsedGroups)
  }

  const result = Utils.calculateObjectValue(this.options, groupByCollapsedGroups, [groupKey], false)

  if (Array.isArray(result)) {
    return result.includes(groupKey)
  }

  if (typeof result === 'boolean') {
    return result
  }

  return false
}

BootstrapTable.prototype.checkGroup_ = function (index, checked) {
  const rowsBefore = this.getSelections()

  this.$selectItem
    .filter(el => +el.closest('tr')?.dataset.parentIndex === index)
    .forEach(el => {
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
}

BootstrapTable.prototype.getGroupByFields = function () {
  return Array.isArray(this.options.groupByField) ? this.options.groupByField : [this.options.groupByField]
}

export default class extends BootstrapTable {
  scrollTo (params) {
    if (this.options.groupBy) {
      let options = { unit: 'px', value: 0 }

      if (typeof params === 'object') {
        options = Object.assign(options, params)
      }

      if (options.unit === 'rows') {
        let scrollTo = 0

        const rows = [...this.$body.querySelectorAll(':scope > tr:not(.group-by)')]
          .slice(0, options.value)

        for (const row of rows) {
          scrollTo += row.offsetHeight
        }

        const targetRow = [...this.$body.querySelectorAll(':scope > tr:not(.group-by)')][options.value]
        const prevGroupRows = []
        let prev = targetRow?.previousElementSibling

        while (prev) {
          if (prev.classList.contains('group-by')) {
            prevGroupRows.push(prev)
          }
          prev = prev.previousElementSibling
        }

        for (const row of prevGroupRows) {
          scrollTo += row.offsetHeight
        }

        this.$tableBody.scrollTop = scrollTo
        return
      }
    }

    super.scrollTo(params)
  }
}
