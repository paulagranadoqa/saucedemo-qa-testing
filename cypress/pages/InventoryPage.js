class InventoryPage {
  elements = {
    pageTitle: () => cy.get('[data-test="title"]'),
    cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
    addBackpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    addBikeLightBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
  }

  addBackpackToCart() {
    this.elements.addBackpackBtn().click();
  }

  addBikeLightToCart() {
    this.elements.addBikeLightBtn().click();
  }

  goToCart() {
    this.elements.cartLink().click();
  }
}

export default new InventoryPage();