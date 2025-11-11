import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page-objects/login-page";

// Scenario: 01, 02, 03, 04, 05, 06, 07, 08
Given("I am on the login page", () => {
  LoginPage.accessLoginPage();
});

// Scenario: 01
When("I fill the password field with existing user password for login", () => {
  const existingPassword = Cypress.env("existingUserPassword");
  LoginPage.fillPassword(existingPassword);
});

// Scenario: 01, 03, 05
When("I fill the email field with existing user email for login", () => {
  const existingEmail = Cypress.env("existingUserEmail");
  LoginPage.fillEmail(existingEmail);
});

// Scenario: 01, 02, 03, 04, 05, 06
When("I click the login button", () => {
  LoginPage.clickLoginButton();
});

// Scenario: 01, 07
Then("I should be redirected from login to {string}", (url) => {
  LoginPage.verifyRedirect(url);
});

// Scenario: 02, 03, 04
When("I fill the login {string} field with {string}", (field, value) => {
  LoginPage.fillField(field, value);
});

// Scenario: 02, 03
Then("I should see a login error message {string}", (errorMessage) => {
  LoginPage.verifyErrorMessage(errorMessage);
});

// Scenario: 02, 03, 04, 05, 06, 08
Then("I should remain on the login page", () => {
  LoginPage.verifyOnLoginPage();
});

// Scenario: 04, 05, 06, 08
Then("I should see login validation errors", () => {
  LoginPage.verifyValidationError();
});

// Scenario: 07
When("I click on the register link", () => {
  LoginPage.clickRegisterLink();
});

// Scenario: 08
When("I login with email {string} and password {string}", (email, password) => {
  LoginPage.completeLogin(email, password);
});
