class CartPage {
  elements = {
    itemName: () => cy.get('[data-test="inventory-item-name"]'),
    removeBackpackBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    checkoutBtn: () => cy.get('[data-test="checkout"]')
  }

  removeBackpack() {
    this.elements.removeBackpackBtn().click();
  }

  proceedToCheckout() {
    this.elements.checkoutBtn().click();
  }
}

export default new CartPage();