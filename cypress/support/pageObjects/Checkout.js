class Checkout {

  orderConfirmation = '.confirmation-container__subtitle'
  cartAddedClass = '.additional-main-links__cart-items'

getcookieBanner()
 {
 return cy.get('#onetrust-accept-btn-handler')
}

  getCategory() {
    return cy.get('.swiper-slide-next > .category-slider__card > .category-card');
  }

  getProduct(){
    return cy.get(".card-visual-box__image-wrapper[href='https://staging-beta.on-running.com/en-de/products/cloudsurfer-6/womens/fennel-ink']")
  }

  getSize()
  {
    return cy.xpath(" //div[contains(@class,'sizes--show-size-info')]//div[@class='sizes__size'][contains(text(),'43')]")
  }
  

  getADD() {
    return cy.get('.button-container__button');
  }

  getcartadded(){
    return cy.get('.additional-main-links__cart-items')
  }

  getSB(){
    return cy.get('.trigger-mini-cart')
  }

  getCheck()
  {
    return cy.get('.button.cart__cta')
  }

  getEmail()
  {
    return cy.get('#email')
    

   }
   getProceed()
   {
    return cy.get('.button__inner')
   }

  getFname()
  {
    return cy.get('#firstname')
    
  }

  getLname()
  {
    return cy.get('#lastname')
    
  }

  getAddress()
  {
    return cy.get('#address1')
    
  }

  getZip()
  {
    return cy.get('#zipcode')
    
  }

  getCity()
  {
    return cy.get('#city') 
  }
getPhone()
  {
    return cy.get('#phone') 
  }
  getButton()
  {
    return cy.get("button[type='submit']")
  }

  getPayment()
  {
    return cy.get("form[class='checkout-shipping-method-form'] span[class='button__inner']")
  }

  getPaymentMethodCreditCard()
  {
 return cy.xpath("//span[contains(text(),'Pay with Card')]")
  }

  getCardNo()
  {
 return cy.iframe('.adyen-checkout__card-input .adyen-checkout__input[data-cse="encryptedCardNumber"] iframe').find('#encryptedCardNumber')
  }

 
getExpiryDate()
{
return cy.iframe(".adyen-checkout__input[data-cse='encryptedExpiryDate'] iframe").find('#encryptedExpiryDate')
}

getCVC()
  {
 return cy.iframe(".adyen-checkout__card-input .adyen-checkout__input[data-cse='encryptedSecurityCode'] iframe").find('#encryptedSecurityCode')
  }

  getNameoncard()
  {
 return cy.get('#nameoncard')
  }

  getSubmitCard()
  {
 return cy.get("button[type='submit']" )
  }

  getOrderConfirmation()
  {
    return orderConfirmation
  }

  getCardAddedClass()
  {
    return cartAddedClass
  }
}

export default Checkout;
