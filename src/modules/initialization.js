import Constants from '../constants/index.js'
import Utils from '../utils/index.js'

export default {
  initConstants () {
    const opts = this.options

    this.constants = Constants.CONSTANTS
    this.constants.theme = BootstrapTable.theme
    this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle'

    // init iconsPrefix and icons
    const iconsPrefix = Utils.getIconsPrefix(BootstrapTable.theme)

    if (typeof opts.icons === 'string') {
      opts.icons = Utils.calculateObjectValue(null, opts.icons)
    }

    opts.iconsPrefix = opts.iconsPrefix || BootstrapTable.iconsPrefix || iconsPrefix
    opts.icons = Object.assign(Utils.getIcons(Constants.ICONS, opts.iconsPrefix),
      BootstrapTable.icons, opts.icons)

    // init buttons class
    const buttonsPrefix = opts.buttonsPrefix ? `${opts.buttonsPrefix}-` : ''

    this.constants.buttonsClass = [
      opts.buttonsPrefix,
      buttonsPrefix + opts.buttonsClass,
      Utils.sprintf(`${buttonsPrefix}%s`, opts.iconSize)
    ].join(' ').trim()

    this.buttons = Utils.calculateObjectValue(this, opts.buttons, [], {})
    if (typeof this.buttons !== 'object') {
      this.buttons = {}
    }
  },

  initLocale () {
    if (this.options.locale) {
      const locales = BootstrapTable.LOCALES
      const parts = this.options.locale.split(/-|_/)

      parts[0] = parts[0].toLowerCase()
      if (parts[1]) {
        parts[1] = parts[1].toUpperCase()
      }

      let localesToExtend = {}

      if (locales[this.options.locale]) {
        localesToExtend = locales[this.options.locale]
      } else if (locales[parts.join('-')]) {
        localesToExtend = locales[parts.join('-')]
      } else if (locales[parts[0]]) {
        localesToExtend = locales[parts[0]]
      }

      this._defaultLocales = this._defaultLocales || {}
      for (const [formatName, func] of Object.entries(localesToExtend)) {
        const defaultLocale = this._defaultLocales.hasOwnProperty(formatName) ?
          this._defaultLocales[formatName] : Constants.DEFAULTS[formatName]

        if (this.options[formatName] !== defaultLocale) {
          continue
        }

        this.options[formatName] = func
        this._defaultLocales[formatName] = func
      }
    }
  },

  initContainer () {
    const topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ?
      '<div class="fixed-table-pagination clearfix"></div>' : ''
    const bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ?
      '<div class="fixed-table-pagination"></div>' : ''
    const loadingTemplate = Utils.calculateObjectValue(this.options,
      this.options.loadingTemplate, [this.options.formatLoadingMessage()])

    const containerHtml = `
      <div class="bootstrap-table ${this.constants.theme}">
      <div class="fixed-table-toolbar"></div>
      ${topPagination}
      <div class="fixed-table-container">
      <div class="fixed-table-header"><table></table></div>
      <div class="fixed-table-body">
      <div class="fixed-table-loading">
      ${loadingTemplate}
      </div>
      </div>
      <div class="fixed-table-footer"></div>
      </div>
      ${bottomPagination}
      </div>
    `
    const template = document.createElement('template')

    template.innerHTML = containerHtml.trim()
    this.$container = template.content.firstChild

    this.$el.after(this.$container)
    this.$tableContainer = this.$container.querySelector('.fixed-table-container')
    this.$tableHeader = this.$container.querySelector('.fixed-table-header')
    this.$tableBody = this.$container.querySelector('.fixed-table-body')
    this.$tableLoading = this.$container.querySelector('.fixed-table-loading')
    this.$tableFooter = this.$el.querySelector('tfoot')
    // checking if custom table-toolbar exists or not
    if (this.options.buttonsToolbar) {
      this.$toolbar = document.querySelector(this.options.buttonsToolbar) ||
        document.body.querySelector(this.options.buttonsToolbar)
    } else {
      this.$toolbar = this.$container.querySelector('.fixed-table-toolbar')
    }

    this.$pagination = Array.from(this.$container.querySelectorAll('.fixed-table-pagination'))

    this.$tableBody.appendChild(this.$el)

    const clearfixDiv = document.createElement('div')

    clearfixDiv.className = 'clearfix'
    this.$container.after(clearfixDiv)

    for (const cls of this.options.classes.split(' ').filter(c => c)) {
      this.$el.classList.add(cls)
      this.$tableLoading.classList.add(cls)
    }

    if (this.options.height) {
      this.$tableContainer.classList.add('fixed-height')

      if (this.options.showFooter) {
        this.$tableContainer.classList.add('has-footer')
      }

      if (this.options.classes.split(' ').includes('table-bordered')) {
        const borderDiv = document.createElement('div')

        borderDiv.className = 'fixed-table-border'
        this.$tableBody.appendChild(borderDiv)
        this.$tableBorder = borderDiv
        this.$tableLoading.classList.add('fixed-table-border')
      }

      this.$tableFooter = this.$container.querySelector('.fixed-table-footer')
    }
  },

  initTable () {
    const columns = []

    this.$header = this.$el.querySelector(':scope > thead')
    if (!this.$header) {
      this.$header = document.createElement('thead')
      if (this.options.theadClasses) {
        this.$header.setAttribute('class', this.options.theadClasses)
      }
      this.$el.appendChild(this.$header)
    } else if (this.options.theadClasses) {
      for (const cls of this.options.theadClasses.split(' ').filter(c => c)) {
        this.$header.classList.add(cls)
      }
    }

    this._headerTrClasses = []
    this._headerTrStyles = []
    // eslint-disable-next-line no-unused-vars
    this.$header.querySelectorAll('tr').forEach((tr, i) => {
      const column = []

      // eslint-disable-next-line no-unused-vars
      tr.querySelectorAll('th').forEach((th, j) => {
        // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
        if (typeof th.dataset.field !== 'undefined') {
          th.dataset.field = `${th.dataset.field}`
        }

        // eslint-disable-next-line no-use-before-define
        const _data = getThAllData(th)

        for (const key in _data) {
          if (BootstrapTable.COLUMN_DEFAULTS.hasOwnProperty(key)) {
            delete _data[key]
          }
        }

        column.push(Utils.extend({}, {
          _data: Utils.getRealDataAttr(_data),
          title: th.innerHTML,
          class: th.getAttribute('class'),
          titleTooltip: th.getAttribute('title'),
          rowspan: th.getAttribute('rowspan') ? +th.getAttribute('rowspan') : undefined,
          colspan: th.getAttribute('colspan') ? +th.getAttribute('colspan') : undefined,
          scope: th.getAttribute('scope') ? th.getAttribute('scope') : undefined,
          style: Utils.normalizeStyle(th.getAttribute('style'))
        // eslint-disable-next-line no-use-before-define
        }, getThAllData(th)))
      })
      columns.push(column)

      if (tr.getAttribute('class')) {
        this._headerTrClasses.push(tr.getAttribute('class'))
      }
      if (tr.getAttribute('style')) {
        this._headerTrStyles.push(tr.getAttribute('style'))
      }
    })

    if (!Array.isArray(this.options.columns[0])) {
      this.options.columns = [this.options.columns]
    }

    this.options.columns = Utils.extend(true, [], columns, this.options.columns)
    this.columns = []
    this.fieldsColumnsIndex = []

    if (this.optionsColumnsChanged !== false) {
      Utils.setFieldIndex(this.options.columns)
    }

    this.options.columns.forEach((columns, i) => {
      columns.forEach((_column, j) => {
        const column = Utils.extend({}, Constants.COLUMN_DEFAULTS, _column, { passed: _column })

        if (typeof column.fieldIndex !== 'undefined') {
          this.columns[column.fieldIndex] = column
          this.fieldsColumnsIndex[column.field] = column.fieldIndex
        }

        this.options.columns[i][j] = column
      })
    })

    // if options.data is setting, do not process tbody and tfoot data
    if (!this.options.data.length) {
      const htmlData = Utils.trToData(this.columns,
        Array.from(this.$el.querySelectorAll(':scope > tbody > tr')))

      if (htmlData.length) {
        this.options.data = htmlData
        this.fromHtml = true
      }
    }

    if (!(this.options.pagination && this.options.sidePagination !== 'server')) {
      this.footerData = Utils.trToData(this.columns,
        Array.from(this.$el.querySelectorAll(':scope > tfoot > tr')))
    }

    if (this.footerData) {
      const tfoot = this.$el.querySelector('tfoot')

      if (tfoot) {
        tfoot.innerHTML = '<tr></tr>'
      }
    }

    if (!this.options.showFooter || this.options.cardView) {
      if (this.$tableFooter) this.$tableFooter.style.display = 'none'
    } else if (this.$tableFooter) this.$tableFooter.style.display = ''
  }
}

function getThAllData (th) {
  const data = {}

  // eslint-disable-next-line guard-for-in
  for (const key in th.dataset) {
    const value = th.dataset[key]

    try {
      data[key] = JSON.parse(value)
    } catch {
      data[key] = value
    }
  }
  return data
}
