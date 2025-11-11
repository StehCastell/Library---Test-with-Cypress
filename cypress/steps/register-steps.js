import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../page-objects/register-page";

// Scenario: 01, 02, 03, 04, 05, 06, 07, 08
Given("I am on the register page", () => {
  RegisterPage.accessRegisterPage();
});

// Scenario: 01, 02, 03, 04, 06
When("I fill the {string} field with {string}", (field, value) => {
  RegisterPage.fillField(field, value);
});

// Scenario: 01, 02, 03, 04, 05, 06, 07
When("I click the register button", () => {
  RegisterPage.clickRegisterButton();
});

// Scenario: 01, 08
Then("I should be redirected to {string}", (url) => {
  RegisterPage.verifyRedirect(url);
});

// Scenario: 02, 03, 04, 05, 06
Then("I should see validation errors", () => {
  RegisterPage.verifyValidationError();
});

// Scenario: 02, 03, 04, 05, 06, 07
Then("I should remain on the register page", () => {
  RegisterPage.verifyOnRegisterPage();
});

// Scenario: 07
When("I fill the name field with random data", () => {
  const randomName = RegisterPage.generateRandomName();
  RegisterPage.fillName(randomName);
});

// Scenario: 07
When("I fill the email field with existing user email", () => {
  const existingEmail = Cypress.env("existingUserEmail");
  RegisterPage.fillEmail(existingEmail);
});

// Scenario: 07
When("I fill the password field with existing user password", () => {
  const existingPassword = Cypress.env("existingUserPassword");
  RegisterPage.fillPassword(existingPassword);
});

// Scenario: 07
Then("I should see an error message {string}", (errorMessage) => {
  RegisterPage.verifyErrorMessage(errorMessage);
});

// Scenario: 08
When("I click on the login link", () => {
  RegisterPage.clickLoginLink();
});
