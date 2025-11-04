import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../page-objects/register-page";

Given("I am on the register page", () => {
  RegisterPage.accessRegisterPage();
});

Given("I am on the registration page", () => {
  RegisterPage.accessRegisterPage();
});

When("I fill the {string} field with {string}", (field, value) => {
  const fieldLower = field.toLowerCase();

  if (fieldLower === "name" || fieldLower === "nome") {
    const randomName = RegisterPage.generateRandomName();
    RegisterPage.fillName(randomName);
  } else if (fieldLower === "email" || fieldLower === "e-mail") {
    const randomEmail = RegisterPage.generateRandomEmail();
    RegisterPage.fillEmail(randomEmail);
  } else {
    RegisterPage.fillField(field, value);
  }
});

When("I fill in the registration form with:", (dataTable) => {
  const data = dataTable.rowsHash();
  if (data.Name || data.name) {
    RegisterPage.fillName(data.Name || data.name);
  }
  if (data.Email || data.email) {
    RegisterPage.fillEmail(data.Email || data.email);
  }
  if (data.Password || data.password) {
    RegisterPage.fillPassword(data.Password || data.password);
  }
});

When("I complete the registration with name {string}, email {string}, and password {string}", (name, email, password) => {
  RegisterPage.completeRegistration(name, email, password);
});

When("I complete the registration with random data and password {string}", (password) => {
  RegisterPage.completeRegistrationWithRandomData(password);
});

When("I fill the name field with random data", () => {
  const randomName = RegisterPage.generateRandomName();
  RegisterPage.fillName(randomName);
});

When("I fill the email field with existing user email", () => {
  const existingEmail = Cypress.env("existingUserEmail");
  RegisterPage.fillEmail(existingEmail);
});

When("I fill the password field with existing user password", () => {
  const existingPassword = Cypress.env("existingUserPassword");
  RegisterPage.fillPassword(existingPassword);
});

When("I click the {string} button", (button) => {
  RegisterPage.clickButton(button);
});

When("I click the register button", () => {
  RegisterPage.clickRegisterButton();
});

When("I click on the login link", () => {
  RegisterPage.clickLoginLink();
});

Then("I should see the message {string}", (message) => {
  RegisterPage.verifyMessage(message);
});

Then("I should see an error message {string}", (errorMessage) => {
  RegisterPage.verifyErrorMessage(errorMessage);
});

Then("I should see validation errors", () => {
  RegisterPage.verifyValidationError();
});

Then("I should be redirected to {string}", (url) => {
  RegisterPage.verifyRedirect(url);
});

Then("I should remain on the register page", () => {
  RegisterPage.verifyOnRegisterPage();
});
