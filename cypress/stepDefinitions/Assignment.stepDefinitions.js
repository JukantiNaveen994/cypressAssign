import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AssignmentActions from "../actions/Assignment.actions";

beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Given("I am on {string} website", url => {
  cy.visit(Cypress.env(url));
});

When("Login to website with correct username and invalid password", (field) => {
  AssignmentActions.enterUserNameAndPassword(
    Cypress.env("UserName"),
    Cypress.env("invalidPassword")
  );
  AssignmentActions.clickOnLoginButton();
});

When("Login to website with correct username and valid password", (field) => {
  AssignmentActions.enterUserNameAndPassword(
    Cypress.env("UserName"),
    Cypress.env("Password")
  );
  AssignmentActions.clickOnLoginButton();
});

And("Verify password validation message", () => {
  AssignmentActions.loginErrorMessage();
});

Then('Click on filter dropdown and select {string} option', option => {
  AssignmentActions.selectOptionFromDropDown(option);
})

When('Add the {string} listed product to cart', position => {
  AssignmentActions.addListedProduct(position);
})

And('Click on shop cart button', () => {
  AssignmentActions.shopCardButton();
})

Then('Verify both products description on cart page', () => {
  AssignmentActions.verifyDescriptionOnCart();
})

And('Verify both products price on cart page', () => {
  AssignmentActions.verifyPriceOnCart();
})

And('Click on checkout button', () => {
  AssignmentActions.clickOnCheckOut();
})

And('Fill in all required information', () => {
  AssignmentActions.fillAllRequiredDetails();
})

And('Click on continue button and finish', () => {
  AssignmentActions.clickOnContinueButton();
  AssignmentActions.clickOnFinishButton();
})

Then('Verify order dispatched message', () => {
  AssignmentActions.verifyOrderCompletionMes();
  AssignmentActions.verifyOrderCompleteText();
})