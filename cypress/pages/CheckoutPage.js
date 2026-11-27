class CheckoutPage {
  elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),
    finishBtn: () => cy.get('[data-test="finish"]'),
    itemName: () => cy.get('[data-test="inventory-item-name"]'),
    totalLabel: () => cy.get('[data-test="total-label"]'),
    completeHeader: () => cy.get('[data-test="complete-header"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  fillCheckoutInformation(firstName, lastName, postalCode) {
    if (firstName) this.elements.firstNameInput().type(firstName);
    if (lastName) this.elements.lastNameInput().type(lastName);
    if (postalCode) this.elements.postalCodeInput().type(postalCode);
  }

  clickContinue() {
    this.elements.continueBtn().click();
  }

  clickFinish() {
    this.elements.finishBtn().click();
  }
}

export default new CheckoutPage();