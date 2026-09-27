module.exports = (theme = '') => {
  const baseUrl = require('../common/utils')(theme, 'extensions')

  const widthOf = field => cy.get(`#table thead th[data-field="${field}"]`)
    .then($th => $th[0].getBoundingClientRect().width)

  const drag = (index, dx) => {
    cy.get('.rc-handle').eq(index).then($handle => {
      const rect = $handle[0].getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      cy.wrap($handle)
        .trigger('pointerdown', { button: 0, clientX: x, clientY: y })
        .trigger('pointermove', { clientX: x + dx, clientY: y })
        .trigger('pointerup', { clientX: x + dx, clientY: y })
    })
  }

  describe('Resizable Test', () => {
    const visit = () => {
      cy.visit(`${baseUrl}resizable.html`)
        .get('#table tbody tr').should('have.length.gte', 1)
    }

    it('should render one handle between each pair of columns', () => {
      visit()
      cy.get('.rc-handle').should('have.length', 2)
    })

    it('should span the handles over the header and the body rows', () => {
      visit()
      cy.get('#table').then($table => {
        const tableRect = $table[0].getBoundingClientRect()

        cy.get('.rc-handle').first().should($handle => {
          const rect = $handle[0].getBoundingClientRect()

          expect(rect.top).to.be.closeTo(tableRect.top, 2)
          expect(rect.bottom).to.be.closeTo(tableRect.bottom, 2)
        })
      })
    })

    it('should resize the dragged column pair and keep the total width', () => {
      visit()
      widthOf('id').then(idBefore => {
        widthOf('name').then(nameBefore => {
          drag(0, 60)
          widthOf('id').should('be.closeTo', idBefore + 60, 2)
          widthOf('name').should('be.closeTo', nameBefore - 60, 2)
        })
      })
    })

    it('should not shrink a column below resizableMinWidth', () => {
      visit()
      drag(0, -2000)
      widthOf('id').should('be.gte', 29)
    })

    it('should keep widths after a column is hidden and shown again', () => {
      visit()
      drag(0, 80)
      widthOf('id').then(width => {
        cy.window().then(win => {
          win.BootstrapTable.init('#table', 'hideColumn', 'price')
          win.BootstrapTable.init('#table', 'showColumn', 'price')
        })
        widthOf('id').should('be.closeTo', width, 2)
        cy.get('.rc-handle').should('have.length', 2)
      })
    })

    it('should remove handles in card view and restore them in table view', () => {
      visit()
      cy.window().then(win => win.BootstrapTable.init('#table', 'toggleView'))
      cy.get('.rc-handle').should('not.exist')
      cy.window().then(win => win.BootstrapTable.init('#table', 'toggleView'))
      cy.get('.rc-handle').should('have.length', 2)
    })

    it('should work with a fixed height header', () => {
      visit()
      cy.window().then(win => win.BootstrapTable.init('#table', 'refreshOptions', { height: 400 }))
      cy.get('.fixed-table-header th[data-field="id"]').then($th => {
        const before = $th[0].getBoundingClientRect().width

        drag(0, 50)
        cy.get('.fixed-table-header th[data-field="id"]')
          .should($el => {
            expect($el[0].getBoundingClientRect().width).to.be.closeTo(before + 50, 3)
          })
      })
    })
  })
}
