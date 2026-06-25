import Utils from '../utils/index.js'

export default {
  toggleDetailView (index, _columnDetailFormatter) {
    const tr = this.$body.querySelector(`:scope > tr[data-index="${index}"]`)

    if (tr?.nextElementSibling?.classList.contains('detail-view')) {
      this.collapseRow(index)
    } else {
      this.expandRow(index, _columnDetailFormatter)
    }

    this.resetView()
  },

  expandRow (index, _columnDetailFormatter) {
    const row = this.data[index]
    const tr = this.$body.querySelector(`:scope > tr[data-index="${index}"][data-has-detail-view]`)

    if (!tr) return

    if (this.options.detailViewIcon) {
      const iconEl = tr.querySelector('a.detail-icon')

      if (iconEl) {
        iconEl.innerHTML = Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose)
      }
    }

    if (tr.nextElementSibling?.classList.contains('detail-view')) {
      return
    }

    const colCount = tr.querySelectorAll(':scope > td').length
    const detailTr = document.createElement('tr')

    detailTr.className = 'detail-view'
    detailTr.innerHTML = `<td colspan="${colCount}"></td>`
    tr.after(detailTr)

    const tdEl = detailTr.querySelector('td')
    const detailFormatter = _columnDetailFormatter || this.options.detailFormatter
    const content = Utils.calculateObjectValue(this.options, detailFormatter, [index, row, tdEl], '')

    if (content !== undefined && content !== '') {
      if (typeof content === 'string') {
        tdEl.insertAdjacentHTML('beforeend', content)
      } else if (content instanceof Node) {
        tdEl.appendChild(content)
      }
    }

    this.trigger('expand-row', index, row, tdEl)
  },

  expandRowByUniqueId (uniqueId) {
    const row = this.getRowByUniqueId(uniqueId)

    if (!row) {
      return
    }

    this.expandRow(this.data.indexOf(row))
  },

  collapseRow (index) {
    const row = this.data[index]
    const tr = this.$body.querySelector(`:scope > tr[data-index="${index}"][data-has-detail-view]`)

    if (!tr) return

    const nextTr = tr.nextElementSibling

    if (!nextTr?.classList.contains('detail-view')) {
      return
    }

    if (this.options.detailViewIcon) {
      const iconEl = tr.querySelector('a.detail-icon')

      if (iconEl) {
        iconEl.innerHTML = Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)
      }
    }

    this.trigger('collapse-row', index, row, nextTr)
    nextTr.remove()
  },

  collapseRowByUniqueId (uniqueId) {
    const row = this.getRowByUniqueId(uniqueId)

    if (!row) {
      return
    }

    this.collapseRow(this.data.indexOf(row))
  },

  expandAllRows () {
    this.$body.querySelectorAll(':scope > tr[data-index][data-has-detail-view]')
      .forEach(tr => this.expandRow(+tr.dataset.index))
  },

  collapseAllRows () {
    this.$body.querySelectorAll(':scope > tr[data-index][data-has-detail-view]')
      .forEach(tr => this.collapseRow(+tr.dataset.index))
  }
}
