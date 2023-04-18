describe('Gallery', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('apiUrl'), { fixture: 'images.json' }).as(
      'getImages'
    );
    cy.visit('/');
    cy.wait('@getImages');
  });

  it('fetches images', () => {
    cy.testId('tabs-content-0')
      .children('[role=list]')
      .children('[role=listitem]')
      .should('have.length', 4);
  });

  it('changes to favorited tab', () => {
    cy.testId('tabs-title-1').click();
    cy.testId('tabs-content-1')
      .children('[role=list]')
      .children('[role=listitem]')
      .should('have.length', 3);
  });

  it('opens sidebar when image is clicked', () => {
    cy.testId('sidebar').should('not.be.visible');
    cy.testId('image-list-item').first().click();
    cy.testId('sidebar').should('be.visible');
  });

  it('clicks to favorite the image', () => {
    cy.testId('image-list-item').eq(2).click();
    cy.testId('unfavorited').should('be.visible').click();
    cy.testId('favorited').should('be.visible');
  });

  it('clicks to remove favorite from the image', () => {
    cy.testId('image-list-item').first().click();
    cy.testId('favorited').should('be.visible').click();
    cy.testId('unfavorited').should('be.visible');
  });

  it('deletes the image', () => {
    cy.testId('image-list-item').first().click();
    cy.testId('delete').click();
    cy.testId('sidebar').should('not.be.visible');
    cy.testId('tabs-content-0')
      .children('[role=list]')
      .children('[role=listitem]')
      .should('have.length', 3);
  });
});
