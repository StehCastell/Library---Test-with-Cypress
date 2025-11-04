export const RegisterElements = {
  inputName: 'input[name="Name"]',
  inputEmail: 'input[name="Email"]',
  inputPassword: 'input[name="Password"]',
  btnRegister: 'input[type="submit"][value="Register"]',
  linkLogin: 'a:contains("Already have an account? Login")',
  msgSuccess: ':contains("successfully registered"), :contains("Welcome")',
  msgError: '.error-message, .alert-error, .text-danger, [class*="error"]',
  validationSummary: '[asp-validation-summary], .validation-summary-errors',
};
