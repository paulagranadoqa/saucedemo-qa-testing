describe('Cart & Checkout Flow - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Should add and remove a product from the shopping cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
  });

  it('Should complete the end-to-end checkout flow successfully', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();

    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').type('Paula');
    cy.get('[data-test="lastName"]').type('Granado');
    cy.get('[data-test="postalCode"]').type('36201');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Bike Light');
    cy.get('[data-test="total-label"]').should('contain', '$10.79');
    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
  });

  it('Should show an error when submitting checkout info with empty fields', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error: First Name is required');
  });

});