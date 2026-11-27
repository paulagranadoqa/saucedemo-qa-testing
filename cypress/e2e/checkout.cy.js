import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Cart & Checkout Flow - SauceDemo', () => {

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Should add and remove a product from the shopping cart', () => {
    InventoryPage.addBackpackToCart();
    InventoryPage.elements.cartBadge().should('have.text', '1');

    InventoryPage.goToCart();
    cy.url().should('include', '/cart.html');
    CartPage.elements.itemName().should('have.text', 'Sauce Labs Backpack');

    CartPage.removeBackpack();
    InventoryPage.elements.cartBadge().should('not.exist');
  });

  it('Should complete the end-to-end checkout flow successfully', () => {
    InventoryPage.addBikeLightToCart();
    InventoryPage.goToCart();
    CartPage.proceedToCheckout();

    cy.url().should('include', '/checkout-step-one.html');
    CheckoutPage.fillCheckoutInformation('Paula', 'Granado', '36201');
    CheckoutPage.clickContinue();

    cy.url().should('include', '/checkout-step-two.html');
    CheckoutPage.elements.itemName().should('have.text', 'Sauce Labs Bike Light');
    CheckoutPage.elements.totalLabel().should('contain', '$10.79');
    CheckoutPage.clickFinish();

    cy.url().should('include', '/checkout-complete.html');
    CheckoutPage.elements.completeHeader().should('have.text', 'Thank you for your order!');
  });

  it('Should show an error when submitting checkout info with empty fields', () => {
    InventoryPage.addBackpackToCart();
    InventoryPage.goToCart();
    CartPage.proceedToCheckout();

    CheckoutPage.clickContinue();

    CheckoutPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Error: First Name is required');
  });

});