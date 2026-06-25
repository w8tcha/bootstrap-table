/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/jgthms/bulma/
 */


const Utils = BootstrapTable.utils

Utils.extend(BootstrapTable.defaults, {
  classes: 'table is-bordered is-hoverable',
  buttonsPrefix: '',
  buttonsClass: 'button'
})

BootstrapTable.theme = 'bulma'

export default class extends BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.classes.buttonsGroup = 'buttons has-addons'
    this.constants.classes.buttonsDropdown = 'button dropdown is-right'
    this.constants.classes.input = 'input'
    this.constants.classes.paginationDropdown = 'ui dropdown'
    this.constants.classes.dropup = 'is-up'
    this.constants.classes.dropdownActive = 'is-active'
    this.constants.classes.paginationActive = 'is-current'
    this.constants.classes.buttonActive = 'is-active'

    this.constants.html.toolbarDropdown = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>']
    this.constants.html.toolbarDropdownItem = '<label class="dropdown-item dropdown-item-marker">%s</label>'
    this.constants.html.toolbarDropdownSeparator = '<li class="dropdown-divider"></li>'
    this.constants.html.pageDropdown = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>']
    this.constants.html.pageDropdownItem = '<a class="dropdown-item %s" href="#">%s</a>'
    this.constants.html.dropdownCaret = '<span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>'
    this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>']
    this.constants.html.paginationItem = '<li><a class="page-item pagination-link%s" aria-label="%s" href="#">%s</a></li>'
    this.constants.html.searchInput = '<p class="control"><input class="%s input-%s" type="search" placeholder="%s"></p>'
    this.constants.html.inputGroup = '<div class="field has-addons has-addons-right">%s%s</div>'
    this.constants.html.searchButton = '<p class="control"><button class="%s" type="button" name="search" title="%s">%s %s</button></p>'
    this.constants.html.searchClearButton = '<p class="control"><button class="%s" type="button" name="clearSearch" title="%s">%s %s</button></p>'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.querySelector('.dropdown')) {
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
    this._dropdowns?.forEach(d => {
      if (d._ddClickHandler) d.removeEventListener('click', d._ddClickHandler)
    })
    if (this._docClickHandlerBulma) {
      document.removeEventListener('click', this._docClickHandlerBulma)
    }

    this._dropdowns = Array.from(this.$container.querySelectorAll('.dropdown:not(.is-hoverable)'))

    this._dropdowns.forEach(dropdown => {
      dropdown._ddClickHandler = e => {
        e.stopPropagation()
        this._dropdowns.filter(d => d !== dropdown).forEach(d => d.classList.remove('is-active'))
        dropdown.classList.toggle('is-active')
      }
      dropdown.addEventListener('click', dropdown._ddClickHandler)
    })

    this._docClickHandlerBulma = () => {
      this._dropdowns?.forEach(d => d.classList.remove('is-active'))
    }
    document.addEventListener('click', this._docClickHandlerBulma)
  }
}
