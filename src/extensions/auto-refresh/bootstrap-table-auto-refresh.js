/**
 * @author: Alec Fenichel
 * @webSite: https://fenichelar.com
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */


const Utils = BootstrapTable.utils

Object.assign(BootstrapTable.defaults, {
  autoRefresh: false,
  showAutoRefresh: true,
  autoRefreshInterval: 60,
  autoRefreshSilent: true,
  autoRefreshStatus: true,
  autoRefreshFunction: null
})

Utils.assignIcons(BootstrapTable.icons, 'autoRefresh', {
  glyphicon: 'glyphicon-time icon-time',
  fa: 'fa-clock',
  bi: 'bi-clock',
  icon: 'icon-clock',
  'material-icons': 'access_time'
})

Object.assign(BootstrapTable.locales, {
  formatAutoRefresh () {
    return 'Auto Refresh'
  }
})

Object.assign(BootstrapTable.defaults, BootstrapTable.locales)

export default class extends BootstrapTable {
  init (...args) {
    super.init(...args)

    if (this.options.autoRefresh && this.options.autoRefreshStatus) {
      this.setupRefreshInterval()
    }
  }

  initToolbar (...args) {
    if (this.options.autoRefresh) {
      const attributes = {
        'aria-label': this.options.formatAutoRefresh(),
        title: this.options.formatAutoRefresh()
      }

      if (this.options.autoRefreshStatus) {
        attributes.class = this.constants.classes.buttonActive || 'active'
      }

      this.buttons = Object.assign(this.buttons || {}, {
        autoRefresh: {
          text: this.options.formatAutoRefresh(),
          icon: this.options.icons.autoRefresh,
          render: false,
          event: this.toggleAutoRefresh,
          attributes
        }
      })
    }

    super.initToolbar(...args)
  }

  toggleAutoRefresh () {
    if (this.options.autoRefresh) {
      const btn = this.$toolbar.querySelector(':scope > .columns [name="autoRefresh"]')

      if (this.options.autoRefreshStatus) {
        clearInterval(this.options.autoRefreshFunction)
        btn?.classList.remove(this.constants.classes.buttonActive)
      } else {
        this.setupRefreshInterval()
        btn?.classList.add(this.constants.classes.buttonActive)
      }
      this.options.autoRefreshStatus = !this.options.autoRefreshStatus
    }
  }

  destroy () {
    if (this.options.autoRefresh && this.options.autoRefreshStatus) {
      clearInterval(this.options.autoRefreshFunction)
    }

    super.destroy()
  }

  setupRefreshInterval () {
    this.options.autoRefreshFunction = setInterval(() => {
      if (!this.options.autoRefresh || !this.options.autoRefreshStatus) {
        return
      }
      this.refresh({ silent: this.options.autoRefreshSilent })
    }, this.options.autoRefreshInterval * 1000)
  }
}
