/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://materializecss.com/
 */


const Utils = BootstrapTable.utils

Utils.extend(BootstrapTable.defaults, {
  classes: 'table highlight',
  buttonsPrefix: '',
  buttonsClass: 'waves-effect waves-light btn'
})

BootstrapTable.theme = 'materialize'

export default class extends BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.classes.buttonsGroup = 'button-group'
    this.constants.classes.buttonsDropdown = ''
    this.constants.classes.input = 'input-field'
    this.constants.classes.input = ''
    this.constants.classes.paginationDropdown = ''
    this.constants.classes.buttonActive = 'green'

    this.constants.html.toolbarDropdown = ['<ul class="dropdown-content">', '</ul>']
    this.constants.html.toolbarDropdownItem = '<li class="dropdown-item-marker"><label>%s</label></li>'
    this.constants.html.toolbarDropdownSeparator = '<li class="divider" tabindex="-1"></li>'
    this.constants.html.pageDropdown = ['<ul id="pagination-list-id" class="dropdown-content">', '</ul>']
    this.constants.html.pageDropdownItem = '<li><a class="%s" href="#">%s</a></li>'
    this.constants.html.dropdownCaret = '<i class="material-icons">arrow_drop_down</i>'
    this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>']
    this.constants.html.paginationItem = '<li class="waves-effect page-item%s" aria-label="%s"><a href="#">%s</a></li>'
    this.constants.html.icon = '<i class="%s">%s</i>'
    this.constants.html.inputGroup = '%s%s'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    const toggles = Array.from(this.$toolbar.querySelectorAll('.dropdown-toggle'))

    toggles.forEach((el, i) => {
      const next = el.nextElementSibling

      if (!next) return
      const id = `toolbar-columns-id${i}`

      next.id = id
      el.setAttribute('data-target', id)
      // TODO: use Materialize native Dropdown API without jQuery:
      // M.Dropdown.init(el, { alignment: 'right', constrainWidth: false, closeOnClick: false })
    })
  }

  initPagination () {
    super.initPagination()

    if (this.options.pagination && this.paginationParts.includes('pageSize')) {
      const toggle = this.$pagination.flatMap(p => [...p.querySelectorAll('.dropdown-toggle')])[0]
      const content = this.$pagination.flatMap(p => [...p.querySelectorAll('.dropdown-content')])[0]

      if (toggle && content?.id) {
        toggle.setAttribute('data-target', content.id)
        // TODO: use Materialize native Dropdown API without jQuery:
        // M.Dropdown.init(toggle)
      }
    }
  }
}
