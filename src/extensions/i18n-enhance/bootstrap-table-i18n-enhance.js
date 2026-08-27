/**
 * @author: Jewway
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */


BootstrapTable.methods.push('changeTitle')
BootstrapTable.methods.push('changeLocale')

export default class extends BootstrapTable {

  changeTitle (locale) {
    this.options.columns.forEach(columnList => {
      columnList.forEach(column => {
        if (column.field) {
          column.title = locale[column.field]
        }
      })
    })
    this.initHeader()
    this.initBody()
    this.initToolbar()
  }

  changeLocale (localeId) {
    this.options.locale = localeId
    this.initLocale()
    this.initPagination()
    this.initBody()
    this.initToolbar()
  }
}
