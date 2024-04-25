const fieldLocator = {
  Email: '[data-test="username"]',
  Password: '[data-test="password"]',
  LoginButton: '[data-test="login-button"]',
  LoginError: '[data-test="error"]',
  Warning: 'span [role="alert"]',
  Filter_DropDown: '[data-test="product-sort-container"]',
  Listed_Product: '[data-test="inventory-item"]',
  Inventory_Name: '[data-test="inventory-item-name"]',
  Inventory_Price: '[data-test="inventory-item-price"]',
  Add_To_Cart: '.btn_inventory',
  Shop_Card_Button: '#shopping_cart_container',
  Inventory_Name_Cart: 'div.inventory_item_name',
  Inventory_Price_Cart: 'div.inventory_item_price',
  Checkout_Button: '[data-test="checkout"]',
  formField: '[data-test="replaceData"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  orderCompletedHeader: '[data-test="complete-header"]',
  oderCompleteText: '[data-test="complete-text"]'
};
export default {
  getInfoSection(field) {
    return cy.get(fieldLocator[field]);
  },
  getListedProductByPosition(position) {
    if (position == 'first') {
      return this.getInfoSection('Listed_Product').first()
    }
    else if (position == 'last') {
      return this.getInfoSection('Listed_Product').last()
    }
  },
  addProduct(position) {
    let i = 0;
    this.getListedProductByPosition(position).then(productCard => {
      cy.wrap(productCard).find(fieldLocator['Inventory_Name']).then(name => {
        cy.setGlobalName(name.text().trim())
      })
      cy.wrap(productCard).find(fieldLocator['Inventory_Price']).then(price => {
        cy.setGlobalPrice(price.text().trim())
      })
      cy.wrap(productCard).find(fieldLocator['Add_To_Cart']).click();
      i++;
    });
  },
  fields(filed) {
    return cy.get(fieldLocator['formField'].replace('replaceData', filed));
  }
};

