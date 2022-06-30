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

//Verify that product is added to the cart

Assertion.verifyCartisNotEmpty()

//    CheckOut.getcartadded().should('be.visible')

    CheckOut.getSB().click().wait(3000)

//Verify url changes when user clicks on Shopping bag icon

    cy.url().should('include',this.data.aftersubmiturl)

    CheckOut.getCheck().click().wait(5000)

//verify url changes when user reaches register page

    CheckOut.getEmail().click().type(this.data.Email)
    CheckOut.getProceed().click().wait(5000)

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
    CheckOut.getCardNo().click().type(this.data.Card)
    CheckOut.getExpiryDate().click().type(this.data.date)
    CheckOut.getCVC().click().type(this.data.CVC)
    
    //cy.iframe('.adyen-checkout__card-input .adyen-checkout__input[data-cse="encryptedCardNumber"] iframe').find('#encryptedSecurityCode').click().type('223')
   
    //CheckOut.getDate().click().type(this.data.date)
   // CheckOut.getCVC().click().type(this.data.CVC)
    CheckOut.getNameoncard().click().type(this.data.Nameoncard)
    CheckOut.getSubmitCard().click()

   Assertion.verifyOrderConfirmationText(this.data.orderConfirmationText)

   // cy.get('.confirmation-container__subtitle').should("contain.text","You'll receive a confirmation email shortly at ontest@gmail.com")

  })

  /*it("Payment", function () {

    
    
    cy.title().should('eq', this.data.pagetitle)


  });*/




  

 
});
