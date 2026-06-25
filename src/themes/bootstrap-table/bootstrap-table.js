/**
 * @author Dustin Utecht
 * https://github.com/wenzhixin/bootstrap-table/
 */



BootstrapTable.theme = 'bootstrap-table'

export default class extends BootstrapTable {
  init () {
    super.init()

    this.constants.classes.dropup = 'dropdown-menu-up'

    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target.closest('[data-close]')) {
          e.currentTarget.classList.remove('show')
        }
      })
    })
  }

  initConstants () {
    super.initConstants()

    this.constants.html.inputGroup = '<div class="input-group">%s%s</div>'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.querySelector('.dropdown-toggle')) {
      this._initDropdown()
    }
  }

  initPagination () {
    super.initPagination()
    if (this.options.pagination && this.paginationParts.includes('pageSize')) {
      this._initDropdown()
    }
  }

  _initDropdown () {
    // Remove previous handlers to avoid duplicates on re-init
    this._dropdownToggles?.forEach(t => {
      if (t._ddClickHandler) t.removeEventListener('click', t._ddClickHandler)
    })
    if (this._windowClickHandler) {
      window.removeEventListener('click', this._windowClickHandler)
    }

    this._dropdownToggles = Array.from(this.$container.querySelectorAll('.dropdown-toggle'))

    this._dropdownToggles.forEach(toggle => {
      toggle._ddClickHandler = e => {
        const target = e.currentTarget.closest('.dropdown-toggle') || e.currentTarget
        const menu = target.nextElementSibling

        if (menu?.classList.contains('dropdown-menu')) {
          menu.classList.toggle('open')
        }
      }
      toggle.addEventListener('click', toggle._ddClickHandler)
    })

    this._windowClickHandler = e => {
      if (!e.target.closest('.dropdown-toggle, .dropdown-menu')) {
        this._dropdownToggles?.forEach(toggle => {
          const menu = toggle.nextElementSibling

          if (menu?.classList.contains('dropdown-menu')) {
            menu.classList.remove('open')
          }
        })
      }
    }
    window.addEventListener('click', this._windowClickHandler)
  }
}
