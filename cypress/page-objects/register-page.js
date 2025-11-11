import { RegisterElements } from "../elements/register-elements";

class RegisterPage {
  generateRandomName() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `User${timestamp}${randomNum}`;
  }

  generateRandomEmail() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `user${timestamp}${randomNum}@example.com`;
  }

  accessRegisterPage(url = "/account/register") {
    cy.visit(url);
  }

  fillName(name) {
    cy.get(RegisterElements.inputName).clear().type(name);
  }

  fillEmail(email) {
    cy.get(RegisterElements.inputEmail).clear().type(email);
  }

  fillPassword(password) {
    cy.get(RegisterElements.inputPassword).clear().type(password);
  }

  fillField(field, value) {
    const fieldLower = field.toLowerCase();
    const valueLower = value.toLowerCase();

    if (fieldLower === "name" || fieldLower === "nome") {
      // Se o valor for "user" ou "random", gera nome aleatório
      if (valueLower === "user" || valueLower === "random") {
        const randomName = this.generateRandomName();
        this.fillName(randomName);
      } else {
        this.fillName(value);
      }
    } else if (fieldLower === "email" || fieldLower === "e-mail") {
      // Se o valor for "email" ou "random", gera email aleatório
      if (valueLower === "email" || valueLower === "random") {
        const randomEmail = this.generateRandomEmail();
        this.fillEmail(randomEmail);
      } else {
        this.fillEmail(value);
      }
    } else if (fieldLower === "password" || fieldLower === "senha") {
      this.fillPassword(value);
    }
  }

  clickRegisterButton() {
    cy.get(RegisterElements.btnRegister).click();
  }

  clickButton(buttonText) {
    cy.contains("input[type='submit'], button", buttonText).click();
  }

  clickLoginLink() {
    cy.get(RegisterElements.linkLogin).click();
  }

  verifyMessage(message) {
    cy.contains(message).should("be.visible");
  }

  verifyErrorMessage(errorMessage) {
    cy.contains(errorMessage).should("be.visible");
  }

  verifyValidationError() {
    cy.get(RegisterElements.msgError).should("be.visible");
  }

  completeRegistration(name, email, password) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickRegisterButton();
  }

  completeRegistrationWithRandomData(password) {
    const randomName = this.generateRandomName();
    const randomEmail = this.generateRandomEmail();
    this.fillName(randomName);
    this.fillEmail(randomEmail);
    this.fillPassword(password);
    this.clickRegisterButton();
  }

  verifyRedirect(expectedUrl) {
    cy.url().should("include", expectedUrl);
  }

  verifyOnRegisterPage() {
    cy.url().should("include", "/account/register");
    cy.contains("Create Account").should("be.visible");
  }
}

export default new RegisterPage();
