import Utils from '../utils/index.js'

export default {
  renderButton (buttonName, buttonConfig) {
    const opts = this.options
    let buttonHtml

    if (buttonConfig.hasOwnProperty('html')) {
      if (typeof buttonConfig.html === 'function') {
        buttonHtml = buttonConfig.html()
      } else {
        buttonHtml = buttonConfig.html
      }
    } else {
      let buttonClass = this.constants.buttonsClass

      if (buttonConfig.hasOwnProperty('attributes') && buttonConfig.attributes.class) {
        buttonClass += ` ${buttonConfig.attributes.class}`
      }
      buttonHtml = `<button class="${buttonClass}" type="button" name="${buttonName}"`

      if (buttonConfig.hasOwnProperty('attributes')) {
        for (const [attributeName, value] of Object.entries(buttonConfig.attributes)) {
          if (attributeName === 'class') {
            continue
          }

          const attribute = attributeName === 'title' ?
            opts.buttonsAttributeTitle : attributeName

          buttonHtml += ` ${attribute}="${value}"`
        }
      }

      buttonHtml += '>'

      if (opts.showButtonIcons && buttonConfig.hasOwnProperty('icon')) {
        buttonHtml += `${Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, buttonConfig.icon)} `
      }

      if (opts.showButtonText && buttonConfig.hasOwnProperty('text')) {
        buttonHtml += buttonConfig.text
      }

      buttonHtml += '</button>'
    }
    return buttonHtml
  },

  initToolbar () {
    const opts = this.options
    let html
    let timeoutId
    let switchableCount = 0

    if (this.$toolbar.querySelector('.bs-bars')?.children.length) {
      const toolbarEl = typeof opts.toolbar === 'string' ?
        document.querySelector(opts.toolbar) :
        opts.toolbar instanceof Element ? opts.toolbar : null

      if (toolbarEl) document.body.appendChild(toolbarEl)
    }
    this.$toolbar.innerHTML = ''

    if (typeof opts.toolbar === 'string' || typeof opts.toolbar === 'object') {
      const bsBarsDiv = document.createElement('div')

      bsBarsDiv.className = `bs-bars ${this.constants.classes.pull}-${opts.toolbarAlign}`

      const toolbarContent = typeof opts.toolbar === 'string' ?
        document.querySelector(opts.toolbar) :
        opts.toolbar instanceof Element ? opts.toolbar : null

      if (toolbarContent) bsBarsDiv.appendChild(toolbarContent)
      this.$toolbar.appendChild(bsBarsDiv)
    }

    // showColumns, showToggle, showRefresh
    html = [`<div class="${[
      'columns',
      `columns-${opts.buttonsAlign}`,
      this.constants.classes.buttonsGroup,
      `${this.constants.classes.pull}-${opts.buttonsAlign}`
    ].join(' ')}">`]

    if (typeof opts.buttonsOrder === 'string') {
      opts.buttonsOrder = Utils.parseStringArray(opts.buttonsOrder)
    }

    this.buttons = Object.assign(this.buttons, {
      paginationSwitch: {
        text: opts.pagination ? opts.formatPaginationSwitchUp() : opts.formatPaginationSwitchDown(),
        icon: opts.pagination ? opts.icons.paginationSwitchDown : opts.icons.paginationSwitchUp,
        render: false,
        event: this.togglePagination,
        attributes: {
          'aria-label': opts.formatPaginationSwitch(),
          title: opts.formatPaginationSwitch()
        }
      },
      refresh: {
        text: opts.formatRefresh(),
        icon: opts.icons.refresh,
        render: false,
        event: this.refresh,
        attributes: {
          'aria-label': opts.formatRefresh(),
          title: opts.formatRefresh()
        }
      },
      toggle: {
        text: opts.formatToggleOn(),
        icon: opts.icons.toggleOff,
        render: false,
        event: this.toggleView,
        attributes: {
          'aria-label': opts.formatToggleOn(),
          title: opts.formatToggleOn()
        }
      },
      fullscreen: {
        text: opts.formatFullscreen(),
        icon: opts.icons.fullscreen,
        render: false,
        event: this.toggleFullscreen,
        attributes: {
          'aria-label': opts.formatFullscreen(),
          title: opts.formatFullscreen()
        }
      },
      columns: {
        render: false,
        html: () => {
          const html = []

          html.push(`<div class="keep-open ${this.constants.classes.buttonsDropdown}">
            <button class="${this.constants.buttonsClass} dropdown-toggle" type="button" ${this.constants.dataToggle}="dropdown"
            aria-label="${opts.formatColumns()}" ${opts.buttonsAttributeTitle}="${opts.formatColumns()}">
            ${opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : ''}
            ${opts.showButtonText ? opts.formatColumns() : ''}
            ${this.constants.html.dropdownCaret}
            </button>
            ${this.constants.html.toolbarDropdown[0]}`)

          if (opts.showColumnsSearch) {
            html.push(
              Utils.sprintf(this.constants.html.toolbarDropdownItem,
                Utils.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', this.constants.classes.input, opts.formatSearch())
              )
            )
            html.push(this.constants.html.toolbarDropdownSeparator)
          }

          if (opts.showColumnsToggleAll) {
            const allFieldsVisible = this.getVisibleColumns().length === this.columns.filter(column => !this.isSelectionColumn(column)).length

            html.push(Utils.getCheckboxHtml({
              name: 'toggle-all',
              checked: allFieldsVisible,
              label: opts.formatColumnsToggleAll(),
              extraClass: 'toggle-all',
              centered: false,
              withLabel: true
            }))

            html.push(this.constants.html.toolbarDropdownSeparator)
          }

          let visibleColumns = 0

          this.columns.forEach(column => {
            if (column.visible) {
              visibleColumns++
            }
          })

          this.columns.forEach((column, i) => {
            if (this.isSelectionColumn(column)) {
              return
            }

            if (opts.cardView && !column.cardVisible) {
              return
            }

            const checked = column.visible ? ' checked="checked"' : ''
            const disabled = visibleColumns <= opts.minimumCountColumns && checked ? ' disabled="disabled"' : ''

            if (column.switchable) {
              const checkboxHtml = Utils.getDropdownColumnCheckboxHtml({
                dataField: column.field,
                value: i,
                checked: !!checked,
                disabled: !!disabled,
                label: column.switchableLabel || column.title
              })

              // Bootstrap 3/4 needs to be wrapped with toolbarDropdownItem
              if (Utils.getBootstrapVersion() === 5) {
                html.push(checkboxHtml)
              } else {
                html.push(Utils.sprintf(this.constants.html.toolbarDropdownItem, checkboxHtml))
              }
              switchableCount++
            }
          })
          html.push(this.constants.html.toolbarDropdown[1], '</div>')
          return html.join('')
        }
      }
    })

    const buttonsHtml = {}

    for (const [buttonName, buttonConfig] of Object.entries(this.buttons)) {
      buttonsHtml[buttonName] = this.renderButton(buttonName, buttonConfig)
      const optionName = `show${buttonName.charAt(0).toUpperCase()}${buttonName.substring(1)}`
      const showOption = opts[optionName]

      if ((
        !buttonConfig.hasOwnProperty('render') ||
        buttonConfig.hasOwnProperty('render') &&
        buttonConfig.render) &&
        (showOption === undefined || showOption === true)
      ) {
        opts[optionName] = true
      }

      if (!opts.buttonsOrder.includes(buttonName)) {
        opts.buttonsOrder.push(buttonName)
      }
    }

    // Adding the button html to the final toolbar html when the showOption is true
    for (const button of opts.buttonsOrder) {
      const showOption = opts[`show${button.charAt(0).toUpperCase()}${button.substring(1)}`]

      if (showOption) {
        html.push(buttonsHtml[button])
      }
    }

    html.push('</div>')

    // Fix #188: this.showToolbar is for extensions
    if (this.showToolbar || html.length > 2) {
      if (html.some(item => Utils.isDomNode(item))) {
        // When there are DOM nodes, build the structure manually
        const template = document.createElement('template')

        template.innerHTML = html[0] + html[html.length - 1]
        const wrapper = template.content.firstChild

        // Skip html[0] (opening div) and html[html.length-1] (closing div)
        for (const item of html.slice(1, -1)) {
          for (const node of Utils.htmlToNodes(item)) {
            wrapper.appendChild(node)
          }
        }

        this.$toolbar.appendChild(wrapper)
      } else {
        this.$toolbar.insertAdjacentHTML('beforeend', html.join(''))
      }
    }

    for (const [buttonName, buttonConfig] of Object.entries(this.buttons)) {
      if (buttonConfig.hasOwnProperty('event')) {
        if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
          const event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event
          const btn = this.$toolbar.querySelector(`button[name="${buttonName}"]`)

          if (btn) btn.addEventListener('click', () => event.call(this))
          continue
        }

        for (const [eventType, eventFunction] of Object.entries(buttonConfig.event)) {
          const event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction
          const btn = this.$toolbar.querySelector(`button[name="${buttonName}"]`)

          if (btn) btn.addEventListener(eventType, () => event.call(this))
        }
      }
    }

    if (opts.showColumns) {
      const keepOpen = this.$toolbar.querySelector('.keep-open')
      const checkboxes = keepOpen ?
        Array.from(keepOpen.querySelectorAll('input[type="checkbox"]:not(.toggle-all)')) :
        []
      const toggleAllEl = keepOpen?.querySelector('input[type="checkbox"].toggle-all')

      if (switchableCount <= opts.minimumCountColumns) {
        keepOpen?.querySelectorAll('input').forEach(el => {
          el.disabled = true
        })
      }

      keepOpen?.querySelectorAll('li, label').forEach(el => {
        el.addEventListener('click', e => e.stopImmediatePropagation())
      })

      checkboxes.forEach(cb => {
        cb.addEventListener('click', ({ currentTarget }) => {
          this._toggleColumns([currentTarget.dataset.field], currentTarget.checked, false)
          this.trigger('column-switch', currentTarget.dataset.field, currentTarget.checked)
          if (toggleAllEl) {
            toggleAllEl.checked = checkboxes.filter(c => c.checked).length ===
              this.columns.filter(column => !this.isSelectionColumn(column)).length
          }
        })
      })

      toggleAllEl?.addEventListener('click', ({ currentTarget }) => {
        this._toggleAllColumns(currentTarget.checked)
        this.trigger('column-switch-all', currentTarget.checked)
      })

      if (opts.showColumnsSearch) {
        const columnsSearchEl = keepOpen?.querySelector('[name="columnsSearch"]')
        const listItems = keepOpen ? Array.from(keepOpen.querySelectorAll('.dropdown-item-marker')) : []

        columnsSearchEl?.addEventListener('input', ({ currentTarget }) => {
          const searchValue = currentTarget.value.toLowerCase()

          listItems.forEach(el => {
            el.style.removeProperty('display')
          })
          checkboxes.forEach(cb => {
            const listItem = cb.closest('.dropdown-item-marker')

            if (listItem && !listItem.textContent.toLowerCase().includes(searchValue)) {
              listItem.style.setProperty('display', 'none', 'important')
            }
          })
        })
      }
    }

    const handleInputEvent = searchInput => {
      if (!searchInput) return
      const events = searchInput.tagName === 'SELECT' ? ['change'] : ['keyup', 'drop', 'blur', 'mouseup']

      for (const evt of events) {
        searchInput.addEventListener(evt, event => {
          if (opts.searchOnEnterKey && event.keyCode !== 13) {
            return
          }

          if ([37, 38, 39, 40].includes(event.keyCode)) {
            return
          }

          clearTimeout(timeoutId) // doesn't matter if it's 0
          timeoutId = setTimeout(() => {
            this.onSearch({ currentTarget: event.currentTarget })
          }, opts.searchTimeOut)
        })
      }
    }

    // Fix #4516: this.showSearchClearButton is for extensions
    if (
      (opts.search || this.showSearchClearButton) &&
      typeof opts.searchSelector !== 'string'
    ) {
      html = []
      const showSearchButton = Utils.sprintf(this.constants.html.searchButton,
        this.constants.buttonsClass,
        opts.formatSearch(),
        opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.search) : '',
        opts.showButtonText ? opts.formatSearch() : ''
      )
      const showSearchClearButton = Utils.sprintf(this.constants.html.searchClearButton,
        this.constants.buttonsClass,
        opts.formatClearSearch(),
        opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.clearSearch) : '',
        opts.showButtonText ? opts.formatClearSearch() : ''
      )
      const searchInputHtml = `<input class="${this.constants.classes.input}
        ${Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, opts.iconSize)}
        search-input" type="search" aria-label="${opts.formatSearch()}" placeholder="${opts.formatSearch()}" autocomplete="off">`
      let searchInputFinalHtml = searchInputHtml

      if (opts.showSearchButton || opts.showSearchClearButton) {
        const buttonsHtml = (opts.showSearchButton ? showSearchButton : '') +
          (opts.showSearchClearButton ? showSearchClearButton : '')

        searchInputFinalHtml = opts.search ? Utils.sprintf(this.constants.html.inputGroup,
          searchInputHtml, buttonsHtml) : buttonsHtml
      }

      html.push(Utils.sprintf(`
        <div class="${this.constants.classes.pull}-${opts.searchAlign} search ${this.constants.classes.inputGroup}">
          %s
        </div>
      `, searchInputFinalHtml))

      this.$toolbar.insertAdjacentHTML('beforeend', html.join(''))
      const searchInput = Utils.getSearchInput(this)

      if (opts.showSearchButton) {
        const searchBtn = this.$toolbar.querySelector('.search button[name="search"]')

        searchBtn?.addEventListener('click', () => {
          clearTimeout(timeoutId) // doesn't matter if it's 0
          timeoutId = setTimeout(() => {
            this.onSearch({ currentTarget: searchInput })
          }, opts.searchTimeOut)
        })

        if (opts.searchOnEnterKey) {
          handleInputEvent(searchInput)
        }
      } else {
        handleInputEvent(searchInput)
      }

      if (opts.showSearchClearButton) {
        const clearBtn = this.$toolbar.querySelector('.search button[name="clearSearch"]')

        clearBtn?.addEventListener('click', () => this.resetSearch())
      }
    } else if (typeof opts.searchSelector === 'string') {
      handleInputEvent(Utils.getSearchInput(this))
    }
  },

  refresh (params) {
    if (params && params.url) {
      this.options.url = params.url
    }
    if (params && params.pageNumber) {
      this.options.pageNumber = params.pageNumber
    }
    if (params && params.pageSize) {
      this.options.pageSize = params.pageSize
    }
    if (params && params.query) {
      this.options.url = Utils.addQueryToUrl(this.options.url, params.query)
    }

    this.trigger('refresh', this.initServer(params && params.silent))
  },

  toggleView () {
    this.options.cardView = !this.options.cardView
    this.initHeader()

    const icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : ''
    const text = this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn()
    const btn = this.$toolbar.querySelector('button[name="toggle"]')

    if (btn) {
      btn.innerHTML = `${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon)} ${this.options.showButtonText ? text : ''}`
      btn.setAttribute('aria-label', text)
      btn.setAttribute(this.options.buttonsAttributeTitle, text)
    }

    this.initBody()
    this.trigger('toggle', this.options.cardView)
  },

  toggleFullscreen () {
    this.$el.closest('.bootstrap-table')?.classList.toggle('fullscreen')
    this.resetView()
  }
}
