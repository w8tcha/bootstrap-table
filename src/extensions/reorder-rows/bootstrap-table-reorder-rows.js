/**
 * @author: Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 *
 * Note: this extension depends on the jQuery tableDnD plugin.
 * jQuery must be available and the plugin loaded for this to work.
 */



const rowAttr = (row, index) => ({
  id: `customId_${index}`
})

Object.assign(BootstrapTable.defaults, {
  reorderableRows: false,
  onDragStyle: null,
  onDropStyle: null,
  onDragClass: 'reorder-rows-on-drag-class',
  dragHandle: '>tbody>tr>td:not(.bs-checkbox)',
  useRowAttrFunc: false,
  // eslint-disable-next-line no-unused-vars
  onReorderRowsDrag (row) {
    return false
  },
  // eslint-disable-next-line no-unused-vars
  onReorderRowsDrop (row) {
    return false
  },
  // eslint-disable-next-line no-unused-vars
  onReorderRow (newData) {
    return false
  },
  onDragStop () {},
  onAllowDrop () {
    return true
  }
})

Object.assign(BootstrapTable.events, {
  'reorder-row.bs.table': 'onReorderRow'
})

export default class extends BootstrapTable {
  init (...args) {
    if (!this.options.reorderableRows) {
      super.init(...args)
      return
    }

    if (this.options.useRowAttrFunc) {
      this.options.rowAttributes = rowAttr
    }

    const onPostBody = this.options.onPostBody

    this.options.onPostBody = () => {
      setTimeout(() => {
        this.makeRowsReorderable()
        onPostBody.call(this.options, this.options.data)
      }, 1)
    }

    super.init(...args)
  }

  makeRowsReorderable () {
    // Requires jQuery tableDnD plugin
    if (typeof window.$ !== 'undefined') {
      $(this.$el).tableDnD({
        onDragStyle: this.options.onDragStyle,
        onDropStyle: this.options.onDropStyle,
        onDragClass: this.options.onDragClass,
        onAllowDrop: (hoveredRow, draggedRow) => this.onAllowDrop(hoveredRow, draggedRow),
        onDragStop: (table, draggedRow) => this.onDragStop(table, draggedRow),
        onDragStart: (table, droppedRow) => this.onDropStart(table, droppedRow),
        onDrop: (table, droppedRow) => this.onDrop(table, droppedRow),
        dragHandle: this.options.dragHandle
      })
    }
  }

  onDropStart (table, draggingTd) {
    this.$draggingTd = draggingTd
    this.$draggingTd.style.cursor = 'move'
    this.draggingIndex = +draggingTd.parentElement?.dataset.index
    // Call the user defined function
    this.options.onReorderRowsDrag(this.data[this.draggingIndex])
  }

  onDragStop (table, draggedRow) {
    const rowIndexDraggedRow = +draggedRow.dataset.index
    const draggedRowItem = this.data[rowIndexDraggedRow]

    this.options.onDragStop(table, draggedRowItem, draggedRow)
  }

  onAllowDrop (hoveredRow, draggedRow) {
    const rowIndexDraggedRow = +draggedRow.dataset.index
    const rowIndexHoveredRow = +hoveredRow.dataset.index
    const draggedRowItem = this.data[rowIndexDraggedRow]
    const hoveredRowItem = this.data[rowIndexHoveredRow]

    return this.options.onAllowDrop(hoveredRowItem, draggedRowItem, hoveredRow, draggedRow)
  }

  onDrop (table) {
    this.$draggingTd.style.cursor = ''
    const pageNum = this.options.pageNumber
    const pageSize = this.options.pageSize
    const newData = []

    for (let i = 0; i < table.tBodies[0].rows.length; i++) {
      const tr = table.tBodies[0].rows[i]

      newData.push(this.data[+tr.dataset.index])
      tr.dataset.index = i
    }

    const draggingRow = this.data[this.draggingIndex]
    const droppedIndex = newData.indexOf(this.data[this.draggingIndex])
    const droppedRow = this.data[droppedIndex]
    const index = (pageNum - 1) * pageSize + this.options.data.indexOf(this.data[droppedIndex])

    this.options.data.splice(this.options.data.indexOf(draggingRow), 1)
    this.options.data.splice(index, 0, draggingRow)

    this.initSearch()

    if (this.options.sidePagination === 'server') {
      this.data = [...this.options.data]
    }

    // Call the user defined function
    this.options.onReorderRowsDrop(droppedRow)

    // Call the event reorder-row
    this.trigger('reorder-row', newData, draggingRow, droppedRow)
  }

  initSearch () {
    this.ignoreInitSort = true
    super.initSearch()
  }

  initSort () {
    if (this.ignoreInitSort) {
      this.ignoreInitSort = false
      return
    }

    super.initSort()
  }
}
