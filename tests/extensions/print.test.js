/**
 * Tests for the print extension column title escaping.
 *
 * Covers the escape behavior required after storing raw titles for #8484:
 * the printed table header must escape column titles when
 * `escape` + `escapeTitle` are enabled, including titles updated
 * through `updateColumnTitle`.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'

// Extension sources reference a global `BootstrapTable` that rollup injects at
// build time, and each extension exports a subclass that replaces
// window.BootstrapTable when its UMD bundle loads. Mirror that here.
async function loadPrint () {
  if (!globalThis.BootstrapTable) {
    const { default: Core } = await import('../../src/bootstrap-table.js')

    globalThis.BootstrapTable = Core
    window.BootstrapTable = Core
  }

  const { default: BootstrapTable } = await import('../../src/extensions/print/bootstrap-table-print.js')

  globalThis.BootstrapTable = BootstrapTable
  window.BootstrapTable = BootstrapTable

  expect(typeof BootstrapTable?.init).toBe('function')

  return { BootstrapTable }
}

describe('print column title escaping (#8484)', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  function fakePrintWindow (writtenPages) {
    return {
      focus: () => {},
      addEventListener: () => {},
      print: () => {},
      document: {
        write: html => writtenPages.push(html),
        close: () => {},
        documentElement: document.createElement('html')
      }
    }
  }

  it('escapes updated titles in the printed table header', async () => {
    const { BootstrapTable } = await loadPrint()

    document.body.innerHTML = '<table id="print-test"></table>'
    const table = document.getElementById('print-test')

    BootstrapTable.init(table, {
      showPrint: true,
      escape: true,
      escapeTitle: true,
      columns: [{ field: 'a', title: 'A' }],
      data: [{ a: 'x' }]
    })

    const writtenPages = []
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(fakePrintWindow(writtenPages))

    try {
      const instance = BootstrapTable.getInstance(table)

      instance.updateColumnTitle({ field: 'a', title: 'P <b>&</b> P' })
      instance.doPrint(instance.options.data.slice(0))

      expect(writtenPages).toHaveLength(1)
      expect(writtenPages[0]).toContain('P &lt;b&gt;&amp;&lt;/b&gt; P')
      expect(writtenPages[0]).not.toContain('P <b>&</b> P')
    } finally {
      openSpy.mockRestore()
      if (BootstrapTable.getInstance(table)) {
        BootstrapTable.init(table, 'destroy')
      }
    }
  })

  it('keeps HTML titles in the printed header when escapeTitle is disabled', async () => {
    const { BootstrapTable } = await loadPrint()

    document.body.innerHTML = '<table id="print-test"></table>'
    const table = document.getElementById('print-test')

    BootstrapTable.init(table, {
      showPrint: true,
      escape: true,
      escapeTitle: false,
      columns: [{ field: 'a', title: '<b>A</b>' }],
      data: [{ a: 'x' }]
    })

    const writtenPages = []
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(fakePrintWindow(writtenPages))

    try {
      const instance = BootstrapTable.getInstance(table)

      instance.doPrint(instance.options.data.slice(0))

      expect(writtenPages).toHaveLength(1)
      expect(writtenPages[0]).toContain('><b>A</b></th>')
      expect(writtenPages[0]).not.toContain('&lt;b&gt;A&lt;/b&gt;')
    } finally {
      openSpy.mockRestore()
      if (BootstrapTable.getInstance(table)) {
        BootstrapTable.init(table, 'destroy')
      }
    }
  })
})
