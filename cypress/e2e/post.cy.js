describe('Post test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can visit page', () => {
    cy.contains('Submission App');
    cy.get('input.outline-none.w-full')
      .should('have.attr', 'placeholder')
      .should('eq', 'Search post');
  });

  it('can see posts', () => {
    cy.contains('His mother had always taught him');
    cy.get('.grid div.border').should('have.length', 10);
  });

  it('can search post', () => {
    cy.get('input.outline-none.w-full').type('dave');
    cy.get('.grid div.border').should('have.length', 3);
  });

  it('can handle post not found', () => {
    cy.get('input').type('not found');
    cy.get('.grid div.border').should('have.length', 0);
    cy.get('h5').contains('Data Empty');
  });

  it('can go to post detail', () => {
    cy.get('a').eq(1).click();
    cy.url().should('include', '/posts/1');
    cy.contains('His mother had always taught him');
    cy.contains('dpettegre6');
    cy.get('input.outline-none.w-full')
      .eq(1)
      .should('have.attr', 'placeholder')
      .should('eq', 'Enter comment');
  });

  it('can handle post detail not found', () => {
    cy.visit('/posts/not-found');
    cy.get('h5').contains('Data Empty');
  });

  it('can click back to post list', () => {
    cy.contains('Submission App');
    cy.get('input.outline-none.w-full')
      .should('have.attr', 'placeholder')
      .should('eq', 'Search post');
  });
});
