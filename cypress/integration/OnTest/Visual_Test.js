/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Checkout from "../../support/pageObjects/Checkout";

const execution_type = "chrome";
const TestName = "Test Details are being validated"
const CheckOut = new Checkout();

describe("On details ", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.visit(Cypress.env("url"),{
      auth: {
        username: 'on',
        password: 'trend',
      },
    });
  });

  it("On details", function () {
    cy.makeScreenshot("On with cookie");
  });

  it("Screenshot after cookie accept", function () {
    CheckOut.getcookieBanner().click()
    cy.makeScreenshot("Cookie disappears and page displays");
  });



  after(function () {
    cy.eyesClose();
  });
});
