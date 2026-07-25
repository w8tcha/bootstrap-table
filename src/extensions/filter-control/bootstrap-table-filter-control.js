/**
 * @author: Dennis Hernández
 * @version: v3.0.1
 */


import * as UtilsFilterControl from './utils.js'
const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.defaults, {
  filterControl: false,
  filterControlVisible: true,
  filterControlMultipleSearch: false,
  filterControlMultipleSearchDelimiter: ',',
  filterControlSearchClear: true,
  // eslint-disable-next-line no-unused-vars
  onColumnSearch (field, text) {
    return false
  },
  onCreatedControls () {
    return false
  },
  alignmentSelectControlOptions: undefined,
  filterTemplate: {
    input (that, column, placeholder, value) {
      return Utils.sprintf(
        '<input type="search" class="%s bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">',
        UtilsFilterControl.getInputClass(that),
        column.field,
        'undefined' === typeof placeholder ? '' : placeholder,
        'undefined' === typeof value ? '' : value
      )
    },

    select (that, column) {
      return Utils.sprintf(
        '<select class="%s bootstrap-table-filter-control-%s %s" %s style="width: 100%;" dir="%s"></select>',
        UtilsFilterControl.getInputClass(that, true),
        column.field,
        '',
        '',
        UtilsFilterControl.getDirectionOfSelectOptions(
          that.options.alignmentSelectControlOptions
        )
      )
    },

    datepicker (that, column, value) {
      return Utils.sprintf(
        '<input type="date" class="%s date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">',
        UtilsFilterControl.getInputClass(that),
        column.field,
        'undefined' === typeof value ? '' : value
      )
    }
  },
  searchOnEnterKey: false,
  showFilterControlSwitch: false,
  sortSelectOptions: false,
  // internal variables
  _valuesFilterControl: [],
  _initialized: false,
  _isRendering: false,
  _usingMultipleSelect: false
})

Object.assign(BootstrapTable.columnDefaults, {
  filterControl: undefined, // input, select, datepicker
  filterControlMultipleSelect: false,
  filterControlMultipleSelectOptions: {},
  filterDataCollector: undefined,
  filterData: undefined,
  filterDatepickerOptions: {},
  filterStrictSearch: false,
  filterStartsWithSearch: false,
  filterControlPlaceholder: '',
  filterDefault: '',
  filterOrderBy: 'asc', // asc || desc
  filterCustomSearch: undefined
})

Object.assign(BootstrapTable.events, {
  'column-search.bs.table': 'onColumnSearch',
  'created-controls.bs.table': 'onCreatedControls'
})

Utils.assignIcons(BootstrapTable.icons, 'filterControlSwitchHide', {
  glyphicon: 'glyphicon-zoom-out icon-zoom-out',
  fa: 'fa-search-minus',
  bi: 'bi-zoom-out',
  'material-icons': 'zoom_out'
})

Utils.assignIcons(BootstrapTable.icons, 'filterControlSwitchShow', {
  glyphicon: 'glyphicon-zoom-in icon-zoom-in',
  fa: 'fa-search-plus',
  bi: 'bi-zoom-in',
  'material-icons': 'zoom_in'
})

Object.assign(BootstrapTable.locales, {
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  },
  formatClearSearch () {
    return 'Clear filters'
  }
})
Object.assign(BootstrapTable.defaults, BootstrapTable.locales)

BootstrapTable.methods.push('triggerSearch')
BootstrapTable.methods.push('clearFilterControl')
BootstrapTable.methods.push('toggleFilterControl')

export default class extends BootstrapTable {
  init () {
    // Make sure that the filterControl option is set
    if (this.options.filterControl) {
      // Make sure that the internal variables are set correctly
      this._valuesFilterControl = []
      this._initialized = false
      this._usingMultipleSelect = false
      this._isRendering = false

      this.$el.addEventListener('reset-view.bs.table', Utils.debounce(() => {
        UtilsFilterControl.initFilterSelectControls(this)
        UtilsFilterControl.setValues(this)
      }, 3))

      this.$el.addEventListener('toggle.bs.table', Utils.debounce(e => {
        const [cardView] = e.detail || []

        this._initialized = false
        if (!cardView) {
          UtilsFilterControl.initFilterSelectControls(this)
          UtilsFilterControl.setValues(this)
          this._initialized = true
        }
      }, 1))

      this.$el.addEventListener('post-header.bs.table', Utils.debounce(() => {
        UtilsFilterControl.initFilterSelectControls(this)
        UtilsFilterControl.setValues(this)
      }, 3))

      this.$el.addEventListener('column-switch.bs.table', Utils.debounce(() => {
        UtilsFilterControl.setValues(this)
        if (this.options.height) {
          this.fitHeader()
        }
      }, 1))

      this.$el.addEventListener('post-body.bs.table', Utils.debounce(() => {
        if (this.options.height && !this.options.filterControlContainer && this.options.filterControlVisible) {
          UtilsFilterControl.fixHeaderCSS(this)
        }
        this.$tableLoading.style.top = `${this.$header.offsetHeight + 1}px`
      }, 1))

      this.$el.addEventListener('all.bs.table', () => {
        UtilsFilterControl.syncHeaders(this)
      })
    }

    super.init()
  }

  initBody () {
    super.initBody()
    if (!this.options.filterControl) {
      return
    }
    setTimeout(() => {
      UtilsFilterControl.initFilterSelectControls(this)
      UtilsFilterControl.setValues(this)
    }, 3)
  }

  load (data) {
    super.load(data)

    if (!this.options.filterControl) {
      return
    }

    UtilsFilterControl.createControls(this, UtilsFilterControl.getControlContainer(this))
    UtilsFilterControl.setValues(this)
  }

  initHeader () {
    super.initHeader()
    if (!this.options.filterControl) {
      return
    }

    UtilsFilterControl.createControls(this, UtilsFilterControl.getControlContainer(this))
    this._initialized = true
  }

  initSearch () {
    const that = this
    const filterPartial = Utils.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial

    super.initSearch()

    if (this.options.sidePagination === 'server' || filterPartial === null) {
      return
    }

    // Check partial column filter
    that.data = filterPartial ?
      that.data.filter((item, i) => {
        const itemIsExpected = []
        const keys1 = Object.keys(item)
        const keys2 = Object.keys(filterPartial)
        const keys = keys1.concat(keys2.filter(item => !keys1.includes(item)))

        keys.forEach(key => {
          const thisColumn = that.columns[that.fieldsColumnsIndex[key]]
          const rawFilterValue = filterPartial[key] || ''
          let filterValue = rawFilterValue.toLowerCase()
          let value = Utils.unescapeHTML(Utils.getItemField(item, key, false))
          let tmpItemIsExpected

          if (this.options.searchAccentNeutralise) {
            filterValue = Utils.normalizeAccent(filterValue)
          }

          let filterValues = [filterValue]

          if (
            this.options.filterControlMultipleSearch
          ) {
            filterValues = filterValue.split(this.options.filterControlMultipleSearchDelimiter)
          }

          filterValues.forEach(filterValue => {
            if (tmpItemIsExpected === true) {
              return
            }

            filterValue = filterValue.trim()

            if (filterValue === '') {
              tmpItemIsExpected = true
            } else {
              // Fix #142: search use formatted data
              if (thisColumn) {
                if (thisColumn.searchFormatter || thisColumn._forceFormatter) {
                  value = Utils.calculateObjectValue(
                    thisColumn,
                    that.header.formatters[that.header.fields.indexOf(key)],
                    [value, item, i],
                    value
                  )
                }
              }

              if (that.header.fields.indexOf(key) !== -1) {
                if (value === undefined || value === null) {
                  tmpItemIsExpected = false
                } else if (typeof value === 'object' && thisColumn.filterCustomSearch) {
                  itemIsExpected.push(that.isValueExpected(rawFilterValue, value, thisColumn, key))
                } else if (typeof value === 'object' && Array.isArray(value)) {
                  value.forEach(objectValue => {
                    if (tmpItemIsExpected) {
                      return
                    }

                    tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key)
                  })
                } else if (typeof value === 'object' && !Array.isArray(value)) {
                  Object.values(value).forEach(objectValue => {
                    if (tmpItemIsExpected) {
                      return
                    }

                    tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key)
                  })
                } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                  tmpItemIsExpected = that.isValueExpected(filterValue, value, thisColumn, key)
                }
              }
            }
          })

          itemIsExpected.push(tmpItemIsExpected)
        })

        return !itemIsExpected.includes(false)
      }) :
      that.data

    that.unsortedData = [...that.data]
  }

  isValueExpected (searchValue, value, column, key) {
    let tmpItemIsExpected

    if (column.filterControl === 'select') {
      value = Utils.removeHTML(value.toString().toLowerCase())
    }

    if (this.options.searchAccentNeutralise) {
      value = Utils.normalizeAccent(value)
    }

    if (
      column.filterStrictSearch ||
      column.filterControl === 'select' && column.passed.filterStrictSearch !== false
    ) {
      tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase()
    } else if (column.filterStartsWithSearch) {
      tmpItemIsExpected = `${value}`.toLowerCase().indexOf(searchValue) === 0
    } else if (column.filterControl === 'datepicker') {
      tmpItemIsExpected = new Date(value).getTime() === new Date(searchValue).getTime()
    } else if (this.options.regexSearch) {
      tmpItemIsExpected = Utils.regexCompare(value, searchValue)
    } else {
      tmpItemIsExpected = `${value}`.toLowerCase().includes(searchValue)
    }

    const largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm
    const matches = largerSmallerEqualsRegex.exec(searchValue)

    if (matches) {
      const operator = matches[1] || `${matches[5]}l`
      const comparisonValue = matches[2] || matches[3]
      const int = parseInt(value, 10)
      const comparisonInt = parseInt(comparisonValue, 10)

      switch (operator) {
        case '>':
        case '<l':
          tmpItemIsExpected = int > comparisonInt
          break
        case '<':
        case '>l':
          tmpItemIsExpected = int < comparisonInt
          break
        case '<=':
        case '=<':
        case '>=l':
        case '=>l':
          tmpItemIsExpected = int <= comparisonInt
          break
        case '>=':
        case '=>':
        case '<=l':
        case '=<l':
          tmpItemIsExpected = int >= comparisonInt
          break
        default:
          break
      }
    }

    if (column.filterCustomSearch) {
      const customSearchResult = Utils.calculateObjectValue(column, column.filterCustomSearch, [searchValue, value, key, this.options.data], true)

      if (customSearchResult !== null) {
        tmpItemIsExpected = customSearchResult
      }
    }

    return tmpItemIsExpected
  }

  initColumnSearch (filterColumnsDefaults) {
    UtilsFilterControl.cacheValues(this)

    if (filterColumnsDefaults) {
      this.filterColumnsPartial = filterColumnsDefaults
      this.updatePagination()

      // eslint-disable-next-line guard-for-in
      for (const filter in filterColumnsDefaults) {
        this.trigger('column-search', filter, filterColumnsDefaults[filter])
      }
    }
  }

  initToolbar () {
    this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch
    this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton

    if (this.options.showFilterControlSwitch) {
      this.buttons = Object.assign(this.buttons, {
        filterControlSwitch: {
          text: this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow(),
          icon: this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow,
          event: this.toggleFilterControl,
          attributes: {
            'aria-label': this.options.formatFilterControlSwitch(),
            title: this.options.formatFilterControlSwitch()
          }
        }
      })
    }

    super.initToolbar()
  }

  resetSearch (text) {
    if (this.options.filterControl && this.options.filterControlSearchClear && this.options.showSearchClearButton) {
      this.clearFilterControl()
    }
    super.resetSearch(text)
  }

  clearFilterControl () {
    if (!this.options.filterControl) {
      return
    }

    const that = this
    const table = this.$el.closest('table')
    const cookies = UtilsFilterControl.collectBootstrapTableFilterCookies()
    const controls = UtilsFilterControl.getSearchControls(that)
    let hasValues = false

    // Clear cache values
    that._valuesFilterControl.forEach(item => {
      hasValues = hasValues ? true : item.value !== ''
      item.value = ''
    })

    // Clear controls in UI
    controls.forEach(item => {
      item.value = ''
    })

    // Cache controls again
    UtilsFilterControl.setValues(that)

    // clear cookies once the filters are clean
    setTimeout(() => {
      if (cookies && cookies.length > 0) {
        cookies.forEach(item => {
          if (that.deleteCookie !== undefined) {
            that.deleteCookie(item)
          }
        })
      }
    }, that.options.searchTimeOut)

    // If there is not any value in the controls exit this method
    if (!hasValues) {
      return
    }

    // Clear each type of filter if it exists.
    if (controls.length > 0) {
      this.filterColumnsPartial = {}
      const firstControl = controls[0]

      firstControl.dispatchEvent(new Event(firstControl.tagName === 'INPUT' ? 'keyup' : 'change'))
    } else {
      return
    }

    // use the default sort order if it exists. do nothing if it does not
    if (that.options.sortName !== table?.dataset.sortName || that.options.sortOrder !== table?.dataset.sortOrder) {
      const sortName = controls[0]?.closest('table')?.dataset.sortName
      const sorter = this.$header.querySelector(Utils.sprintf('[data-field="%s"]', sortName))

      if (sorter) {
        that.onSort({ type: 'keypress', currentTarget: sorter })
        sorter.querySelector('.sortable')?.click()
      }
    }
  }

  // EVENTS
  onColumnSearch ({ currentTarget, keyCode }) {
    if (UtilsFilterControl.isKeyAllowed(keyCode)) {
      return
    }
    UtilsFilterControl.cacheValues(this)

    const isInitialRender = !this._initialized

    // Cookie extension support
    if (!this.options.cookie) {
      if (!isInitialRender) {
        this.options.pageNumber = 1
      }
    } else {
      // Force call the initServer method in Cookie extension
      this._filterControlValuesLoaded = true
    }

    if (Utils.isEmptyObject(this.filterColumnsPartial)) {
      this.filterColumnsPartial = {}
    }

    // If searchOnEnterKey is set to true, iterate over all controls and grab their values.
    const controls = this.options.searchOnEnterKey ? UtilsFilterControl.getSearchControls(this) : [currentTarget]

    controls.forEach(element => {
      const elementValue = element.value
      const text = elementValue ? elementValue.trim() : ''
      const field = element.closest('[data-field]')?.dataset.field

      this.trigger('column-search', field, text)

      if (text) {
        this.filterColumnsPartial[field] = text
      } else {
        delete this.filterColumnsPartial[field]
      }
    })

    this.onSearch({ currentTarget, firedByInitSearchText: isInitialRender }, false)
  }

  toggleFilterControl () {
    this.options.filterControlVisible = !this.options.filterControlVisible

    // Controls in original header or container
    const filterContainer = UtilsFilterControl.getControlContainer(this)
    const filterControls = filterContainer ? [...filterContainer.querySelectorAll('.filter-control, .no-filter-control')] : []

    if (this.options.filterControlVisible) {
      filterControls.forEach(el => {
        el.style.display = ''
      })
    } else {
      filterControls.forEach(el => {
        el.style.display = 'none'
      })
      this.clearFilterControl()
    }

    // Controls in fixed header
    if (this.options.height) {
      const fixedHead = this.$tableContainer.querySelector('.fixed-table-header table thead')
      const fixedControls = fixedHead ? [...fixedHead.querySelectorAll('.filter-control, .no-filter-control')] : []

      fixedControls.forEach(el => {
        el.style.display = this.options.filterControlVisible ? '' : 'none'
      })
      UtilsFilterControl.fixHeaderCSS(this)
    }

    const icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : ''
    const text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : ''
    const switchBtn = this.$toolbar.querySelector(':scope > .columns .filter-control-switch')

    if (switchBtn) {
      switchBtn.innerHTML = `${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon)} ${text}`
    }
  }

  triggerSearch () {
    const searchControls = UtilsFilterControl.getSearchControls(this)

    searchControls.forEach(element => {
      if (element.tagName === 'SELECT') {
        element.dispatchEvent(new Event('change'))
      } else {
        element.dispatchEvent(new Event('keyup'))
      }
    })
  }

  _toggleColumns (fields, checked, needUpdate) {
    if (fields.length) {
      this._initialized = false
    }
    super._toggleColumns(fields, checked, needUpdate)
    // initHeader only runs when a column really changed visibility, so restore
    // the flag here to stop it latching to false (#8216).
    this._initialized = true
    UtilsFilterControl.syncHeaders(this)
  }
}
