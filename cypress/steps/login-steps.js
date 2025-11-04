import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page-objects/login-page";

Given("I am on the login page", () => {
  LoginPage.accessLoginPage();
});

When("I fill the login {string} field with {string}", (field, value) => {
  LoginPage.fillField(field, value);
});

When("I fill the email field with existing user email for login", () => {
  const existingEmail = Cypress.env("existingUserEmail");
  LoginPage.fillEmail(existingEmail);
});

When("I fill the password field with existing user password for login", () => {
  const existingPassword = Cypress.env("existingUserPassword");
  LoginPage.fillPassword(existingPassword);
});

When("I login with valid credentials", () => {
  LoginPage.loginWithEnvCredentials();
});

When("I login with email {string} and password {string}", (email, password) => {
  LoginPage.completeLogin(email, password);
});

When("I click the login button", () => {
  LoginPage.clickLoginButton();
});

When("I click the {string} login button", (button) => {
  LoginPage.clickButton(button);
});

When("I click on the register link", () => {
  LoginPage.clickRegisterLink();
});

Then("I should see the login message {string}", (message) => {
  LoginPage.verifyMessage(message);
});

Then("I should see a login error message {string}", (errorMessage) => {
  LoginPage.verifyErrorMessage(errorMessage);
});

Then("I should see login validation errors", () => {
  LoginPage.verifyValidationError();
});

Then("I should be redirected from login to {string}", (url) => {
  LoginPage.verifyRedirect(url);
});

Then("I should remain on the login page", () => {
  LoginPage.verifyOnLoginPage();
});
