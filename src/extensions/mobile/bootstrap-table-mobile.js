/**
 * @author: Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */


const debounce = (func, wait) => {
  let timeout = 0

  return (...args) => {
    const later = () => {
      timeout = 0
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

Object.assign(BootstrapTable.defaults, {
  mobileResponsive: false,
  minWidth: 562,
  minHeight: undefined,
  heightThreshold: 100, // just slightly larger than mobile chrome's auto-hiding toolbar
  checkOnInit: true,
  columnsHidden: []
})

export default class extends BootstrapTable {
  init (...args) {
    super.init(...args)

    if (!this.options.mobileResponsive || !this.options.minWidth) {
      return
    }

    if (this.options.minWidth < 100 && this.options.resizable) {
      console.warn('The minWidth when the resizable extension is active should be greater or equal than 100')
      this.options.minWidth = 100
    }

    let old = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const resizeHandler = debounce(() => {
      // reset view if height has only changed by at least the threshold.
      const width = window.innerWidth
      const height = window.innerHeight
      const activeEl = document.activeElement

      if (activeEl && ['INPUT', 'SELECT', 'TEXTAREA'].includes(activeEl.nodeName)) {
        return
      }

      if (
        Math.abs(old.height - height) > this.options.heightThreshold ||
        old.width !== width
      ) {
        this.changeView(width, height)
        old = {
          width,
          height
        }
      }
    }, 200)

    window.addEventListener('resize', resizeHandler)
    window.addEventListener('orientationchange', resizeHandler)

    if (this.options.checkOnInit) {
      const width = window.innerWidth
      const height = window.innerHeight

      this.changeView(width, height)
      old = {
        width,
        height
      }
    }
  }

  conditionCardView () {
    this.changeTableView(false)
    this.showHideColumns(false)
  }

  conditionFullView () {
    this.changeTableView(true)
    this.showHideColumns(true)
  }

  changeTableView (cardViewState) {
    this.options.cardView = cardViewState
    this.toggleView()
  }

  showHideColumns (checked) {
    if (this.options.columnsHidden.length === 0) {
      return
    }

    const fieldsToToggle = this.columns
      .filter(column =>
        this.options.columnsHidden.includes(column.field) &&
        column.visible !== checked
      )
      .map(column => column.field)

    if (fieldsToToggle.length > 0) {
      this._toggleColumns(fieldsToToggle, checked, true)
    }
  }

  changeView (width, height) {
    if (this.options.minHeight) {
      if (width <= this.options.minWidth && height <= this.options.minHeight) {
        this.conditionCardView()
      } else if (width > this.options.minWidth && height > this.options.minHeight) {
        this.conditionFullView()
      }
    } else if (width <= this.options.minWidth) {
      this.conditionCardView()
    } else if (width > this.options.minWidth) {
      this.conditionFullView()
    }

    this.resetView()
  }
}
