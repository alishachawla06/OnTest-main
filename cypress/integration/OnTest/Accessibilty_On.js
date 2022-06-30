/// <reference types="Cypress" />

describe("Accessibility Test", function () {
  beforeEach(() => {
    cy.visit(Cypress.env("url"),{
      auth: {
        username: 'on',
        password: 'trend',
      },
    });
    cy.injectAxe();
  });
  it("Accessibility", function () {
    cy.checkA11y();
  });

  it("Include only P1, P2 issues", function () {
    cy.checkA11y(null, { includedImpacts: ["critical", ["serious"]] });
  });
});
