Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Davi')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('davi@teste.com')
    cy.get('#open-text-area').type('longText')
    cy.get('button[type="submit"]').click()
})