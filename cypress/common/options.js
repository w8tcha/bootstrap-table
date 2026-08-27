module.exports = (theme = '') => {
  const baseUrl = require('./utils')(theme, 'options')

  // A small number of option pages only make sense for the themes whose
  // native class conventions they exercise; every other test runs for
  // every theme unconditionally.
  const THEME_RESTRICTIONS = {
    'Buttons Class': ['', 'bootstrap3', 'bootstrap4']
  }

  const testIf = (label, fn) => {
    const allowedThemes = THEME_RESTRICTIONS[label]
    const shouldTest = !allowedThemes || allowedThemes.includes(theme)
    const title = `Test ${label}`

    if (shouldTest) {
      it(title, fn)
    } else {
      it.skip(title, fn)
    }
  }

  describe('Options Test', () => {
    testIf('AJAX', () => {
      cy.visit(`${baseUrl}table-ajax.html`)
        .get('.fixed-table-pagination >.pagination-detail').should('have.length', 1)
        .get('.fixed-table-pagination > .pagination').should('have.length', 1)
        .get('span.pagination-info').should('contain', '800')
    })

    testIf('AJAX Options', () => {
      cy.intercept('GET', '**/data1.json*').as('ajax')
        .visit(`${baseUrl}ajax-options.html`)
        .wait('@ajax')
        .should(({ request }) => {
          expect(request.headers).to.have.property('custom-auth-token')
            .and.eq('custom-auth-token')
        })
    })

    testIf('Basic Columns', () => {
      cy.visit(`${baseUrl}basic-columns.html`)
        .get('.fixed-table-toolbar .columns').should('exist')
    })

    testIf('Buttons Custom', () => {
      const stub = cy.stub()

      cy.on('window:alert', stub)

      cy.visit(`${baseUrl}buttons.html`)
        .get('.fixed-table-toolbar .columns').should('exist')
        .get('.fixed-table-toolbar button[name="btnUsersAdd"]').should('exist')
        .get('.fixed-table-toolbar button[name="btnAdd"]').should('exist')
        .get('.fixed-table-toolbar button[name="btnDom"]').should('exist')
        .get('.fixed-table-toolbar button[name="btnDom"]').click()
        .wrap(stub).should('have.been.calledWith', 'DOM Button clicked!')
    })

    testIf('Buttons Align', () => {
      cy.visit(`${baseUrl}buttons-align.html`)
        .get('.fixed-table-toolbar .columns.columns-left').should('exist')
    })

    testIf('Buttons Attribute Title', () => {
      cy.visit(`${baseUrl}buttons-attribute-title.html`)
        .get('.fixed-table-toolbar .columns button[data-hint]').should('exist')
    })

    testIf('Buttons Class', () => {
      cy.visit(`${baseUrl}buttons-class.html`)
        .get('.fixed-table-toolbar .columns button.btn-primary').should('exist')
    })

    testIf('Buttons Order', () => {
      cy.visit(`${baseUrl}buttons-order.html`)

      cy.get('#sortable li')
        .then($lis => {
          const sortableItems = $lis.map((_, el) => el.getAttribute('data-value')).get()

          return sortableItems
        })
        .then(sortableItems => {
          cy.get('.fixed-table-toolbar .columns button[name]').then($buttons => {
            const buttonNames = $buttons.map((_, el) => el.getAttribute('name')).get()

            // Add 'columns' to represent the columns toggle button, which is part of
            // the sortable list but is not included in the collected button name attributes.
            buttonNames.push('columns')

            expect(buttonNames).to.deep.equal(sortableItems)
          })
        })
    })

    testIf('Buttons Prefix', () => {
      cy.visit(`${baseUrl}buttons-prefix.html`)
        .get('.fixed-table-toolbar .columns button.btn-sm').should('exist')
    })

    testIf('Buttons Toolbar', () => {
      cy.visit(`${baseUrl}buttons-toolbar.html`)
        .get('.buttons-toolbar .columns').should('exist')
    })

    testIf('Card View', () => {
      cy.visit(`${baseUrl}card-view.html`)
        .get('.fixed-table-body .card-views').should('exist')
        .get('.fixed-table-body .card-view').should('have.length.greaterThan', 0)
    })

    testIf('Checkbox Header', () => {
      cy.visit(`${baseUrl}checkbox-header.html`)
        .get('.fixed-table-header thead .bs-checkbox input[type="checkbox"]').should('not.exist')
        .get('.fixed-table-body tbody .bs-checkbox input[type="checkbox"]').should('exist')
    })

    testIf('Classes', () => {
      cy.visit(`${baseUrl}table-classes.html`)
        .get('table.table.table-bordered.table-hover.table-striped').should('exist')
    })

    testIf('Click To Select', () => {
      cy.visit(`${baseUrl}click-to-select.html`)
        .get('tr[data-index="0"]').click()
        .get('input[type="checkbox"][data-index="0"]').should('be.checked')
    })

    testIf('Order List', () => {
      cy.visit(`${baseUrl}order-list.html`)

      // orderList 'desc,asc': the first click on a column sorts descending,
      // the next ascending, then the cycle repeats.
      cy.get('th[data-field="id"] .th-inner').click()
      cy.get('th[data-field="id"] .th-inner').should('have.class', 'desc')
      cy.get('tbody tr').first().find('td').eq(0).should('contain', '5')

      cy.get('th[data-field="id"] .th-inner').click()
      cy.get('th[data-field="id"] .th-inner').should('have.class', 'asc')
      cy.get('tbody tr').first().find('td').eq(0).should('contain', '1')

      // third click wraps back to the first direction of the cycle
      cy.get('th[data-field="id"] .th-inner').click()
      cy.get('th[data-field="id"] .th-inner').should('have.class', 'desc')
    })

    testIf('RTL', () => {
      cy.visit(`${baseUrl}rtl.html`)

      // The root container carries the RTL direction attribute and semantic class.
      cy.get('.bootstrap-table')
        .should('have.class', 'bootstrap-table-rtl')
        .and('have.attr', 'dir', 'rtl')

      // The checkbox column is the first DOM column. Under dir="rtl" the browser
      // lays columns out right-to-left, so its visual left edge ends up to the
      // right of the last column's left edge (visual order is mirrored).
      cy.get('.fixed-table-body thead tr:first-child th').then($ths => {
        const lefts = $ths.map((_, el) => Math.round(el.getBoundingClientRect().left)).get()

        expect(lefts.length).to.be.greaterThan(1)
        expect(lefts[0]).to.be.greaterThan(lefts[lefts.length - 1])
      })

      // The columns button group is floated (pull/float-right in LTR); under RTL
      // the mirror rule floats it to the left, so it sits in the left half of
      // the toolbar.
      cy.get('.fixed-table-toolbar .columns').then($el => {
        const rect = Cypress.$('.bootstrap-table')[0].getBoundingClientRect()
        const midX = rect.left + rect.width / 2

        expect($el[0].getBoundingClientRect().left).to.be.lessThan(midX)
      })
    })
  })
}
