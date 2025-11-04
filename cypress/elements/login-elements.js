export const LoginElements = {
  inputEmail: 'input[name="Email"]',
  inputPassword: 'input[name="Password"]',
  btnLogin: 'input[type="submit"][value="Login"]',
  linkRegister: 'a:contains("Don\'t have an account? Register")',
  msgSuccess: ':contains("successfully logged in"), :contains("Welcome")',
  msgError: '.error-message, .alert-error, .text-danger, [class*="error"]',
  validationSummary: '[asp-validation-summary], .validation-summary-errors',
};
