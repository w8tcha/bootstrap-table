/**
 * Framework detection and icon utilities.
 *
 * This module provides utility functions for detecting the Bootstrap framework version
 * and managing icon prefixes and mappings for different CSS frameworks.
 *
 * @module utils/framework
 */
import DOMHelper from '../helpers/dom.js'

/**
 * Returns the prefix for the icons based on the theme.
 *
 * @param {string} theme - The theme name (bootstrap3, bootstrap4, bootstrap5, bootstrap-table, bulma, foundation, materialize, semantic).
 * @returns {string} The icons prefix.
 */
export function getIconsPrefix (theme) {
  return {
    bootstrap3: 'glyphicon',
    bootstrap4: 'fa',
    bootstrap5: 'bi',
    'bootstrap-table': 'icon',
    bulma: 'fa',
    foundation: 'fa',
    materialize: 'material-icons',
    semantic: 'fa'
  }[theme] || 'fa'
}

/**
 * Gets the icons for a given prefix.
 *
 * @param {Object.<string, Object>} icons - The icons object.
 * @param {string} prefix - The prefix. For example, 'fa', 'bi', etc.
 * @return {Object} The icons object for the given prefix.
 */
export function getIcons (icons, prefix) {
  return icons[prefix] || {}
}

/**
 * Assigns new icons to icons object.
 *
 * @param {Object.<string, Object>} icons - The icons object.
 * @param {string} icon - The icon name. For example, 'search', 'refresh', etc.
 * @param {Object.<string, string>} values - The values object.
 */
export function assignIcons (icons, icon, values) {
  for (const key of Object.keys(icons)) {
    icons[key][icon] = values[key]
  }
}

/**
 * Gets the Bootstrap version.
 *
 * Outside a browser (no `window` at all, e.g. SSR) this defaults to 5.
 * In a browser, it returns the detected version (5 via window.bootstrap,
 * or 3/4 via jQuery's dropdown plugin - Bootstrap 3 has no window.bootstrap
 * namespace, since it's jQuery-plugin-only), or `undefined` when neither
 * signal is present (e.g. a non-Bootstrap theme like bulma or semantic).
 *
 * @returns {number|undefined} The Bootstrap version number (3, 4, or 5).
 */
export function getBootstrapVersion () {
  if (typeof window !== 'undefined' && window.bootstrap?.Tooltip?.VERSION) {
    return parseInt(window.bootstrap.Tooltip.VERSION, 10)
  }

  const jqDropdownVersion = globalThis.$?.fn?.dropdown?.Constructor?.VERSION

  if (jqDropdownVersion) {
    return parseInt(jqDropdownVersion, 10)
  }

  // No signal at all: outside a browser (e.g. SSR) default to 5, but inside
  // a real browser with neither window.bootstrap nor jQuery's dropdown
  // plugin present, this genuinely is a non-Bootstrap theme (bulma, semantic).
  if (typeof window === 'undefined' && typeof globalThis.$ === 'undefined') {
    return 5
  }

  return undefined
}

/**
 * Gets the search input element.
 *
 * @param {Object} that - The Bootstrap Table instance.
 * @returns {HTMLElement|null} The search input element, or null if not found.
 */
export function getSearchInput (that) {
  if (typeof that.options.searchSelector === 'string') {
    return DOMHelper.$(that.options.searchSelector)
  }

  if (!that.$toolbar || (Array.isArray(that.$toolbar) && that.$toolbar.length === 0)) {
    return null
  }

  const toolbarResult = DOMHelper.$(that.$toolbar)
  const toolbarEl = Array.isArray(toolbarResult) ? toolbarResult[0] : toolbarResult

  if (!toolbarEl) {
    return null
  }

  const matches = DOMHelper.find(toolbarEl, '.search input')

  return matches[0] ?? null
}
