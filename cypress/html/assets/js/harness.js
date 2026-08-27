// Minimal fork-owned test harness for Cypress fixtures.
//
// Each fixture file is a small HTML fragment:
//   <script>init({ title, desc, links, scripts })</script>
//   <template>...markup...</template>
//   <script>function mounted () { ... }</script>
//   <style>...</style>   (optional)
//
// This loads the declared links/scripts from this repo's own /dist build
// (or passes through absolute CDN URLs unchanged), inserts the template
// markup, then runs the fragment's own script and calls mounted().
(function () {
  function getTheme () {
    const m = location.pathname.match(/for-test-([a-z0-9]+)\.html$/)

    return m ? m[1] : ''
  }

  // Mirrors bootstrap-table-examples' assets/js/template.js _themeUpdate:
  // some themes need their own bootstrap-table-<theme> JS/CSS added, and a
  // handful of Bootstrap5-style classes in the fragment markup swapped for
  // the older/other framework's equivalent.
  function applyThemeSubstitutions (rawHtml, theme) {
    if (theme === 'bootstrap3') {
      return rawHtml.replace(/btn-secondary/g, 'btn-default')
    }
    if (theme === 'semantic') {
      return rawHtml
        .replace(/btn btn-secondary/g, 'ui button')
        .replace(/btn btn-danger/g, 'ui red button')
        .replace(/select class="form-control"/g, 'select class="ui dropdown"')
        .replace(/'bootstrap-table\.min\.js'/, '\'bootstrap-table.min.js\', \'themes/semantic/bootstrap-table-semantic.min.js\'')
        .replace(/'bootstrap-table\.min\.css'/, '\'themes/semantic/bootstrap-table-semantic.min.css\'')
    }
    if (theme === 'bulma') {
      return rawHtml
        .replace(/btn btn-secondary/g, 'button')
        .replace(/btn btn-danger/g, 'button is-danger')
        .replace(/'bootstrap-table\.min\.js'/, '\'bootstrap-table.min.js\', \'themes/bulma/bootstrap-table-bulma.min.js\'')
        .replace(/'bootstrap-table\.min\.css'/, '\'themes/bulma/bootstrap-table-bulma.min.css\'')
    }
    if (theme === 'materialize') {
      return rawHtml
        .replace(/class="select"/g, 'class="input-field"')
        .replace(/btn btn-secondary/g, 'waves-effect waves-light btn')
        .replace(/btn btn-danger/g, 'waves-effect waves-light btn')
        .replace('<i class="fa fa-heart"></i>', '<i class="material-icons">star</i>')
        .replace('<i class="fa fa-trash"></i>', '<i class="material-icons">clear</i>')
        .replace(/'bootstrap-table\.min\.js'/, '\'bootstrap-table.min.js\', \'themes/materialize/bootstrap-table-materialize.min.js\'')
        .replace(/'bootstrap-table\.min\.css'/, '\'themes/materialize/bootstrap-table-materialize.min.css\'')
    }
    if (theme === 'foundation') {
      return rawHtml
        .replace(/btn btn-secondary/g, 'button')
        .replace(/btn btn-danger/g, 'alert button')
        .replace(/'bootstrap-table\.min\.js'/, '\'bootstrap-table.min.js\', \'themes/foundation/bootstrap-table-foundation.min.js\'')
        .replace(/'bootstrap-table\.min\.css'/, '\'themes/foundation/bootstrap-table-foundation.min.css\'')
    }
    return rawHtml
  }

  // Bare local names resolve against this repo's own build output; absolute
  // http(s) URLs (jQuery, jquery-ui, dragtable, tableExport CDN links, ...)
  // pass through unchanged.
  function resolveAsset (name) {
    if (/^https?:\/\//.test(name)) {
      return name
    }
    return `/dist/${name.replace(/\.min\.(js|css)$/, '.$1')}`
  }

  function loadLink (href) {
    return new Promise(resolve => {
      const link = document.createElement('link')

      link.rel = 'stylesheet'
      link.href = resolveAsset(href)
      link.onload = resolve
      link.onerror = resolve
      document.head.appendChild(link)
    })
  }

  function loadScript (src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.src = resolveAsset(src)
      script.onload = resolve
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
      document.head.appendChild(script)
    })
  }

  async function loadSeries (items, loader) {
    for (const item of items || []) {
      await loader(item)
    }
  }

  function extractConfig (doc) {
    for (const script of doc.querySelectorAll('script')) {
      if (/^\s*init\s*\(/.test(script.textContent)) {
        let config

        // eslint-disable-next-line no-new-func
        new Function('init', script.textContent)(cfg => {
          config = cfg
        })
        script.remove()
        return config || {}
      }
    }
    return {}
  }

  function render (rawHtml) {
    const doc = new DOMParser().parseFromString(rawHtml, 'text/html')
    const config = extractConfig(doc)
    const template = doc.querySelector('template')
    const style = doc.querySelector('style')
    const bodyScripts = [...doc.querySelectorAll('script')]

    loadSeries(config.links, loadLink)
      .then(() => loadSeries(config.scripts, loadScript))
      .then(() => {
        const container = document.getElementById('example')

        container.innerHTML = template ? template.innerHTML : ''

        if (style) {
          const styleEl = document.createElement('style')

          styleEl.textContent = style.textContent
          document.head.appendChild(styleEl)
        }

        for (const script of bodyScripts) {
          const el = document.createElement('script')

          el.textContent = script.textContent
          document.body.appendChild(el)
        }

        if (typeof window.mounted === 'function') {
          window.mounted()
        }

        // bootstrap-table.js's own DOMContentLoaded auto-init listener is
        // registered when its <script> loads, which is well after this
        // page's real DOMContentLoaded already fired (the fixture markup
        // itself is inserted asynchronously, above) - so it never runs.
        // Do the same [data-toggle="table"] auto-init explicitly here.
        // Scoped to the whole document, not just `container`: some widget
        // libraries (e.g. Foundation's Reveal) relocate elements to
        // document.body during their own construction in mounted(), before
        // this runs.
        if (window.BootstrapTable) {
          document.querySelectorAll('[data-toggle="table"]').forEach(el => {
            if (!window.BootstrapTable.getInstance(el)) {
              window.BootstrapTable.init(el)
            }
          })
        }
      })
      .catch(err => {
        document.getElementById('example').textContent = `Harness error: ${err.message}`
      })
  }

  const theme = getTheme()
  const url = new URLSearchParams(location.search).get('url')

  if (!url) {
    document.getElementById('example').textContent = 'Missing url query param'
    return
  }

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText} for ${url}`)
      }
      return res.text()
    })
    .then(rawHtml => render(applyThemeSubstitutions(rawHtml, theme)))
    .catch(err => {
      document.getElementById('example').textContent = `Failed to load fixture: ${err.message}`
    })
})()
