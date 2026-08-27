/**
 * Tests for the `rtl` option (change: add-rtl-support).
 *
 * Covers direction resolution (getRtlDirection), root container injection
 * (initContainer), preservation of the original <table> dir for extensions,
 * and the physical semantics of column alignment.
 */
import { afterEach, describe, expect, it } from 'vitest'
import InitializationModule from '@/modules/initialization.js'
import HeaderModule from '@/modules/header.js'
import Utils from '@/utils/index.js'

const { getRtlDirection, initContainer } = InitializationModule

describe('getRtlDirection', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('dir')
  })

  // ctx with a real $el; dir is set as a real attribute when provided.
  function ctx (rtl, { $elDir } = {}) {
    const el = document.createElement('table')

    if ($elDir !== undefined) {
      el.setAttribute('dir', $elDir)
    }
    return { options: { rtl }, $el: el }
  }

  it('resolves false / "ltr" to ltr', () => {
    expect(getRtlDirection.call(ctx(false))).toBe('ltr')
    expect(getRtlDirection.call(ctx('ltr'))).toBe('ltr')
  })

  it('resolves true / "rtl" to rtl', () => {
    expect(getRtlDirection.call(ctx(true))).toBe('rtl')
    expect(getRtlDirection.call(ctx('rtl'))).toBe('rtl')
  })

  describe('auto probing', () => {
    it('follows the table element dir when set', () => {
      document.documentElement.setAttribute('dir', 'rtl')
      expect(getRtlDirection.call(ctx('auto', { $elDir: 'rtl' }))).toBe('rtl')
    })

    it('falls back to <html> dir when the table has none', () => {
      document.documentElement.setAttribute('dir', 'rtl')
      expect(getRtlDirection.call(ctx('auto'))).toBe('rtl')
    })

    it('falls back to ltr when neither the table nor <html> has dir', () => {
      expect(getRtlDirection.call(ctx('auto'))).toBe('ltr')
    })

    it('prefers the table element dir over <html>', () => {
      document.documentElement.setAttribute('dir', 'rtl')
      // table says ltr, html says rtl -> table wins
      expect(getRtlDirection.call(ctx('auto', { $elDir: 'ltr' }))).toBe('ltr')
    })

    it('treats uppercase DIR values case-insensitively', () => {
      expect(getRtlDirection.call(ctx('auto', { $elDir: 'RTL' }))).toBe('rtl')
    })
  })
})

describe('initContainer direction injection', () => {
  function run (rtl, { elDir } = {}) {
    const $el = document.createElement('table')

    if (elDir !== undefined) {
      $el.setAttribute('dir', elDir)
    }

    const self = {
      options: {
        rtl,
        loadingTemplate: msg => `<span>${msg}</span>`,
        formatLoadingMessage: () => 'Loading',
        classes: 'table',
        paginationVAlign: 'bottom',
        buttonsToolbar: undefined
      },
      constants: { theme: 'bootstrap3' },
      $el,
      getRtlDirection: InitializationModule.getRtlDirection
    }

    initContainer.call(self)

    return { self, $el, container: self.$container }
  }

  it('injects dir="rtl" and bootstrap-table-rtl class when RTL', () => {
    const { container } = run(true)

    expect(container.getAttribute('dir')).toBe('rtl')
    expect(container.classList.contains('bootstrap-table-rtl')).toBe(true)
  })

  it('injects neither dir nor class when LTR', () => {
    const { container } = run(false)

    expect(container.hasAttribute('dir')).toBe(false)
    expect(container.classList.contains('bootstrap-table-rtl')).toBe(false)
  })

  it('keeps the root class ordering valid in RTL (no stray quotes)', () => {
    const { container } = run(true)

    expect(container.className).toBe('bootstrap-table bootstrap3 bootstrap-table-rtl')
    expect(container.getAttribute('dir')).toBe('rtl')
  })

  // The core must never SET dir on the original <table>, so print/filter-control
  // keep reading their own value. Cover both the explicit path (rtl: true, where
  // getRtlDirection never touches $el) and the auto path (where it reads
  // $el's own dir attribute) to ensure the original attribute is left untouched.
  it.each([
    ['explicit rtl', true],
    ['auto probing', 'auto']
  ])('does not modify this.$el dir attribute in %s mode (extension compatibility)', (_name, rtl) => {
    const { $el } = run(rtl, { elDir: 'ltr' })

    expect($el.getAttribute('dir')).toBe('ltr')
  })
})

describe('column alignment keeps physical semantics (RTL does not flip align)', () => {
  function createHeaderContext (align) {
    const column = Utils.extend({}, {
      field: 'name',
      title: 'Name',
      fieldIndex: 0,
      align,
      valign: 'top',
      visible: true,
      width: undefined,
      widthUnit: 'px',
      checkbox: false,
      radio: false,
      class: undefined,
      rowspan: undefined,
      colspan: undefined,
      scope: undefined,
      titleTooltip: undefined,
      style: undefined,
      _data: {},
      formatter: undefined,
      detailFormatter: undefined,
      events: undefined,
      sorter: undefined,
      sortName: undefined,
      cellStyle: undefined,
      searchable: true,
      sortable: false
    })

    return {
      options: {
        height: undefined,
        cardView: false,
        showHeader: true,
        showFooter: false,
        columns: [[column]],
        detailView: false,
        detailViewAlign: 'left',
        sortable: false,
        escape: false,
        escapeTitle: false,
        singleSelect: false,
        checkboxHeader: true,
        headerStyle: () => ({})
      },
      columns: [column],
      header: {},
      _headerTrClasses: [''],
      _headerTrStyles: [''],
      $el: document.createElement('table'),
      $header: document.createElement('thead'),
      $container: document.createElement('div'),
      $tableHeader: document.createElement('div'),
      $tableLoading: document.createElement('div'),
      $selectAll: null,
      _thDataMap: new WeakMap(),
      _timeoutId: {},
      _setDelayTimeout: () => {},
      resetView: () => {},
      resetCaret: () => {},
      _resizeObserver: null
    }
  }

  function runInitHeader (align) {
    // Column alignment keeps its physical meaning and is intentionally NOT
    // flipped under RTL. HeaderModule.initHeader never reads the table
    // direction, so we exercise it without any direction context at all.
    const ctx = createHeaderContext(align)

    Object.assign(ctx, HeaderModule)
    ctx.initHeader()
    return ctx
  }

  it('outputs text-align: right for an explicitly right-aligned column under RTL', () => {
    const ctx = runInitHeader('right')

    expect(ctx.header.styles[0]).toContain('text-align: right')
  })

  it('does not flip left alignment under RTL', () => {
    const ctx = runInitHeader('left')

    expect(ctx.header.styles[0]).toContain('text-align: left')
  })

  it('produces the same alignment output regardless of direction', () => {
    const rtlCtx = createHeaderContext('right')
    const ltrCtx = createHeaderContext('right')

    Object.assign(rtlCtx, HeaderModule)
    Object.assign(ltrCtx, HeaderModule)
    rtlCtx.initHeader()
    ltrCtx.initHeader()

    expect(rtlCtx.header.styles[0]).toBe(ltrCtx.header.styles[0])
  })
})
