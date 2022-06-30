import Checkout from "./pageObjects/Checkout";

const CheckOut = new Checkout();

class Assert{

      verifyOrderConfirmationText(text){
         return cy.get(CheckOut.orderConfirmation).should('contain.text',text)
      }

      verifyCartisNotEmpty(){
        return cy.get(CheckOut.cartAddedClass).should('be.visible')
    }
  }

  export default Assert;