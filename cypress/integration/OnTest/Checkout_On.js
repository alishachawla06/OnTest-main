/// <reference types="Cypress" />
///<reference types="cypress-iframe" />
import Checkout from "../../support/pageObjects/Checkout";
import Assert from "../../support/assertions";

const CheckOut = new Checkout();
const Assertion = new Assert();

describe("To Go to the compare page", function () {
  before(function () {
    cy.fixture("details.json").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("url"),{
      auth: {
        username: 'on',
        password: 'trend',
      },
    });
CheckOut.getcookieBanner().click()
  });

  /* GIVEN user lands on the Homepage
   AND Clicks on the "Running shoes" */
  it("Checkout", function () {
   
    CheckOut.getCategory().click()
    cy.scrollTo("bottom",{ duration: 6000})
    cy.wait(5000)
    CheckOut.getProduct().click({ force: true })
    CheckOut.getSize().click({ force: true })
    CheckOut.getADD().click().wait(3000)

/* GIVEN product is added to the cart
   When user clicks on the shopping bag icon" 
   Then user is redirected to shopping bag page 
   And url is changed*/

   Assertion.verifyCartisNotEmpty()
   CheckOut.getSB().click().wait(3000)
   cy.url().should('include',this.data.aftersubmiturl)

   /* Given user is at shopping bag page
      When user clicks on checkout option
      And user Enters email to proceed
      Then redirected to the checkout page */
    CheckOut.getCheck().click().wait(5000)
    CheckOut.getEmail().click().type(this.data.Email)
    CheckOut.getProceed().click().wait(5000)
   /*  Given user is at checkout page
       When enters all the valid user details 
       And proceed
       Then user is redirected to payment option page */ 
    CheckOut.getFname().click().type(this.data.Firstname)
    CheckOut.getLname().click().type(this.data.Lastname)
    CheckOut.getAddress().click().type(this.data.Address)
    CheckOut.getZip().click().type(this.data.zip)
    CheckOut.getCity().click().type(this.data.city)
    CheckOut.getPhone().click().type(this.data.Mobile)
    CheckOut.getButton().click()
    CheckOut.getPayment().click().wait(5000)
    CheckOut.getPaymentMethodCreditCard().click()
    cy.wait(3000)
    /* Given user is at payment details page
       When inputs valid card details
       And proceeds
       Then order is succesfully placed
       */
    CheckOut.getCardNo().click().type(this.data.Card)
    CheckOut.getExpiryDate().click().type(this.data.date)
    CheckOut.getCVC().click().type(this.data.CVC)
    CheckOut.getNameoncard().click().type(this.data.Nameoncard)
    CheckOut.getSubmitCard().click()
    Assertion.verifyOrderConfirmationText(this.data.orderConfirmationText)



  })






  

 
});
