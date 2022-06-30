/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Checkout from "../../support/pageObjects/Checkout";

const execution_type = "iphone";
const TestName = "Test Details are being validated on iphone"
const CheckOut = new Checkout();

describe("On details on iphone", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.viewport("iphone-x");
    cy.visit(Cypress.env("url"),{
      auth: {
        username: 'on',
        password: 'trend',
      },
    });
  });
  
  beforeEach(function () {
    cy.viewport("iphone-x");  
  });

  it("On details", function () {
    cy.makeScreenshot("On with cookie");
  });

  it("Screenshot after cookie accept", function () {
    CheckOut.getcookieBanner().click({force:true})
    cy.makeScreenshot("Cookie disappears and page displays");
  });

  

  after(function () {
    cy.eyesClose();
  });
});
