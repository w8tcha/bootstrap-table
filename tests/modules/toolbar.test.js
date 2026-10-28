/**
 * Tests for the toolbar `columns` dropdown labels.
 *
 * Covers the escape behavior introduced for #8484:
 * the show-columns dropdown must apply the same
 * `escape` + `escapeTitle` logic as the header title,
 * while `switchableLabel` stays as user-defined HTML.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import HeaderModule from '@/modules/header.js'
import ToolbarModule from '@/modules/toolbar.js'

const columnsFixture = [
  { field: 'id', title: '<span>ID</span>', visible: true, switchable: true },
  { field: 'name', title: 'Name', visible: true, switchable: true, switchableLabel: '<b>Custom</b>' }
]

function createToolbarContext ({ escape, escapeTitle } = {}) {
  const appended = []
  // The fork's toolbar renders into a real element: capture the HTML string
  // appended to it (the jQuery version used `$toolbar.append(html)`).
  const $toolbar = document.createElement('div')
  const insertAdjacentHTML = $toolbar.insertAdjacentHTML.bind($toolbar)

  $toolbar.insertAdjacentHTML = vi.fn((position, html) => {
    appended.push(html)
    insertAdjacentHTML(position, html)
  })

  const ctx = {
    options: {
      buttonsAlign: 'right',
      toolbarAlign: 'left',
      searchAlign: 'right',
      iconSize: '',
      iconsPrefix: 'bi',
      icons: {},
      buttonsAttributeTitle: 'title',
      buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
      showButtonIcons: false,
      showButtonText: false,
      showPaginationSwitch: false,
      showRefresh: false,
      showToggle: false,
      showFullscreen: false,
      showColumns: true,
      showColumnsSearch: false,
      showColumnsToggleAll: false,
      cardView: false,
      pagination: false,
      escape,
      escapeTitle,
      minimumCountColumns: 1,
      search: false,
      searchSelector: undefined,
      searchTimeOut: 500,
      searchOnEnterKey: false,
      formatPaginationSwitch: () => 'pagination',
      formatPaginationSwitchUp: () => 'up',
      formatPaginationSwitchDown: () => 'down',
      formatRefresh: () => 'refresh',
      formatToggleOn: () => 'on',
      formatToggleOff: () => 'off',
      formatFullscreen: () => 'fullscreen',
      formatColumns: () => 'columns',
      formatColumnsToggleAll: () => 'all',
      formatSearch: () => 'search',
      formatClearSearch: () => 'clear'
    },
    columns: columnsFixture.map(column => ({ ...column })),
    isSelectionColumn: () => false,
    getVisibleColumns: () => [],
    constants: {
      classes: {
        buttonsGroup: 'btn-group',
        buttonsDropdown: 'dropdown-menu',
        pull: 'float-end',
        input: 'form-control',
        inputPrefix: 'form-control-'
      },
      buttonsClass: 'btn btn-secondary',
      dataToggle: 'data-bs-toggle',
      html: {
        icon: '<i class="%s %s"></i>',
        toolbarDropdown: ['<div class="dropdown-menu">', '</div>'],
        toolbarDropdownItem: '<li>%s</li>',
        toolbarDropdownSeparator: '<li class="dropdown-separator"></li>',
        dropdownCaret: '<span class="caret"></span>',
        searchButton: '<button>%s%s%s</button>',
        searchClearButton: '<button>%s%s%s</button>',
        inputGroup: '<div class="input-group">%s%s</div>'
      }
    },
    buttons: {},
    showToolbar: false,
    showSearchClearButton: false,
    $toolbar,
    togglePagination: vi.fn(),
    refresh: vi.fn(),
    toggleView: vi.fn(),
    toggleFullscreen: vi.fn(),
    trigger: vi.fn(),
    _toggleColumns: vi.fn(),
    _toggleAllColumns: vi.fn()
  }

  return { ctx, appended }
}

describe('ToolbarModule columns dropdown labels (#8484)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  function renderDropdown (options) {
    const { ctx, appended } = createToolbarContext(options)

    Object.assign(ctx, ToolbarModule)

    ctx.initToolbar()
    expect(appended).toHaveLength(1)

    return appended[0]
  }

  it('escapes HTML titles when escape and escapeTitle are enabled', () => {
    const html = renderDropdown({ escape: true, escapeTitle: true })

    expect(html).toContain('<span>&lt;span&gt;ID&lt;/span&gt;</span>')
    expect(html).not.toContain('<span><span>ID</span></span>')
    expect(html).toContain('data-field="id"')
    expect(html).toContain('data-field="name"')
  })

  it('keeps HTML titles when escape is disabled', () => {
    const html = renderDropdown({ escape: false, escapeTitle: true })

    expect(html).toContain('<span><span>ID</span></span>')
    expect(html).not.toContain('&lt;span&gt;ID&lt;/span&gt;')
  })

  it('keeps HTML titles when escapeTitle is disabled', () => {
    const html = renderDropdown({ escape: true, escapeTitle: false })

    expect(html).toContain('<span><span>ID</span></span>')
    expect(html).not.toContain('&lt;span&gt;ID&lt;/span&gt;')
  })

  it('never escapes switchableLabel even with escape enabled', () => {
    const html = renderDropdown({ escape: true, escapeTitle: true })

    expect(html).toContain('<span><b>Custom</b></span>')
    expect(html).not.toContain('&lt;b&gt;Custom&lt;/b&gt;')
  })

  it('does not double-escape an updated title after a toolbar rebuild', () => {
    const { ctx, appended } = createToolbarContext({ escape: true, escapeTitle: true })

    Object.assign(ctx, ToolbarModule, HeaderModule)

    // Real header DOM for the update path: `th[data-field="id"] .th-inner`.
    // Its innerHTML setter is spied so the exact markup written is asserted
    // (reading innerHTML back would re-serialize `&` and hide a missing escape).
    const $header = document.createElement('thead')

    $header.innerHTML = '<tr><th data-field="id"><div class="th-inner"></div></th></tr>'
    const innerEl = $header.querySelector('.th-inner')
    const innerHtml = vi.fn()

    Object.defineProperty(innerEl, 'innerHTML', { configurable: true, set: innerHtml })
    ctx.$header = $header
    ctx.fieldsColumnsIndex = { id: 0 }
    ctx.resetView = vi.fn()

    ctx.updateColumnTitle({ field: 'id', title: 'A & B' })

    // The stored title stays raw ...
    expect(ctx.columns[0].title).toBe('A & B')
    // ... while the header cell is escaped at the rendering boundary
    expect(innerHtml).toHaveBeenCalledWith('A &amp; B')

    // Rebuilding the toolbar (e.g. via updateFormatText) escapes the label exactly once
    appended.length = 0
    ctx.initToolbar()
    expect(appended[0]).toContain('A &amp; B')
    expect(appended[0]).not.toContain('&amp;amp;')
  })
})
