# Library Test with Cypress

Automated testing project for the Library System using Cypress with Cucumber (BDD).

## About the Project

This repository contains the automated tests for the Library System application. The main application being tested is available at:

**Application Repository:** [https://github.com/StehCastell/Library](https://github.com/StehCastell/Library)

> **Note:** You need to have the Library application running locally on `https://localhost:53600` to execute these tests.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Library application running on `https://localhost:53600`

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Library---Test-with-Cypress
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Create a `cypress.env.json` file in the root directory (ignored by git)
   - Add your credentials:
```json
{
  "existingUserEmail": "your-email@example.com",
  "existingUserPassword": "your-password"
}
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```
Then select E2E Testing and choose a browser to run the tests interactively.

### Run Tests in Headless Mode
```bash
npx cypress run
```

### Run Specific Feature
```bash
npx cypress run --spec "cypress/features/register.feature"
```

## Project Structure

### `/cypress`
Main directory containing all test-related files.

#### `/cypress/elements`
Contains page element selectors organized by page. Uses the Page Elements pattern to centralize element locators, making maintenance easier when UI changes occur.

#### `/cypress/features`
BDD feature files written in Gherkin syntax. Describes test scenarios in a human-readable format following the Given-When-Then pattern.

#### `/cypress/fixtures`
Test data files (JSON, CSV, etc.) used to provide static data for tests.

#### `/cypress/page-objects`
Page Object Model (POM) implementations. Contains classes that represent pages with methods to interact with page elements. Promotes code reusability and maintainability.

#### `/cypress/steps`
Cucumber step definitions that map Gherkin steps to actual code implementation. Acts as the bridge between feature files and page objects.

#### `/cypress/support`
Contains support files like custom commands and global configurations that run before tests.

### Configuration Files

- `cypress.config.js` - Main Cypress configuration including baseUrl, spec patterns, and plugins
- `cypress.env.json` - Environment-specific variables (credentials, URLs). **This file is git-ignored for security**
- `.gitignore` - Specifies files/folders to be ignored by git

## Test Architecture

This project follows best practices using:

- **Page Object Model (POM)**: Separates page structure from test logic
- **BDD with Cucumber**: Human-readable test scenarios
- **Page Elements Pattern**: Centralized element selectors
- **Random Data Generation**: Automated generation of unique test data
- **Environment Variables**: Secure credential management

## Features Covered

- User Registration
  - Successful registration with valid data
  - Validation errors (empty fields, invalid email, weak password)
  - Duplicate email detection
  - Password strength validation (minimum 6 characters)
  - Multiple user registrations

## Notes

- The `cypress.env.json` file contains sensitive data and should never be committed to version control
- Tests use randomly generated data for name and email to avoid conflicts
- Base URL is configured in `cypress.config.js` and can be changed as needed