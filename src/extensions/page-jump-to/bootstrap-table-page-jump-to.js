/**
 * @author Jay <jwang@dizsoft.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */


const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.defaults, {
  showJumpTo: false,
  showJumpToByPages: 0
})

Object.assign(BootstrapTable.locales, {
  formatJumpTo () {
    return 'GO'
  }
})
Object.assign(BootstrapTable.defaults, BootstrapTable.locales)

export default class extends BootstrapTable {
  initPagination (...args) {
    super.initPagination(...args)

    if (this.options.showJumpTo && this.totalPages >= this.options.showJumpToByPages) {
      const pageGroups = this.$pagination.flatMap(p => [...p.querySelectorAll(':scope > .pagination')])

      pageGroups.forEach(pageGroup => {
        if (pageGroup.querySelector('.page-jump-to')) {
          return
        }

        const template = document.createElement('template')

        template.innerHTML = Utils.sprintf(
          this.constants.html.inputGroup,
          `<input type="number"
            class="${this.constants.classes.input}${Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, this.options.iconSize)}"
            value="${this.options.pageNumber}"
            min="1"
            max="${this.totalPages}">`,
          `<button class="${this.constants.buttonsClass}" type="button">
          ${this.options.formatJumpTo()}
          </button>`
        )

        const jumpTo = template.content.firstElementChild

        jumpTo.classList.add('page-jump-to')
        pageGroup.appendChild(jumpTo)

        const input = jumpTo.querySelector('input')

        jumpTo.querySelector('button').addEventListener('click', () => {
          this.selectPage(+input.value)
        })

        input.addEventListener('keyup', e => {
          if (input.value === '') {
            return
          }
          if (e.keyCode === 13) {
            this.selectPage(+input.value)
            return
          }
          if (+input.value < +input.getAttribute('min')) {
            input.value = input.getAttribute('min')
          } else if (+input.value > +input.getAttribute('max')) {
            input.value = input.getAttribute('max')
          }
        })

        input.addEventListener('blur', () => {
          if (input.value === '') {
            input.value = this.options.pageNumber
          }
        })
      })
    }
  }
}
