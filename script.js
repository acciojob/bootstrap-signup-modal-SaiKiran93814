//your JS code here. If required.
() => {
  // Confirm the modal is not visible (no .show class)
  cy.get('#signupModal').should('not.have.class', 'show');

  // Click the button to trigger the modal
  cy.get('button').first().click();

  // Assert the modal has the .show class (Bootstrap applies when visible)
  cy.get('#signupModal').should('have.class', 'show');
}