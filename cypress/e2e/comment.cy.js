describe('Comment test', () => {
  beforeEach(() => {
    cy.visit('/posts/2');
  });

  it('can see post detail and comment', () => {
    cy.url().should('include', '/posts/2');
    cy.contains('He was an expert but not in a discipline');
    cy.contains('rstrettle1v');
    cy.get('div.flex.p-3.mb-6').should('have.length', 5);
    cy.get('input.outline-none.w-full')
      .eq(1)
      .should('have.attr', 'placeholder')
      .should('eq', 'Enter comment');
  });

  it('can add comment', () => {
    cy.get('input.outline-none.w-full').eq(1).type('Good morning!');
    cy.get('button.bg-purple-500').eq(0).click();
    cy.get('div.flex.p-3.mb-6').eq(5).contains('Good morning!');
    cy.get('div.flex.p-3.mb-6').should('have.length', 6);
  });

  it("can't add comment whent input is empty", () => {
    cy.get('button.bg-purple-500').eq(0).click();
    cy.get('div.text-red-500').eq(0).contains('comments cannot be empty');
  });
});
