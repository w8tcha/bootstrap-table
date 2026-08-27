/**
 * @author Nadim Basalamah <dimbslmh@gmail.com>
 * @version: v1.1.0
 * @update: ErwannNevou <https://github.com/ErwannNevou>
 */


let isSingleSort = false
const Utils = BootstrapTable.utils

Utils.assignIcons(BootstrapTable.icons, 'plus', {
  glyphicon: 'glyphicon-plus',
  fa: 'fa-plus',
  bi: 'bi-plus',
  icon: 'icon-plus',
  'material-icons': 'plus'
})

Utils.assignIcons(BootstrapTable.icons, 'minus', {
  glyphicon: 'glyphicon-minus',
  fa: 'fa-minus',
  bi: 'bi-dash',
  icon: 'icon-minus',
  'material-icons': 'minus'
})

Utils.assignIcons(BootstrapTable.icons, 'sort', {
  glyphicon: 'glyphicon-sort',
  fa: 'fa-sort',
  bi: 'bi-arrow-down-up',
  icon: 'icon-sort-amount-asc',
  'material-icons': 'sort'
})

const theme = {
  bootstrap3: {
    html: {
      multipleSortModal: `
        <div class="modal fade modal-multiple-sort" id="%s" tabindex="-1" role="dialog" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="%sLabel">%s</h4>
              </div>
              <div class="modal-body">
                <div class="bootstrap-table">
                  <div class="fixed-table-toolbar">
                    <div class="bars">
                      <button type="button" class="toolbar-btn-add btn btn-default">%s %s</button>
                      <button type="button" class="toolbar-btn-delete btn btn-default" disabled>%s %s</button>
                    </div>
                  </div>
                  <div class="fixed-table-container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th><div class="th-inner">%s</div></th>
                          <th><div class="th-inner">%s</div></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">%s</button>
                <button type="button" class="btn btn-primary multi-sort-order-button">%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s form-control">'
    }
  },
  bootstrap4: {
    html: {
      multipleSortModal: `
        <div class="modal fade modal-multiple-sort" id="%s" tabindex="-1" role="dialog" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="%sLabel">%s</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="bootstrap-table">
                  <div class="fixed-table-toolbar">
                    <div class="bars pb-3">
                      <button type="button" class="toolbar-btn-add btn btn-secondary">%s %s</button>
                      <button type="button" class="toolbar-btn-delete btn btn-secondary" disabled>%s %s</button>
                    </div>
                  </div>
                  <div class="fixed-table-container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th><div class="th-inner">%s</div></th>
                          <th><div class="th-inner">%s</div></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">%s</button>
                <button type="button" class="btn btn-primary multi-sort-order-button">%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s form-control">'
    }
  },
  bootstrap5: {
    html: {
      multipleSortModal: `
        <div class="modal fade modal-multiple-sort" id="%s" tabindex="-1" role="dialog" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="%sLabel">%s</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="bootstrap-table">
                  <div class="fixed-table-toolbar">
                    <div class="bars pb-3">
                      <button type="button" class="toolbar-btn-add btn btn-secondary">%s %s</button>
                      <button type="button" class="toolbar-btn-delete btn btn-secondary" disabled>%s %s</button>
                    </div>
                  </div>
                  <div class="fixed-table-container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th><div class="th-inner">%s</div></th>
                          <th><div class="th-inner">%s</div></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">%s</button>
                <button type="button" class="btn btn-primary multi-sort-order-button">%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-bs-toggle="modal" data-bs-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s form-control">'
    }
  },
  semantic: {
    html: {
      multipleSortModal: `
        <div class="ui modal tiny modal-multiple-sort" id="%s" aria-labelledby="%sLabel" aria-hidden="true">
          <i class="close icon"></i>
          <div class="header" id="%sLabel">
            %s
          </div>
          <div class="image content">
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                <div class="bars pb-3">
                  <button type="button" class="toolbar-btn-add ui button">%s %s</button>
                  <button type="button" class="toolbar-btn-delete ui button" disabled>%s %s</button>
                </div>
              </div>
              <div class="fixed-table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th><div class="th-inner">%s</div></th>
                      <th><div class="th-inner">%s</div></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="actions">
            <div class="ui button deny">%s</div>
            <div class="ui button approve multi-sort-order-button">%s</div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s">'
    }
  },
  materialize: {
    html: {
      multipleSortModal: `
        <div id="%s" class="modal modal-multiple-sort" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-content" id="%sLabel">
            <h4>%s</h4>
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                <div class="bars pb-3">
                  <button type="button" class="toolbar-btn-add waves-effect waves-light btn">%s %s</button>
                  <button type="button" class="toolbar-btn-delete waves-effect waves-light btn" disabled>%s %s</button>
                </div>
              </div>
              <div class="fixed-table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th><div class="th-inner">%s</div></th>
                      <th><div class="th-inner">%s</div></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <a href="javascript:void(0)" class="modal-close waves-effect waves-light btn">%s</a>
              <a href="javascript:void(0)" class="modal-close waves-effect waves-light btn multi-sort-order-button">%s</a>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<a class="multi-sort %s modal-trigger" href="#%s" type="button" data-toggle="modal" title="%s">%s</a>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  },
  foundation: {
    html: {
      multipleSortModal: `
        <div class="reveal modal-multiple-sort" id="%s" data-reveal aria-labelledby="%sLabel" aria-hidden="true">
          <div id="%sLabel">
            <h1>%s</h1>
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                  <div class="bars padding-bottom-2">
                    <button type="button" class="toolbar-btn-add waves-effect waves-light button">%s %s</button>
                    <button type="button" class="toolbar-btn-delete waves-effect waves-light button" disabled>%s %s</button>
                  </div>
              </div>
              <div class="fixed-table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th><div class="th-inner">%s</div></th>
                      <th><div class="th-inner">%s</div></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>

            <button class="waves-effect waves-light button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">%s</span>
            </button>
            <button class="waves-effect waves-light button multi-sort-order-button" data-close aria-label="Order" type="button">
              <span aria-hidden="true">%s</span>
            </button>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" data-open="%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  },
  bulma: {
    html: {
      multipleSortModal: `
        <div class="modal modal-multiple-sort" id="%s" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-background"></div>
          <div class="modal-content" id="%sLabel">
            <div class="box">
              <h2>%s</h2>
              <div class="bootstrap-table">
                <div class="fixed-table-toolbar">
                  <div class="bars padding-bottom-2">
                    <button type="button" class="toolbar-btn-add waves-effect waves-light button">%s %s</button>
                    <button type="button" class="toolbar-btn-delete waves-effect waves-light button" disabled>%s %s</button>
                  </div>
                </div>
                <div class="fixed-table-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th><div class="th-inner">%s</div></th>
                        <th><div class="th-inner">%s</div></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
              <button type="button" class="waves-effect waves-light button" data-close>%s</button>
              <button type="button" class="waves-effect waves-light button multi-sort-order-button" data-close>%s</button>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  },
  'bootstrap-table': {
    html: {
      multipleSortModal: `
        <div class="modal modal-multiple-sort" id="%s" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-background"></div>
          <div class="modal-content" id="%sLabel">
            <div class="box">
              <h2>%s</h2>
              <div class="bootstrap-table">
                <div class="fixed-table-toolbar">
                  <div class="bars padding-bottom-2">
                    <button type="button" class="toolbar-btn-add btn">%s %s</button>
                    <button type="button" class="toolbar-btn-delete btn" disabled>%s %s</button>
                  </div>
                </div>
                <div class="fixed-table-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th><div class="th-inner">%s</div></th>
                        <th><div class="th-inner">%s</div></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
              <div class="mt-30">
                <button type="button" class="btn" data-close>%s</button>
                <button type="button" class="btn multi-sort-order-button" data-close>%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  }
}[BootstrapTable.theme]

const showSortModal = that => {
  const _selector = that.sortModalSelector
  const _id = `#${_selector}`
  const o = that.options
  const existingModal = document.querySelector(_id)

  if (existingModal && existingModal.classList.contains('modal')) {
    return
  }

  const sModal = Utils.sprintf(
    theme.html.multipleSortModal,
    _selector, _selector, _selector,
    that.options.formatMultipleSort(),
    Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.plus),
    that.options.formatAddLevel(),
    Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.minus),
    that.options.formatDeleteLevel(),
    that.options.formatColumn(),
    that.options.formatOrder(),
    that.options.formatCancel(),
    that.options.formatSort()
  )

  const template = document.createElement('template')

  template.innerHTML = sModal.trim()
  document.body.appendChild(template.content.firstElementChild)

  that.$sortModal = document.querySelector(_id)

  that.$sortModal.addEventListener('click', e => {
    if (e.target.closest('.toolbar-btn-add')) {
      const total = that.$sortModal.querySelector('.multi-sort-name')?.querySelectorAll('option').length || 0
      const current = that.$sortModal.querySelectorAll('tbody tr').length

      if (current < total) {
        that.addLevel()
        that.setButtonStates()
      }
    } else if (e.target.closest('.toolbar-btn-delete')) {
      const total = that.$sortModal.querySelector('.multi-sort-name')?.querySelectorAll('option').length || 0
      const current = that.$sortModal.querySelectorAll('tbody tr').length

      if (current > 1 && current <= total) {
        that.$sortModal.querySelector('tbody tr:last-child')?.remove()
        that.setButtonStates()
      }
    } else if (e.target.closest('.multi-sort-order-button')) {
      const rows = [...that.$sortModal.querySelectorAll('tbody > tr')]
      const alertEl = that.$sortModal.querySelector('div.alert')
      const fields = []
      const results = []

      const sortPriority = rows.map(row => {
        const name = row.querySelector('.multi-sort-name')?.value || ''
        const order = row.querySelector('.multi-sort-order')?.value || ''

        fields.push(name)
        return { sortName: name, sortOrder: order }
      })

      const sortedFields = [...fields].sort()

      for (let i = 0; i < fields.length - 1; i++) {
        if (sortedFields[i + 1] === sortedFields[i]) {
          results.push(sortedFields[i])
        }
      }

      if (results.length > 0) {
        if (!alertEl) {
          const alertHtml = `<div class="alert alert-danger" role="alert"><strong>${that.options.formatDuplicateAlertTitle()}</strong> ${that.options.formatDuplicateAlertDescription()}</div>`

          that.$sortModal.querySelector('.bars')?.insertAdjacentHTML('beforebegin', alertHtml)
        }
      } else {
        alertEl?.remove()

        if (['bootstrap3', 'bootstrap4'].includes(BootstrapTable.theme)) {
          if (typeof window.$ !== 'undefined') {
            $(that.$sortModal).modal('hide')
          }
        } else if (BootstrapTable.theme === 'bootstrap5') {
          window.bootstrap?.Modal.getInstance(that.$sortModal)?.hide()
        }

        that.multiSort(sortPriority)
      }
    }
  })

  const rows = [...that.$sortModal.querySelectorAll('tbody > tr')]

  if (that.options.sortPriority === null || that.options.sortPriority.length === 0) {
    if (that.options.sortName) {
      that.options.sortPriority = [{
        sortName: that.options.sortName,
        sortOrder: that.options.sortOrder
      }]
    }
  }

  if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
    if (rows.length < that.options.sortPriority.length && typeof that.options.sortPriority === 'object') {
      for (let i = 0; i < that.options.sortPriority.length; i++) {
        that.addLevel(i, that.options.sortPriority[i])
      }
    }
  } else {
    that.addLevel(0)
  }

  that.setButtonStates()
}

BootstrapTable.methods.push('multipleSort')
BootstrapTable.methods.push('multiSort')

Object.assign(BootstrapTable.defaults, {
  showMultiSort: false,
  showMultiSortButton: true,
  multiSortStrictSort: false,
  sortPriority: null,
  onMultipleSort () {
    return false
  }
})

Object.assign(BootstrapTable.events, {
  'multiple-sort.bs.table': 'onMultipleSort'
})

Object.assign(BootstrapTable.locales, {
  formatMultipleSort () {
    return 'Multiple Sort'
  },
  formatAddLevel () {
    return 'Add Level'
  },
  formatDeleteLevel () {
    return 'Delete Level'
  },
  formatColumn () {
    return 'Column'
  },
  formatOrder () {
    return 'Order'
  },
  formatSortBy () {
    return 'Sort by'
  },
  formatThenBy () {
    return 'Then by'
  },
  formatSort () {
    return 'Sort'
  },
  formatCancel () {
    return 'Cancel'
  },
  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },
  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },
  formatSortOrders () {
    return {
      asc: 'Ascending',
      desc: 'Descending'
    }
  }
})

Object.assign(BootstrapTable.defaults, BootstrapTable.locales)

const _initToolbar = BootstrapTable.prototype.initToolbar
const _destroy = BootstrapTable.prototype.destroy

BootstrapTable.prototype.initToolbar = function (...args) {
  this.showToolbar = this.showToolbar || this.options.showMultiSort
  const that = this
  const sortModalSelector = Utils.getEventName('sort-modal', this.$el.getAttribute('id'))
  const sortModalId = `#${sortModalSelector}`
  const multiSortBtn = this.$toolbar.querySelector('div.multi-sort')
  const o = this.options

  this.$sortModal = document.querySelector(sortModalId)
  this.sortModalSelector = sortModalSelector

  if (that.options.sortPriority !== null) {
    that.onMultipleSort()
  }

  if (this.options.showMultiSort && this.options.showMultiSortButton) {
    this.buttons = Object.assign(this.buttons, {
      multipleSort: {
        html: Utils.sprintf(theme.html.multipleSortButton,
          that.constants.buttonsClass, that.sortModalSelector, this.options.formatMultipleSort(),
          Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.sort))
      }
    })
  }

  _initToolbar.apply(this, args)

  if (that.options.sidePagination === 'server' && !isSingleSort && that.options.sortPriority !== null) {
    const t = that.options.queryParams

    that.options.queryParams = params => {
      params.multiSort = that.options.sortPriority
      return t(params)
    }
  }

  if (this.options.showMultiSort) {
    if (!multiSortBtn && this.options.showMultiSortButton) {
      const multiSortBtnEl = this.$toolbar.querySelector('.multi-sort')

      if (multiSortBtnEl) {
        if (BootstrapTable.theme === 'semantic') {
          multiSortBtnEl.addEventListener('click', () => {
            if (typeof window.$ !== 'undefined') {
              $(sortModalId).modal('show')
            }
          })
        } else if (BootstrapTable.theme === 'materialize') {
          multiSortBtnEl.addEventListener('click', () => {
            if (typeof window.$ !== 'undefined') {
              $(sortModalId).modal()
            }
          })
        } else if (BootstrapTable.theme === 'bootstrap-table') {
          multiSortBtnEl.addEventListener('click', () => {
            document.querySelector(sortModalId)?.classList.add('show')
          })
        } else if (BootstrapTable.theme === 'foundation') {
          multiSortBtnEl.addEventListener('click', () => {
            if (!this.foundationModal) {
              // eslint-disable-next-line no-undef
              this.foundationModal = new Foundation.Reveal($(sortModalId))
            }
            this.foundationModal.open()
          })
        } else if (BootstrapTable.theme === 'bulma') {
          multiSortBtnEl.addEventListener('click', () => {
            document.documentElement.classList.toggle('is-clipped')
            document.querySelector(sortModalId)?.classList.toggle('is-active')
            const closeBtn = document.querySelector(`${sortModalId} [data-close]`)

            if (closeBtn) {
              closeBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('is-clipped')
                document.querySelector(sortModalId)?.classList.toggle('is-active')
              }, { once: true })
            }
          })
        }
      }

      showSortModal(that)
    }

    this.$el.addEventListener('sort.bs.table', () => {
      isSingleSort = true
    })

    this.$el.addEventListener('multiple-sort.bs.table', () => {
      isSingleSort = false
    })

    this.$el.addEventListener('load-success.bs.table', () => {
      if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object' && that.options.sidePagination !== 'server') {
        that.onMultipleSort()
      }
    })

    this.$el.addEventListener('column-switch.bs.table', e => {
      const [columnField] = e.detail || []

      if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
        for (let i = 0; i < that.options.sortPriority.length; i++) {
          if (that.options.sortPriority[i].sortName === columnField) {
            that.options.sortPriority.splice(i, 1)
          }
        }

        that.assignSortableArrows()
      }

      that.$sortModal?.remove()
      showSortModal(that)
    })

    this.$el.addEventListener('reset-view.bs.table', () => {
      if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object') {
        that.assignSortableArrows()
      }
    })
  }
}

BootstrapTable.prototype.destroy = function (...args) {
  _destroy.apply(this, args)

  if (this.options.showMultiSort) {
    this.enableCustomSort = false
    this.$sortModal?.remove()
  }
}

BootstrapTable.prototype.multipleSort = function () {
  const that = this

  if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object' && that.options.sidePagination !== 'server') {
    that.onMultipleSort()
  }
}

BootstrapTable.prototype.onMultipleSort = function () {
  const that = this

  const cmp = (x, y) => x > y ? 1 : x < y ? -1 : 0

  const arrayCmp = (a, b) => {
    const arr1 = []
    const arr2 = []

    for (let i = 0; i < that.options.sortPriority.length; i++) {
      let fieldName = that.options.sortPriority[i].sortName
      const fieldIndex = that.header.fields.indexOf(fieldName)
      const sorterName = that.header.sorters[that.header.fields.indexOf(fieldName)]

      if (that.header.sortNames[fieldIndex]) {
        fieldName = that.header.sortNames[fieldIndex]
      }

      const order = that.options.sortPriority[i].sortOrder === 'desc' ? -1 : 1
      let aa = Utils.getItemField(a, fieldName)
      let bb = Utils.getItemField(b, fieldName)
      const value1 = Utils.calculateObjectValue(that.header, sorterName, [aa, bb, a, b])
      const value2 = Utils.calculateObjectValue(that.header, sorterName, [bb, aa, b, a])

      if (value1 !== undefined && value2 !== undefined) {
        arr1.push(order * value1)
        arr2.push(order * value2)
        continue
      }

      if (aa === undefined || aa === null) aa = ''
      if (bb === undefined || bb === null) bb = ''

      if (!isNaN(parseFloat(aa)) && isFinite(aa) && !isNaN(parseFloat(bb)) && isFinite(bb)) {
        aa = parseFloat(aa)
        bb = parseFloat(bb)
      } else {
        aa = aa.toString()
        bb = bb.toString()

        if (that.options.multiSortStrictSort) {
          aa = aa.toLowerCase()
          bb = bb.toLowerCase()
        }
      }

      arr1.push(order * cmp(aa, bb))
      arr2.push(order * cmp(bb, aa))
    }

    return cmp(arr1, arr2)
  }

  this.enableCustomSort = true
  this.data.sort((a, b) => arrayCmp(a, b))

  this.initBody()
  this.assignSortableArrows()
  this.trigger('multiple-sort')
}

BootstrapTable.prototype.addLevel = function (index, sortPriority) {
  const text = index === 0 ? this.options.formatSortBy() : this.options.formatThenBy()
  const tbody = this.$sortModal.querySelector('tbody')
  const tr = document.createElement('tr')
  const td1 = document.createElement('td')

  td1.textContent = text

  const nameSelectHtml = `${Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-name')}</select>`
  const orderSelectHtml = `${Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-order')}</select>`
  const nameTemplate = document.createElement('template')
  const orderTemplate = document.createElement('template')

  nameTemplate.innerHTML = nameSelectHtml
  orderTemplate.innerHTML = orderSelectHtml

  const td2 = document.createElement('td')
  const td3 = document.createElement('td')

  td2.appendChild(nameTemplate.content.firstElementChild)
  td3.appendChild(orderTemplate.content.firstElementChild)
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tbody.appendChild(tr)

  const multiSortName = this.$sortModal.querySelector('.multi-sort-name:last-of-type') ||
    this.$sortModal.querySelectorAll('.multi-sort-name')[this.$sortModal.querySelectorAll('.multi-sort-name').length - 1]
  const multiSortOrder = this.$sortModal.querySelector('.multi-sort-order:last-of-type') ||
    this.$sortModal.querySelectorAll('.multi-sort-order')[this.$sortModal.querySelectorAll('.multi-sort-order').length - 1]

  this.columns.forEach(column => {
    if (column.sortable === false || column.visible === false) {
      return
    }
    multiSortName.insertAdjacentHTML('beforeend', `<option value="${column.field}">${column.title}</option>`)
  })

  Object.entries(this.options.formatSortOrders()).forEach(([value, order]) => {
    multiSortOrder.insertAdjacentHTML('beforeend', `<option value="${value}">${order}</option>`)
  })

  if (sortPriority !== undefined) {
    const nameOpt = multiSortName.querySelector(`option[value="${sortPriority.sortName}"]`)

    if (nameOpt) nameOpt.selected = true

    const orderOpt = multiSortOrder.querySelector(`option[value="${sortPriority.sortOrder}"]`)

    if (orderOpt) orderOpt.selected = true
  }
}

BootstrapTable.prototype.assignSortableArrows = function () {
  const headers = [...this.$header.querySelectorAll('th')]

  for (let i = 0; i < headers.length; i++) {
    for (let c = 0; c < this.options.sortPriority.length; c++) {
      if (headers[i].dataset.field === this.options.sortPriority[c].sortName) {
        const sortable = headers[i].querySelector('.sortable')

        if (sortable) {
          sortable.classList.remove('desc', 'asc')
          sortable.classList.add(this.options.sortPriority[c].sortOrder)
        }
      }
    }
  }
}

BootstrapTable.prototype.setButtonStates = function () {
  const total = this.$sortModal.querySelector('.multi-sort-name')?.querySelectorAll('option').length || 0
  const current = this.$sortModal.querySelectorAll('tbody tr').length
  const addBtn = this.$sortModal.querySelector('.toolbar-btn-add')
  const deleteBtn = this.$sortModal.querySelector('.toolbar-btn-delete')

  if (current === total) addBtn?.setAttribute('disabled', 'disabled')
  if (current > 1) deleteBtn?.removeAttribute('disabled')
  if (current < total) addBtn?.removeAttribute('disabled')
  if (current === 1) deleteBtn?.setAttribute('disabled', 'disabled')
}

BootstrapTable.prototype.multiSort = function (sortPriority) {
  this.options.sortPriority = sortPriority
  this.options.sortName = undefined

  if (this.options.sidePagination === 'server') {
    const queryParams = this.options.queryParams

    this.options.queryParams = params => {
      params.multiSort = this.options.sortPriority
      return Utils.calculateObjectValue(this.options, queryParams, [params])
    }
    isSingleSort = false
    this.initServer(this.options.silentSort)
  }

  this.onMultipleSort()
}

export default BootstrapTable
