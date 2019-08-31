describe('My fisrt e2e test', function(){
  it('set secret',function(){
    cy.visit('http://localhost:4200/');
    cy.get('input')
      .type('1234')
      .should('have.value', '1234');
    cy.contains('Guardar número').click();
    cy.contains('ok, let the game begins');
  })

  it('guess', function(){
    cy.visit('http://localhost:4200/');
    cy.get('input')
      .type('1234')
      .should('have.value', '1234');
    cy.contains('Adivinar número').click();
    cy.contains('XXXX');
  })


})
