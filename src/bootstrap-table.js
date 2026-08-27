/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.27.3
 * https://github.com/wenzhixin/bootstrap-table/
 */

import InitializationModule from './modules/initialization.js'
import BodyModule from './modules/body.js'
import CheckModule from './modules/check.js'
import Constants from './constants/index.js'
import DataModule from './modules/data.js'
import DetailModule from './modules/detail.js'
import HeaderModule from './modules/header.js'
import PaginationModule from './modules/pagination.js'
import SearchModule from './modules/search.js'
import ToolbarModule from './modules/toolbar.js'
import Utils from './utils/index.js'

const _instanceMap = new WeakMap()

function getDataAttrs (el) {
  const data = {}

  for (const key in el.dataset) {
    const value = el.dataset[key]

    try {
      data[key] = JSON.parse(value)
    } catch {
      data[key] = value
    }
  }
  return data
}

class BootstrapTable {
  constructor (el, options) {
    this.options = options
    this.$el = typeof el === 'string' ? document.querySelector(el) : el
    this.$el_ = this.$el.cloneNode(true)
    this._timeoutId = {
      header: 0,
      footer: 0,
      resetView: 0
    }
    this._resizeHandler = null
    this._thDataMap = new WeakMap()
  }

  init () {
    this.initConstants()
    this.initLocale()
    this.initContainer()
    this.initTable()
    this.initHeader()
    this.initData()
    this.initHiddenRows()
    this.initToolbar()
    this.initPagination()
    this.initBody()
    this.initSearchText()
    this.initServer()
  }

  trigger (_name, ...args) {
    const name = `${_name}.bs.table`

    this.options[BootstrapTable.EVENTS[name]](...[...args, this])
    this.$el.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail: args
    }))

    this.options.onAll(name, ...[...args, this])
    this.$el.dispatchEvent(new CustomEvent('all.bs.table', {
      bubbles: true,
      detail: [name, args]
    }))
  }

  getOptions () {
    const options = Utils.extend({}, this.options)

    delete options.data
    return Utils.extend(true, {}, options)
  }

  refreshOptions (options) {
    if (Utils.compareObjects(this.options, options, true)) {
      return
    }
    this.optionsColumnsChanged = !!options.columns
    this.options = Utils.extend(this.options, options)
    this.trigger('refresh-options', this.options)
    this.destroy()
    this.init()
  }

  _setDelayTimeout (type, callback, delay) {
    clearTimeout(this._timeoutId[type])
    this._timeoutId[type] = setTimeout(callback, delay)
  }

  destroy () {
    for (const type of Object.keys(this._timeoutId)) {
      clearTimeout(this._timeoutId[type])
    }
    if (this._resizeObserver) {
      this._resizeObserver.disconnect()
      this._resizeObserver = null
    }

    if (this.$container && this.$container.parentNode) {
      this.$container.parentNode.insertBefore(this.$el, this.$container)
    }

    if (this.options.toolbar) {
      const toolbarEl = typeof this.options.toolbar === 'string' ?
        document.querySelector(this.options.toolbar) :
        this.options.toolbar

      if (toolbarEl && this.$el.parentNode) {
        this.$el.parentNode.insertBefore(toolbarEl, this.$el)
      }
    }

    const nextSibling = this.$container && this.$container.nextElementSibling

    if (nextSibling) {
      nextSibling.remove()
    }
    if (this.$container) {
      this.$container.remove()
    }

    this.$el.innerHTML = this.$el_.innerHTML
    this.$el.style.marginTop = '0'
    this.$el.setAttribute('class', this.$el_.getAttribute('class') || '')

    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler)
      this._resizeHandler = null
    }
  }

  updateFormatText (formatName, text) {
    if (!/^format/.test(formatName) || !this.options[formatName]) {
      return
    }
    if (typeof text === 'string') {
      this.options[formatName] = () => text
    } else if (typeof text === 'function') {
      this.options[formatName] = text
    }
    this.initToolbar()
    this.initPagination()
    this.initBody()
  }
}

Object.assign(BootstrapTable.prototype, InitializationModule)
Object.assign(BootstrapTable.prototype, HeaderModule)
Object.assign(BootstrapTable.prototype, DataModule)
Object.assign(BootstrapTable.prototype, ToolbarModule)
Object.assign(BootstrapTable.prototype, SearchModule)
Object.assign(BootstrapTable.prototype, PaginationModule)
Object.assign(BootstrapTable.prototype, BodyModule)
Object.assign(BootstrapTable.prototype, CheckModule)
Object.assign(BootstrapTable.prototype, DetailModule)

BootstrapTable.VERSION = Constants.VERSION
BootstrapTable.DEFAULTS = Constants.DEFAULTS
BootstrapTable.LOCALES = Constants.LOCALES
BootstrapTable.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS
BootstrapTable.METHODS = Constants.METHODS
BootstrapTable.EVENTS = Constants.EVENTS
// Convenience aliases used by extensions and locale files
BootstrapTable.defaults = BootstrapTable.DEFAULTS
BootstrapTable.locales = BootstrapTable.LOCALES
BootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS
BootstrapTable.events = BootstrapTable.EVENTS
BootstrapTable.methods = BootstrapTable.METHODS
BootstrapTable.utils = Utils
BootstrapTable.icons = Constants.ICONS
BootstrapTable.theme = Constants.THEME

// BOOTSTRAP TABLE PUBLIC API
// =======================

// Extensions are UMD bundles that replace window.BootstrapTable with a
// subclass (`class extends BootstrapTable`) when their <script> tag loads.
// That reassignment only changes the window property - it can't reach back
// into this module's own closure-captured `BootstrapTable` binding. So the
// dispatcher must resolve the constructor to use at call time, once all
// extension scripts have had a chance to load, rather than capturing it
// once up front - otherwise loaded extensions would never actually apply.
function getConstructor () {
  return (typeof window !== 'undefined' && window.BootstrapTable) || BootstrapTable
}

function initBootstrapTable (elements, option, ...args) {
  const els = typeof elements === 'string' ?
    Array.from(document.querySelectorAll(elements)) :
    Array.isArray(elements) ? elements : [elements]

  let value

  for (const el of els) {
    let data = _instanceMap.get(el)

    if (typeof option === 'string') {
      if (!Constants.METHODS.includes(option)) {
        throw new Error(`Unknown method: ${option}`)
      }

      if (!data) {
        continue
      }

      value = data[option](...args)

      if (option === 'destroy') {
        _instanceMap.delete(el)
      }
      continue
    }

    if (data) {
      console.warn('You cannot initialize the table more than once!')
      continue
    }

    const options = Utils.extend(true, {}, BootstrapTable.DEFAULTS, getDataAttrs(el),
      typeof option === 'object' && option)

    data = new (getConstructor())(el, options)
    _instanceMap.set(el, data)
    data.init()
  }

  return typeof value === 'undefined' ? els.length === 1 ? els[0] : els : value
}

function getInstance (el) {
  return _instanceMap.get(typeof el === 'string' ? document.querySelector(el) : el)
}

BootstrapTable.init = initBootstrapTable
BootstrapTable.getInstance = getInstance

// BOOTSTRAP TABLE INIT
// =======================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toggle="table"]').forEach(el => {
    initBootstrapTable(el)
  })
})

export default BootstrapTable
