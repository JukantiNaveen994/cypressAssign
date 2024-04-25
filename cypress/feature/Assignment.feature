Feature: Acceptance Tests

  Scenario: TC_1 Login to web page with invalid password
    Given I am on "sauceDemoUrl" website
    When Login to website with correct username and invalid password
    Then Verify password validation message

  Scenario: TC_2 Login to web page with valid password
    Given I am on "sauceDemoUrl" website
    When Login to website with correct username and valid password
    Then Click on filter dropdown and select "Price (low to high)" option
    When Add the "first" listed product to cart
    And Add the "last" listed product to cart
    And Click on shop cart button
    Then Verify both products description on cart page
    And Verify both products price on cart page

  Scenario: TC_3 Login to web page with valid password
    Given I am on "sauceDemoUrl" website
    When Login to website with correct username and valid password
    Then Add the "first" listed product to cart
    And Click on shop cart button
    And Click on checkout button
    When Fill in all required information
    And Click on continue button and finish
    Then Verify order dispatched message
