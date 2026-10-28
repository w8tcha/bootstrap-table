import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('filter-control utils', () => {
  describe('setCaretPosition', () => {
    let originalBootstrapTable
    let setCaretPosition

    beforeEach(async () => {
      vi.resetModules()
      // The extension reads a global `BootstrapTable` (injected by rollup at
      // build time) when the module is evaluated; a minimal stub is enough here.
      originalBootstrapTable = globalThis.BootstrapTable
      globalThis.BootstrapTable = {
        utils: {}
      }
      const utils = await import('@/extensions/filter-control/utils.js')

      setCaretPosition = utils.setCaretPosition
    })

    afterEach(() => {
      globalThis.BootstrapTable = originalBootstrapTable
      vi.restoreAllMocks()
    })

    it('sets the caret for text-like filter inputs', () => {
      const input = document.createElement('input')
      const setSelectionRange = vi.fn()

      input.type = 'search'
      input.setSelectionRange = setSelectionRange

      setCaretPosition(input, 3)

      expect(setSelectionRange).toHaveBeenCalledWith(3, 3)
    })

    it('skips unsupported input types without logging an error', () => {
      const input = document.createElement('input')
      const setSelectionRange = vi.fn(() => {
        throw new Error('unsupported input type')
      })
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      input.type = 'date'
      input.setSelectionRange = setSelectionRange

      setCaretPosition(input, -1)

      expect(setSelectionRange).not.toHaveBeenCalled()
      expect(consoleError).not.toHaveBeenCalled()
    })

    it('skips select filter controls even if a selection API is present', () => {
      const select = document.createElement('select')
      const setSelectionRange = vi.fn()
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      select.setSelectionRange = setSelectionRange

      setCaretPosition(select, -1)

      expect(setSelectionRange).not.toHaveBeenCalled()
      expect(consoleError).not.toHaveBeenCalled()
    })
  })
})
