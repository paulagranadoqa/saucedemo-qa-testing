import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Authentication - SauceDemo', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Should log in successfully with a standard user', () => {
    LoginPage.login('standard_user', 'secret_sauce');

    cy.url().should('include', '/inventory.html');
    InventoryPage.elements.pageTitle().should('have.text', 'Products');
  });

  it('Should display an error when logging in with a locked-out user', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');

    LoginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.');
  });

  it('Should display an error when logging in with an invalid password', () => {
    LoginPage.login('standard_user', 'wrong_password');

    LoginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match any user in this service');
  });

});