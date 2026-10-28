/**
 * Tests for the multiple-sort extension column title escaping.
 *
 * Covers the escape behavior required after storing raw titles for #8484:
 * the sort modal dropdown must escape column titles when
 * `escape` + `escapeTitle` are enabled, including titles updated
 * through `updateColumnTitle`.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'

// Extension sources reference a global `BootstrapTable` that rollup injects at
// build time, and each extension exports a subclass that replaces
// window.BootstrapTable when its UMD bundle loads. Mirror that here.
async function loadMultipleSort () {
  if (!globalThis.BootstrapTable) {
    const { default: Core } = await import('../../src/bootstrap-table.js')

    globalThis.BootstrapTable = Core
    window.BootstrapTable = Core
  }

  const { default: BootstrapTable } = await import('../../src/extensions/multiple-sort/bootstrap-table-multiple-sort.js')

  globalThis.BootstrapTable = BootstrapTable
  window.BootstrapTable = BootstrapTable

  expect(typeof BootstrapTable?.init).toBe('function')

  return { BootstrapTable }
}

describe('multiple-sort column title escaping (#8484)', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('escapes updated titles in the sort level dropdown options', async () => {
    const { BootstrapTable } = await loadMultipleSort()

    document.body.innerHTML = '<table id="ms-test"></table>'
    const table = document.getElementById('ms-test')

    BootstrapTable.init(table, {
      showMultiSort: true,
      escape: true,
      escapeTitle: true,
      columns: [{ field: 'a', title: 'A', sortable: true }],
      data: [{ a: 'x' }]
    })

    try {
      const instance = BootstrapTable.getInstance(table)

      instance.updateColumnTitle({ field: 'a', title: 'S <b>&</b> S' })
      instance.addLevel(1)

      const optionEl = [...instance.$sortModal.querySelectorAll('.multi-sort-name')].at(-1)
        .querySelector('option')

      expect(optionEl.textContent).toBe('S <b>&</b> S')
      expect(optionEl.innerHTML).toBe('S &lt;b&gt;&amp;&lt;/b&gt; S')
    } finally {
      if (BootstrapTable.getInstance(table)) {
        BootstrapTable.init(table, 'destroy')
      }
    }
  })

  it('keeps HTML titles in the sort level dropdown when escapeTitle is disabled', async () => {
    const { BootstrapTable } = await loadMultipleSort()

    document.body.innerHTML = '<table id="ms-test"></table>'
    const table = document.getElementById('ms-test')

    BootstrapTable.init(table, {
      showMultiSort: true,
      escape: true,
      escapeTitle: false,
      columns: [{ field: 'a', title: '<b>A</b>', sortable: true }],
      data: [{ a: 'x' }]
    })

    try {
      const instance = BootstrapTable.getInstance(table)

      instance.addLevel(1)

      const optionEl = [...instance.$sortModal.querySelectorAll('.multi-sort-name')].at(-1)
        .querySelector('option')

      expect(optionEl.querySelector('b')).not.toBeNull()
    } finally {
      if (BootstrapTable.getInstance(table)) {
        BootstrapTable.init(table, 'destroy')
      }
    }
  })

  // addLevel(1) on top of the level created during init must fill the
  // newly added row's select, not the first row's.
  it('fills the newly added sort level, not the first one', async () => {
    const { BootstrapTable } = await loadMultipleSort()

    document.body.innerHTML = '<table id="ms-test"></table>'
    const table = document.getElementById('ms-test')

    BootstrapTable.init(table, {
      showMultiSort: true,
      columns: [{ field: 'a', title: 'A', sortable: true }],
      data: [{ a: 'x' }]
    })

    try {
      const instance = BootstrapTable.getInstance(table)

      instance.addLevel(1)

      const [first, last] = instance.$sortModal.querySelectorAll('.multi-sort-name')

      expect(first.querySelectorAll('option')).toHaveLength(1)
      expect(last.querySelectorAll('option')).toHaveLength(1)
    } finally {
      if (BootstrapTable.getInstance(table)) {
        BootstrapTable.init(table, 'destroy')
      }
    }
  })
})
