import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import BodyModule from '@/modules/body.js'
import HeaderModule from '@/modules/header.js'

// jsdom reports offsetWidth/offsetHeight as 0 for every element (no layout
// engine), which matches this suite's "hidden" default; tests that need a
// "visible" element override both via defineProperty.
function setOffsetSize (el, width, height) {
  Object.defineProperty(el, 'offsetWidth', { value: width, configurable: true })
  Object.defineProperty(el, 'offsetHeight', { value: height, configurable: true })
}

function createBodyMockContext (overrides = {}) {
  const timeoutIds = {}
  const tableBody = document.createElement('div')

  Object.defineProperty(tableBody, 'scrollWidth', { value: 100, configurable: true })
  Object.defineProperty(tableBody, 'clientWidth', { value: 100, configurable: true })

  return {
    options: {
      height: 500,
      cardView: false,
      showHeader: true,
      showFooter: false
    },
    $el: document.createElement('table'),
    $tableContainer: document.createElement('div'),
    $tableHeader: document.createElement('div'),
    $tableBody: tableBody,
    $header: document.createElement('div'),
    $tableFooter: document.createElement('div'),
    $container: document.createElement('div'),
    $toolbar: document.createElement('div'),
    $pagination: [],
    $tableBorder: null,
    _timeoutId: timeoutIds,
    _setDelayTimeout: vi.fn((type, callback, delay) => {
      clearTimeout(timeoutIds[type])
      timeoutIds[type] = setTimeout(callback, delay)
    }),
    resetHeader: vi.fn(),
    resetCaret: vi.fn(),
    fitFooter: vi.fn(),
    trigger: vi.fn(),
    hasScrollBar: false,
    ...overrides
  }
}

describe('BodyModule', () => {
  describe('resetView hidden detection', () => {
    let ctx

    beforeEach(() => {
      vi.useFakeTimers()
      ctx = createBodyMockContext()
      Object.assign(ctx, BodyModule)
    })

    afterEach(() => {
      vi.clearAllTimers()
      vi.useRealTimers()
      vi.restoreAllMocks()
    })

    it('should schedule delayed resetView when table is hidden', () => {
      ctx.resetView()

      expect(ctx._setDelayTimeout).toHaveBeenCalledWith(
        'resetView', expect.any(Function), 100
      )
      expect(ctx.trigger).not.toHaveBeenCalledWith('reset-view', expect.anything())
    })

    it('should not schedule delayed resetView when table is visible', () => {
      setOffsetSize(ctx.$el, 800, 50)

      ctx.resetView()

      const resetViewCalls = ctx._setDelayTimeout.mock.calls.filter(
        call => call[0] === 'resetView'
      )

      expect(resetViewCalls).toHaveLength(0)
    })

    it('should debounce multiple resetView calls when hidden', () => {
      ctx.resetView()
      ctx.resetView()
      ctx.resetView()

      expect(ctx._setDelayTimeout).toHaveBeenCalledTimes(3)
      const allCalls = ctx._setDelayTimeout.mock.calls
      const resetViewCalls = allCalls.filter(call => call[0] === 'resetView')

      expect(resetViewCalls).toHaveLength(3)
    })

    it('should not schedule delayed resetView when height is not set', () => {
      ctx.options.height = undefined

      ctx.resetView()

      const resetViewCalls = ctx._setDelayTimeout.mock.calls.filter(
        call => call[0] === 'resetView'
      )

      expect(resetViewCalls).toHaveLength(0)
    })

    it('should not schedule timeout when ResizeObserver is active', () => {
      ctx._resizeObserver = { disconnect: vi.fn(), observe: vi.fn() }

      ctx.resetView()

      const resetViewCalls = ctx._setDelayTimeout.mock.calls.filter(
        call => call[0] === 'resetView'
      )

      expect(resetViewCalls).toHaveLength(0)
    })
  })

  describe('scrollTo with rows unit', () => {
    let ctx
    let scrollTop

    // Real <tr> rows in a <tbody>; offsetHeight is faked since happy-dom has
    // no layout engine (the jQuery version stubbed `$(el).outerHeight()`).
    function setBodyRows (rows) {
      const tbody = document.createElement('tbody')

      for (const { className, height } of rows) {
        const tr = document.createElement('tr')

        if (className) {
          tr.className = className
        }
        Object.defineProperty(tr, 'offsetHeight', { value: height, configurable: true })
        tbody.appendChild(tr)
      }
      ctx.$body = tbody
    }

    function renderedRows (count, height = 20) {
      return Array.from({ length: count }, () => ({ className: '', height }))
    }

    beforeEach(() => {
      ctx = createBodyMockContext()
      Object.assign(ctx, BodyModule)
      // Spy on the `scrollTop` assignment (jQuery: `$tableBody.scrollTop(value)`)
      scrollTop = vi.fn()
      Object.defineProperty(ctx.$tableBody, 'scrollTop', { configurable: true, set: scrollTop })
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('should sum the heights of the rows above the target row', () => {
      setBodyRows([...renderedRows(2, 20), ...renderedRows(3, 30)])

      ctx.scrollTo({ unit: 'rows', value: 4 })

      expect(scrollTop).toHaveBeenCalledWith(100)
    })

    it('should not count the bottom spacer of the virtual scroll', () => {
      ctx.options.virtualScroll = true
      ctx.virtualScroll = { itemHeight: 20, startIndex: 0 }
      setBodyRows([...renderedRows(200), { className: 'virtual-scroll-bottom', height: 9800 * 20 }])

      ctx.scrollTo({ unit: 'rows', value: 150 })
      expect(scrollTop).toHaveBeenLastCalledWith(150 * 20)

      ctx.scrollTo({ unit: 'rows', value: 225 })
      expect(scrollTop).toHaveBeenLastCalledWith(225 * 20)
    })

    it('should count the rows replaced by the top spacer of the virtual scroll', () => {
      ctx.options.virtualScroll = true
      ctx.virtualScroll = { itemHeight: 20, startIndex: 1050 }
      setBodyRows([
        { className: 'virtual-scroll-top', height: 1050 * 20 },
        ...renderedRows(200),
        { className: 'virtual-scroll-bottom', height: 8750 * 20 }
      ])

      ctx.scrollTo({ unit: 'rows', value: 100 })
      expect(scrollTop).toHaveBeenLastCalledWith(100 * 20)

      ctx.scrollTo({ unit: 'rows', value: 1100 })
      expect(scrollTop).toHaveBeenLastCalledWith(1100 * 20)

      ctx.scrollTo({ unit: 'rows', value: 5000 })
      expect(scrollTop).toHaveBeenLastCalledWith(5000 * 20)
    })

    it('should use the rendered rows when the virtual scroll has no spacers', () => {
      ctx.options.virtualScroll = true
      ctx.virtualScroll = { itemHeight: 20, startIndex: undefined }
      setBodyRows([...renderedRows(10, 20), ...renderedRows(10, 40)])

      ctx.scrollTo({ unit: 'rows', value: 15 })

      expect(scrollTop).toHaveBeenCalledWith(10 * 20 + 5 * 40)
    })
  })

  describe('card view title escaping (#8484)', () => {
    function createRowContext ({ escape = true, escapeTitle = true } = {}) {
      const $header = document.createElement('thead')

      $header.innerHTML = '<tr><th data-field="id"><div class="th-inner">ID</div></th></tr>'

      const ctx = createBodyMockContext({
        options: {
          cardView: true,
          showHeader: true,
          escape,
          escapeTitle,
          undefinedText: '-'
        },
        hiddenRows: [],
        searchText: '',
        columns: [{ field: 'id', title: 'ID', visible: true, cardVisible: true, switchable: true }],
        header: {
          fields: ['id'],
          classes: [],
          styles: [],
          cellStyles: [],
          formatters: []
        },
        fieldsColumnsIndex: { id: 0 },
        $header,
        resetView: vi.fn()
      })

      Object.assign(ctx, BodyModule, HeaderModule)
      return ctx
    }

    function renderCardViewRow (ctx) {
      const tr = ctx.initRow({ id: 1 }, 0, [{ id: 1 }], document.createDocumentFragment())

      return tr.querySelector('.card-view-title')
    }

    it('should escape an updated title at the card view rendering boundary', () => {
      const ctx = createRowContext()

      ctx.updateColumnTitle({ field: 'id', title: 'A <b>&</b> B' })

      // the stored title stays raw
      expect(ctx.columns[0].title).toBe('A <b>&</b> B')

      const titleEl = renderCardViewRow(ctx)

      // the card view title is escaped exactly once, no HTML is rendered
      expect(titleEl.innerHTML).toBe('A &lt;b&gt;&amp;&lt;/b&gt; B')
      expect(titleEl.querySelector('b')).toBeNull()
    })

    it('should keep the card view title as HTML when escapeTitle is disabled', () => {
      const ctx = createRowContext({ escape: true, escapeTitle: false })

      ctx.updateColumnTitle({ field: 'id', title: '<b>ID</b>' })

      const titleEl = renderCardViewRow(ctx)

      expect(titleEl.querySelector('b')).not.toBeNull()
    })
  })
})
