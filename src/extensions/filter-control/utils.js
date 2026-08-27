

/* eslint-disable no-use-before-define */
const Utils = BootstrapTable.utils
const searchControls = 'select, input:not([type="checkbox"]):not([type="radio"])'

export function getInputClass (that, isSelect = false) {
  const formControlClass = isSelect ? that.constants.classes.select : that.constants.classes.input

  return that.options.iconSize ? Utils.sprintf('%s %s-%s', formControlClass, formControlClass, that.options.iconSize) : formControlClass
}

export function getOptionsFromSelectControl (selectControl) {
  return selectControl.options
}

export function getControlContainer (that) {
  if (that.options.filterControlContainer) {
    return document.querySelector(that.options.filterControlContainer)
  }

  if (that.options.height && that._initialized) {
    return that.$tableContainer.querySelector('.fixed-table-header table thead')
  }

  return that.$header
}

export function isKeyAllowed (keyCode) {
  return [37, 38, 39, 40].indexOf(keyCode) > -1
}

export function getSearchControls (that) {
  const container = getControlContainer(that)

  return container ? [...container.querySelectorAll(searchControls)] : []
}

export function hideUnusedSelectOptions (selectControl, uniqueValues) {
  const options = getOptionsFromSelectControl(selectControl)

  for (let i = 0; i < options.length; i++) {
    if (options[i].value !== '') {
      const opt = selectControl.querySelector(Utils.sprintf('option[value=\'%s\']', options[i].value))

      if (!uniqueValues.hasOwnProperty(options[i].value)) {
        opt?.style && (opt.style.display = 'none')
      } else {
        opt?.style && (opt.style.display = '')
      }
    }
  }
}

export function existOptionInSelectControl (selectControl, value) {
  const options = getOptionsFromSelectControl(selectControl)

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === Utils.unescapeHTML(value)) {
      // The value is not valid to add
      return true
    }
  }

  // If we get here, the value is valid to add
  return false
}

export function addOptionToSelectControl (selectControl, _value, text, selected, shouldCompareText) {
  let value = _value === undefined || _value === null ? '' : _value.toString().trim()

  value = Utils.removeHTML(Utils.unescapeHTML(value))
  text = Utils.removeHTML(Utils.unescapeHTML(text))

  if (existOptionInSelectControl(selectControl, value)) {
    return
  }

  const isSelected = shouldCompareText ? value === selected || text === selected : value === selected

  const option = new Option(text, value, false, isSelected)

  selectControl.add(option)
}

export function sortSelectControl (selectControl, orderBy, options) {
  if (orderBy === 'server') {
    return
  }

  const tmpAry = new Array()

  for (let i = 0; i < selectControl.options.length; i++) {
    tmpAry[i] = new Array()
    tmpAry[i][0] = selectControl.options[i].text
    tmpAry[i][1] = selectControl.options[i].value
    tmpAry[i][2] = selectControl.options[i].selected
  }

  tmpAry.sort((a, b) => Utils.sort(a[0], b[0], orderBy === 'desc' ? -1 : 1, options))
  while (selectControl.options.length > 0) {
    selectControl.options[0] = null
  }

  for (let i = 0; i < tmpAry.length; i++) {
    const op = new Option(tmpAry[i][0], tmpAry[i][1], false, tmpAry[i][2])

    selectControl.add(op)
  }
}

export function fixHeaderCSS ({ $tableHeader }) {
  $tableHeader.style.height = `${$tableHeader.querySelector('table')?.offsetHeight || 0}px`
}

export function getElementClass (element) {
  return [...element.classList]
    .filter(function (className) {
      return className.startsWith('bootstrap-table-filter-control-')
    })
}

export function getCursorPosition (el) {
  if (el.matches('input[type=search]')) {
    let pos = 0

    if ('selectionStart' in el) {
      pos = el.selectionStart
    } else if ('selection' in document) {
      el.focus()
      const Sel = document.selection.createRange()
      const SelLength = document.selection.createRange().text.length

      Sel.moveStart('character', -el.value.length)
      pos = Sel.text.length - SelLength
    }
    return pos
  }
  return -1
}

export function cacheValues (that) {
  const controls = getSearchControls(that)

  that._valuesFilterControl = []

  controls.forEach(el => {
    const fieldClass = escapeID(getElementClass(el).join(' '))
    let field

    if (that.options.height && !that.options.filterControlContainer) {
      field = that.$tableContainer.querySelector(`.fixed-table-header .${fieldClass}`)
    } else if (that.options.filterControlContainer) {
      field = document.querySelector(`${that.options.filterControlContainer} .${fieldClass}`)
    } else {
      field = that.$el.querySelector(`.${fieldClass}`)
    }

    if (field) {
      that._valuesFilterControl.push({
        field: field.closest('[data-field]')?.dataset.field,
        value: field.value,
        position: getCursorPosition(field),
        hasFocus: field === document.activeElement
      })
    }
  })
}

export function setCaretPosition (elem, caretPos) {
  try {
    if (elem) {
      if (elem.createTextRange) {
        const range = elem.createTextRange()

        range.move('character', caretPos)
        range.select()
      } else if (elem.setSelectionRange) {
        elem.setSelectionRange(caretPos, caretPos)
      }
    }
  } catch (ex) {
    console.error(ex)
  }
}

export function setValues (that) {
  let field = null
  let result = []
  const controls = getSearchControls(that)

  if (that._valuesFilterControl.length > 0) {
    //  Callback to apply after settings fields values
    const callbacks = []

    // eslint-disable-next-line no-unused-vars
    controls.forEach((el, i) => {
      field = el.closest('[data-field]')?.dataset.field
      result = that._valuesFilterControl.filter(valueObj => valueObj.field === field)

      if (result.length > 0) {
        if (result[0].hasFocus || result[0].value) {
          const fieldToFocusCallback = ((element, cacheElementInfo) => {
            // Closure here to capture the field information
            const closedCallback = () => {
              if (cacheElementInfo.hasFocus) {
                element.focus()
              }

              if (Array.isArray(cacheElementInfo.value)) {
                cacheElementInfo.value.forEach(v => {
                  const opt = element.querySelector(Utils.sprintf('option[value=\'%s\']', v))

                  if (opt) opt.selected = true
                })
              } else {
                element.value = cacheElementInfo.value
              }
              setCaretPosition(element, cacheElementInfo.position)
            }

            return closedCallback
          })(el, result[0])

          callbacks.push(fieldToFocusCallback)
        }
      }
    })

    // Callback call.
    if (callbacks.length > 0) {
      callbacks.forEach(callback => callback())
    }
  }
}

export function collectBootstrapTableFilterCookies () {
  const cookies = []
  const cookieRegex = /bs\.table\.(filterControl|searchText)/g
  const foundCookies = document.cookie.match(cookieRegex)
  const foundLocalStorage = localStorage

  if (foundCookies) {
    // eslint-disable-next-line no-unused-vars
    foundCookies.forEach((_cookie, i) => {
      let cookie = _cookie

      if (/./.test(cookie)) {
        cookie = cookie.split('.').pop()
      }

      if (cookies.indexOf(cookie) === -1) {
        cookies.push(cookie)
      }
    })
  }

  if (!foundLocalStorage) {
    return cookies
  }

  Object.keys(localStorage).forEach(function (cookie) {
    if (!cookieRegex.test(cookie)) {
      return
    }

    cookie = cookie.split('.').pop()
    if (!cookies.includes(cookie)) {
      cookies.push(cookie)
    }
  })

  return cookies
}

export function escapeID (id) {
  // eslint-disable-next-line no-useless-escape
  return String(id).replace(/([:.\[\],])/g, '\\$1')
}

export function isColumnSearchableViaSelect ({ filterControl, searchable }) {
  return filterControl && filterControl.toLowerCase() === 'select' && searchable
}

export function isFilterDataNotGiven ({ filterData }) {
  return filterData === undefined ||
        filterData.toLowerCase() === 'column'
}

export function hasSelectControlElement (selectControl) {
  return !!selectControl
}

export function initFilterSelectControls (that) {
  const data = that.options.data

  that.header.fields.forEach((field, j) => {
    const column = that.columns[that.fieldsColumnsIndex[field]]
    const container = getControlContainer(that)
    const selectControl = container?.querySelector(`select.bootstrap-table-filter-control-${escapeID(column.field)}`)

    if (isColumnSearchableViaSelect(column) && isFilterDataNotGiven(column) && hasSelectControlElement(selectControl)) {
      if (!selectControl.multiple && selectControl.options.length === 0) {
        // Added the default option, must use a non-breaking space(&nbsp;) to pass the W3C validator
        addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder || ' ', column.filterDefault)
      }

      const uniqueValues = {}

      for (let i = 0; i < data.length; i++) {
        // Added a new value
        let fieldValue = Utils.getItemField(data[i], field, false)
        const formatter = that.options.editable && column.editable ? column._formatter : that.header.formatters[j]
        let formattedValue = Utils.calculateObjectValue(that.header, formatter, [fieldValue, data[i], i], fieldValue)

        if (fieldValue === undefined || fieldValue === null) {
          fieldValue = formattedValue
          column._forceFormatter = true
        }

        if (column.filterDataCollector) {
          formattedValue = Utils.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue)
        }

        if (column.searchFormatter) {
          fieldValue = formattedValue
        }
        uniqueValues[formattedValue] = fieldValue

        if (typeof formattedValue === 'object' && formattedValue !== null) {
          formattedValue.forEach(value => {
            addOptionToSelectControl(selectControl, value, value, column.filterDefault)
          })
          continue
        }
      }

      // eslint-disable-next-line guard-for-in
      for (const key in uniqueValues) {
        addOptionToSelectControl(selectControl, uniqueValues[key], key, column.filterDefault)
      }

      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, column.filterOrderBy, that.options)
      }
    }
  })
}

export function getFilterDataMethod (objFilterDataMethod, searchTerm) {
  const keys = Object.keys(objFilterDataMethod)

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === searchTerm) {
      return objFilterDataMethod[searchTerm]
    }
  }
  return null
}

export function createControls (that, header) {
  let addedFilterControl = false
  let html

  that.columns.forEach(column => {
    html = []

    if (
      !column.visible &&
      !(that.options.filterControlContainer && document.querySelector(`.bootstrap-table-filter-control-${escapeID(column.field)}`))
    ) {
      return
    }

    if (!column.filterControl && !that.options.filterControlContainer) {
      html.push('<div class="no-filter-control"></div>')
    } else if (that.options.filterControlContainer) {
      // Use a filter control container instead of th
      const filterControls = [...document.querySelectorAll(`.bootstrap-table-filter-control-${escapeID(column.field)}`)]

      filterControls.forEach(filterControl => {
        if (!filterControl.matches('[type=radio]')) {
          const placeholder = column.filterControlPlaceholder || ''

          filterControl.setAttribute('placeholder', placeholder)
          filterControl.value = column.filterDefault
        }

        filterControl.dataset.field = column.field
      })

      addedFilterControl = true
    } else {
      // Create the control based on the html defined in the filterTemplate array.
      const nameControl = column.filterControl.toLowerCase()

      html.push('<div class="filter-control">')
      addedFilterControl = true
      if (column.searchable && that.options.filterTemplate[nameControl]) {
        html.push(
          that.options.filterTemplate[nameControl](
            that,
            column,
            column.filterControlPlaceholder ?
              column.filterControlPlaceholder :
              '',
            column.filterDefault
          )
        )
      }
    }

    // Filtering by default when it is set.
    if (column.filterControl && '' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
      if (Utils.isEmptyObject(that.filterColumnsPartial)) {
        that.filterColumnsPartial = {}
      }

      if (!(column.field in that.filterColumnsPartial)) {
        that.filterColumnsPartial[column.field] = column.filterDefault
      }
    }

    header.querySelectorAll('th').forEach(th => {
      if (th.dataset.field === column.field) {
        th.querySelector('.filter-control')?.remove()
        const fhtCell = th.querySelector('.fht-cell')

        if (fhtCell) fhtCell.innerHTML = html.join('')
        return
      }
    })

    if (column.filterData && column.filterData.toLowerCase() !== 'column') {
      const filterDataType = getFilterDataMethod(filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')))
      let filterDataSource
      let selectControl

      if (filterDataType) {
        filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length)
        selectControl = header.querySelector(`.bootstrap-table-filter-control-${escapeID(column.field)}`)

        addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault, true)
        filterDataType(that, filterDataSource, selectControl, that.options.filterOrderBy, column.filterDefault)
      } else {
        throw new SyntaxError(
          'Error. You should use any of these allowed filter data methods: var, obj, json, url, func.' +
                    ' Use like this: var: {key: "value"}'
        )
      }
    }
  })

  if (addedFilterControl) {
    // Remove previous listeners
    if (header._fcKeyupHandler) header.removeEventListener('keyup', header._fcKeyupHandler)
    if (header._fcSelectHandler) header.removeEventListener('change', header._fcSelectHandler)
    if (header._fcMouseupHandler) header.removeEventListener('mouseup', header._fcMouseupHandler)
    if (header._fcRadioHandler) header.removeEventListener('change', header._fcRadioHandler)

    header._fcKeyupHandler = e => {
      if (!e.target.matches('input')) return
      const currentTarget = e.target
      const keyCode = e.keyCode

      const obj = e.detail ? { keyCode: e.detail.keyCode } : null

      const effectiveKeyCode = obj ? obj.keyCode : keyCode

      if (that.options.searchOnEnterKey && effectiveKeyCode !== 13) {
        return
      }

      if (isKeyAllowed(effectiveKeyCode)) {
        return
      }

      if (currentTarget.matches('input[type="checkbox"]') || currentTarget.matches('input[type="radio"]')) {
        return
      }

      clearTimeout(currentTarget.timeoutId || 0)
      currentTarget.timeoutId = setTimeout(() => {
        that.onColumnSearch({ currentTarget, keyCode: effectiveKeyCode })
      }, that.options.searchTimeOut)
    }

    header._fcSelectHandler = e => {
      if (!e.target.matches('select')) return
      const currentTarget = e.target
      const value = currentTarget.value
      const normalizedValue = value === null ?
        currentTarget.multiple ? [] : null :
        value

      currentTarget.value = normalizedValue

      clearTimeout(currentTarget.timeoutId || 0)
      currentTarget.timeoutId = setTimeout(() => {
        that.onColumnSearch({ currentTarget, keyCode: e.keyCode })
      }, that.options.searchTimeOut)
    }

    header._fcMouseupHandler = e => {
      if (!e.target.matches('input:not([type=radio])')) return
      const currentTarget = e.target
      const oldValue = currentTarget.value

      if (oldValue === '') {
        return
      }

      setTimeout(() => {
        const newValue = currentTarget.value

        if (newValue === '') {
          clearTimeout(currentTarget.timeoutId || 0)
          currentTarget.timeoutId = setTimeout(() => {
            that.onColumnSearch({ currentTarget, keyCode: e.keyCode })
          }, that.options.searchTimeOut)
        }
      }, 1)
    }

    header._fcRadioHandler = e => {
      if (!e.target.matches('input[type=radio]')) return
      const currentTarget = e.target

      clearTimeout(currentTarget.timeoutId || 0)
      currentTarget.timeoutId = setTimeout(() => {
        that.onColumnSearch({ currentTarget, keyCode: e.keyCode })
      }, that.options.searchTimeOut)
    }

    header.addEventListener('keyup', header._fcKeyupHandler)
    header.addEventListener('change', header._fcSelectHandler)
    header.addEventListener('mouseup', header._fcMouseupHandler)
    header.addEventListener('change', header._fcRadioHandler)

    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
    if (header.querySelector('.date-filter-control')) {
      that.columns.forEach((i, { filterDefault, filterControl, field, filterDatepickerOptions }) => {
        if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
          const datepicker = header.querySelector(`.date-filter-control.bootstrap-table-filter-control-${escapeID(field)}`)

          if (!datepicker) return

          if (filterDefault) {
            datepicker.value = filterDefault
          }

          if (filterDatepickerOptions.min) {
            datepicker.setAttribute('min', filterDatepickerOptions.min)
          }

          if (filterDatepickerOptions.max) {
            datepicker.setAttribute('max', filterDatepickerOptions.max)
          }

          if (filterDatepickerOptions.step) {
            datepicker.setAttribute('step', filterDatepickerOptions.step)
          }

          if (filterDatepickerOptions.pattern) {
            datepicker.setAttribute('pattern', filterDatepickerOptions.pattern)
          }

          datepicker.addEventListener('change', ({ currentTarget }) => {
            clearTimeout(currentTarget.timeoutId || 0)
            currentTarget.timeoutId = setTimeout(() => {
              that.onColumnSearch({ currentTarget })
            }, that.options.searchTimeOut)
          })
        }
      })
    }

    if (that.options.sidePagination !== 'server') {
      that.triggerSearch()
    }

    if (!that.options.filterControlVisible) {
      header.querySelectorAll('.filter-control, .no-filter-control').forEach(el => {
        el.style.display = 'none'
      })
    }
  } else {
    header.querySelectorAll('.filter-control, .no-filter-control').forEach(el => {
      el.style.display = 'none'
    })
  }

  that.trigger('created-controls')
}

export function getDirectionOfSelectOptions (_alignment) {
  const alignment = _alignment === undefined ? 'left' : _alignment.toLowerCase()

  switch (alignment) {
    case 'left':
      return 'ltr'
    case 'right':
      return 'rtl'
    case 'auto':
      return 'auto'
    default:
      return 'ltr'
  }
}

export function syncHeaders (that) {
  if (!that.options.height) {
    return
  }
  const fixedHeader = that.$tableContainer.querySelector('.fixed-table-header table thead')

  if (!fixedHeader) {
    return
  }

  that.$header.querySelectorAll('th[data-field]').forEach(element => {
    if (element.classList[0] !== 'bs-checkbox') {
      const field = element.dataset.field
      const fixedField = that.$tableContainer.querySelector(`th[data-field='${field}']`)

      if (!fixedField || fixedField === element) return

      const input = element.querySelector('input')
      const fixedInput = fixedField.querySelector('input')

      if (input && fixedInput) {
        if (input.value !== fixedInput.value) {
          input.value = fixedInput.value
        }
      }
    }
  })
}

const filterDataMethods = {
  func (that, filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource].apply()

    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }

    if (that.options.sortSelectOptions) {
      sortSelectControl(selectControl, filterOrderBy, that.options)
    }

    setValues(that)
  },
  obj (that, filterDataSource, selectControl, filterOrderBy, selected) {
    const objectKeys = filterDataSource.split('.')
    const variableName = objectKeys.shift()
    let variableValues = window[variableName]

    if (objectKeys.length > 0) {
      objectKeys.forEach(key => {
        variableValues = variableValues[key]
      })
    }

    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      addOptionToSelectControl(selectControl, variableValues[key], variableValues[key], selected)
    }

    if (that.options.sortSelectOptions) {
      sortSelectControl(selectControl, filterOrderBy, that.options)
    }

    setValues(that)
  },
  var (that, filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource]
    const isArray = Array.isArray(variableValues)

    for (const key in variableValues) {
      if (isArray) {
        addOptionToSelectControl(selectControl, variableValues[key], variableValues[key], selected, true)
      } else {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected, true)
      }
    }

    if (that.options.sortSelectOptions) {
      sortSelectControl(selectControl, filterOrderBy, that.options)
    }

    setValues(that)
  },
  url (that, filterDataSource, selectControl, filterOrderBy, selected) {
    fetch(filterDataSource)
      .then(response => response.json())
      .then(data => {
        // eslint-disable-next-line guard-for-in
        for (const key in data) {
          addOptionToSelectControl(selectControl, key, data[key], selected)
        }

        if (that.options.sortSelectOptions) {
          sortSelectControl(selectControl, filterOrderBy, that.options)
        }

        setValues(that)
      })
  },
  json (that, filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = JSON.parse(filterDataSource)

    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }

    if (that.options.sortSelectOptions) {
      sortSelectControl(selectControl, filterOrderBy, that.options)
    }

    setValues(that)
  }
}
