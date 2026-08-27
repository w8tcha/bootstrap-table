import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import BodyModule from '@/modules/body.js'

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
})
