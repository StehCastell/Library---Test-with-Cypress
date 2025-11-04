import { LoginElements } from "../elements/login-elements";

class LoginPage {
  accessLoginPage(url = "/account/login") {
    cy.visit(url);
  }

  fillEmail(email) {
    cy.get(LoginElements.inputEmail).clear().type(email);
  }

  fillPassword(password) {
    cy.get(LoginElements.inputPassword).clear().type(password);
  }

  fillField(field, value) {
    const fieldLower = field.toLowerCase();

    if (fieldLower === "email" || fieldLower === "e-mail") {
      this.fillEmail(value);
    } else if (fieldLower === "password" || fieldLower === "senha") {
      this.fillPassword(value);
    }
  }

  clickLoginButton() {
    cy.get(LoginElements.btnLogin).click();
  }

  clickButton(buttonText) {
    cy.contains("input[type='submit'], button", buttonText).click();
  }

  clickRegisterLink() {
    cy.get(LoginElements.linkRegister).click();
  }

  verifyMessage(message) {
    cy.contains(message).should("be.visible");
  }

  verifyErrorMessage(errorMessage) {
    cy.contains(errorMessage).should("be.visible");
  }

  verifyValidationError() {
    cy.get(LoginElements.msgError).should("be.visible");
  }

  completeLogin(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLoginButton();
  }

  loginWithEnvCredentials() {
    const email = Cypress.env("existingUserEmail");
    const password = Cypress.env("existingUserPassword");
    this.completeLogin(email, password);
  }

  verifyRedirect(expectedUrl) {
    cy.url().should("include", expectedUrl);
  }

  verifyOnLoginPage() {
    cy.url().should("include", "/account/login");
    cy.contains("Login").should("be.visible");
  }
}

export default new LoginPage();
