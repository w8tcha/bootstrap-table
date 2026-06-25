/**
 * @author: Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */



const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.defaults, {
  keyEvents: false
})

export default class extends BootstrapTable {

  init (...args) {
    super.init(...args)

    if (this.options.keyEvents) {
      this.initKeyEvents()
    }
  }

  initKeyEvents () {
    if (this._keydownHandler) {
      document.removeEventListener('keydown', this._keydownHandler)
    }

    this._keydownHandler = e => {
      const search = Utils.getSearchInput(this)
      const refresh = this.$toolbar.querySelector('button[name="refresh"]')
      const toggle = this.$toolbar.querySelector('button[name="toggle"]')
      const paginationSwitch = this.$toolbar.querySelector('button[name="paginationSwitch"]')

      if (document.activeElement === search || !document.activeElement?.contains(this.$toolbar)) {
        return true
      }

      switch (e.keyCode) {
        case 83: // s
          if (!this.options.search) {
            return
          }
          search?.focus()
          return false
        case 82: // r
          if (!this.options.showRefresh) {
            return
          }
          refresh?.click()
          return false
        case 84: // t
          if (!this.options.showToggle) {
            return
          }
          toggle?.click()
          return false
        case 80: // p
          if (!this.options.showPaginationSwitch) {
            return
          }
          paginationSwitch?.click()
          return false
        case 37: // left
          if (!this.options.pagination) {
            return
          }
          this.prevPage()
          return false
        case 39: // right
          if (!this.options.pagination) {
            return
          }
          this.nextPage()
          return
        default:
          break
      }
    }

    document.addEventListener('keydown', this._keydownHandler)
  }
}
