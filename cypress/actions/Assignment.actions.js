import AssignmentPages from "../pages/Assignment.pages";
export default {
    enterUserNameAndPassword(UserName, Password) {
        AssignmentPages.getInfoSection("Email").type(UserName);
        AssignmentPages.getInfoSection("Password").type(Password);
    },
    clickOnLoginButton() {
        AssignmentPages.getInfoSection("LoginButton").click();
    },
    loginErrorMessage(
        errorMessage = "Epic sadface: Username and password do not match any user in this service"
    ) {
        AssignmentPages.getInfoSection("LoginError").should(
            "contain.text",
            errorMessage
        );
    },
    selectOptionFromDropDown(option) {
        AssignmentPages.getInfoSection('Filter_DropDown').select(option);
    },
    addListedProduct(position) {
        AssignmentPages.addProduct(position);
    },
    shopCardButton() {
        AssignmentPages.getInfoSection('Shop_Card_Button').click()
    },
    verifyDescriptionOnCart() {
        AssignmentPages.getInfoSection('Inventory_Name_Cart').each((el, index) => {
            cy.getGlobalName().then(name => {
                cy.wrap(el).should('contain.text', name[index])
            })
        })
    },
    verifyPriceOnCart() {
        AssignmentPages.getInfoSection('Inventory_Price_Cart').each((el, index) => {
            cy.getGlobalPrice().then(price => {
                cy.wrap(el).should('contain.text', price[index]);
            })
        })
    },
    clickOnCheckOut() {
        AssignmentPages.getInfoSection('Checkout_Button').click();
    },
    fillAllRequiredDetails() {
        AssignmentPages.fields('firstName').type('Shikar');
        AssignmentPages.fields('lastName').type('Shikar');
        AssignmentPages.fields('postalCode').type('123456');
    },
    clickOnContinueButton() {
        AssignmentPages.getInfoSection('continueButton').click();
    },
    clickOnFinishButton() {
        AssignmentPages.getInfoSection('finishButton').click();
    },
    verifyOrderCompletionMes(orderCompleteMessage = 'Thank you for your order!') {
        cy.contains('[data-test="title"]', 'Checkout: Complete!').should('be.visible').and('contain.text','Checkout: Complete!')
        AssignmentPages.getInfoSection('orderCompletedHeader').should('be.visible').and('have.text', orderCompleteMessage)
    },
    verifyOrderCompleteText(mes = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!') {
        AssignmentPages.getInfoSection('oderCompleteText').should('be.visible').and('have.text', mes)
    }
}