/**
 * @author: Dennis Hernández
 * @version: v2.0.0
 *
 * Note: this extension depends on the resizableColumns jQuery plugin.
 * jQuery must be available and the plugin loaded for this to work.
 */



// resizableColumns stores its state via jQuery .data() so we check for it there
const isInit = that => {
  if (typeof window.$ !== 'undefined') {
    return $(that.$el).data('resizableColumns') !== undefined
  }
  return false
}

const initResizable = that => {
  if (
    that.options.resizable &&
    !that.options.cardView &&
    !isInit(that) &&
    that.$el.offsetParent !== null
  ) {
    if (typeof window.$ !== 'undefined') {
      $(that.$el).resizableColumns({
        store: window.store
      })
    }
  }
}

const destroy = that => {
  if (isInit(that) && typeof window.$ !== 'undefined') {
    $(that.$el).data('resizableColumns').destroy()
  }
}

const reInitResizable = that => {
  destroy(that)
  initResizable(that)
}

Object.assign(BootstrapTable.defaults, {
  resizable: false
})

export default class extends BootstrapTable {

  initBody (...args) {
    super.initBody(...args)

    if (this._resizableHandler) {
      this.$el.removeEventListener('column-switch.bs.table', this._resizableHandler)
      this.$el.removeEventListener('page-change.bs.table', this._resizableHandler)
    }

    this._resizableHandler = () => reInitResizable(this)

    this.$el.addEventListener('column-switch.bs.table', this._resizableHandler)
    this.$el.addEventListener('page-change.bs.table', this._resizableHandler)

    reInitResizable(this)
  }

  toggleView (...args) {
    super.toggleView(...args)

    if (this.options.resizable && this.options.cardView) {
      // Destroy the plugin
      destroy(this)
    }
  }

  resetView (...args) {
    super.resetView(...args)

    if (this.options.resizable) {
      // because in fitHeader function, we use setTimeout(func, 100);
      setTimeout(() => {
        initResizable(this)
      }, 100)
    }
  }
}
