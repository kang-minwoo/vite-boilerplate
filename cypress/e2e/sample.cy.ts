describe('sappmle app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('sample', () => {
    cy.get('h1').should('have.text', 'Vite + React')
  })
})
