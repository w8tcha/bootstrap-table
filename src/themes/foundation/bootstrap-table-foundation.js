/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/zurb/foundation-sites
 */



const Utils = BootstrapTable.utils

Utils.extend(BootstrapTable.defaults, {
  classes: 'table hover',
  buttonsPrefix: '',
  buttonsClass: 'button'
})

BootstrapTable.theme = 'foundation'

export default class extends BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.classes.buttonsGroup = 'button-group'
    this.constants.classes.buttonsDropdown = 'dropdown-container'
    this.constants.classes.paginationDropdown = ''
    this.constants.classes.dropdownActive = 'is-active'
    this.constants.classes.paginationActive = 'current'
    this.constants.classes.buttonActive = 'success'

    this.constants.html.toolbarDropdown = ['<div class="dropdown-pane" data-dropdown><ul class="vertical menu">', '</ul></div>']
    this.constants.html.toolbarDropdownItem = '<li class="dropdown-item-marker"><label class="dropdown-item">%s</label></li>'
    this.constants.html.toolbarDropdownSeparator = '<li><hr></li>'
    this.constants.html.pageDropdown = ['<div class="dropdown-pane" id="pagination-list-id" data-dropdown><ul class="vertical menu">', '</ul></div>']
    this.constants.html.pageDropdownItem = '<li class="dropdown-item %s"><a href="#">%s</a></li>'
    this.constants.html.dropdownCaret = '<i class="fa fa-angle-down"></i>'
    this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>']
    this.constants.html.paginationItem = '<li><a class="page-item%s" aria-label="%s" href="#">%s</a></li>'
    this.constants.html.inputGroup = '<div class="input-group">%s <div class="input-group-button">%s</div></div>'
    this.constants.html.searchInput = '<input class="%s input-%s input-group-field" type="search" placeholder="%s">'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    const toggles = Array.from(this.$toolbar.querySelectorAll('.dropdown-toggle'))

    if (toggles.length) {
      toggles.forEach((el, i) => {
        const next = el.nextElementSibling

        if (!next) return
        const id = `toolbar-columns-id${i}`

        next.id = id
        el.setAttribute('data-toggle', id)
        next.setAttribute('data-position', 'bottom')
        next.setAttribute('data-alignment', 'right')
        // TODO: replace with Foundation native API when jQuery is not available
        if (window.Foundation?.Dropdown) {
          new window.Foundation.Dropdown(next)
        }
      })

      this._initDropdown()
    }
  }

  initPagination () {
    super.initPagination()

    if (this.options.pagination && this.paginationParts.includes('pageSize')) {
      const el = this.$pagination.flatMap(p => [...p.querySelectorAll('.dropdown-toggle')])[0]
      const pane = this.$pagination.flatMap(p => [...p.querySelectorAll('.dropdown-pane')])[0]

      if (el && pane?.id) {
        el.setAttribute('data-toggle', pane.id)
      }

      if (pane) {
        pane.setAttribute('data-position', 'top')
        pane.setAttribute('data-alignment', 'left')
        // TODO: replace with Foundation native API when jQuery is not available
        if (window.Foundation?.Dropdown) {
          new window.Foundation.Dropdown(pane)
        }
      }

      this._initDropdown()
    }
  }

  _initDropdown () {
    this._ddToggles?.forEach(t => {
      if (t._ddClickHandler) t.removeEventListener('click', t._ddClickHandler)
    })
    if (this._docClickHandlerFoundation) {
      document.removeEventListener('click', this._docClickHandlerFoundation)
    }

    this._ddToggles = Array.from(this.$container.querySelectorAll('.dropdown-toggle'))

    this._ddToggles.forEach(toggle => {
      toggle._ddClickHandler = e => {
        e.stopPropagation()
        // TODO: use Foundation native toggle/close API without jQuery
        const pane = toggle.nextElementSibling

        if (pane) {
          const isOpen = pane.classList.contains('is-open')

          this._ddToggles.filter(t => t !== toggle).forEach(t => {
            t.nextElementSibling?.classList.remove('is-open')
          })
          pane.classList.toggle('is-open', !isOpen)
        }
      }
      toggle.addEventListener('click', toggle._ddClickHandler)
    })

    this._docClickHandlerFoundation = () => {
      this._ddToggles?.forEach(t => {
        t.nextElementSibling?.classList.remove('is-open')
      })
    }
    document.addEventListener('click', this._docClickHandlerFoundation)
  }
}
