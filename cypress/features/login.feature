Feature: User Login
  As a registered user
  I want to login to the Library System
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario: [01] Successful login with valid credentials
    When I fill the email field with existing user email for login
    And I fill the password field with existing user password for login
    And I click the login button
    Then I should be redirected from login to "/books"

  Scenario: [02] Login with invalid email
    When I fill the login "email" field with "invalid@example.com"
    And I fill the login "password" field with "WrongPass123!"
    And I click the login button
    Then I should see a login error message "Email ou password incorretos"
    And I should remain on the login page

  Scenario: [03] Login with invalid password
    When I fill the email field with existing user email for login
    And I fill the login "password" field with "WrongPassword123!"
    And I click the login button
    Then I should see a login error message "Email ou password incorretos"
    And I should remain on the login page

  Scenario: [04] Login with empty email field
    When I fill the login "password" field with "Password123!"
    And I click the login button
    Then I should see login validation errors
    And I should remain on the login page

  Scenario: [05] Login with empty password field
    When I fill the email field with existing user email for login
    And I click the login button
    Then I should see login validation errors
    And I should remain on the login page

  Scenario: [06] Login with all empty fields
    When I click the login button
    Then I should see login validation errors
    And I should remain on the login page

  Scenario: [07] Navigate to register page from login page
    When I click on the register link
    Then I should be redirected from login to "/account/register"

  Scenario Outline: [08] Login attempts with different invalid credentials
    When I login with email "<email>" and password "<password>"
    Then I should see login validation errors
    And I should remain on the login page

    Examples:
      | email                | password      |
      | wrong@example.com    | WrongPass1!   |
      | invalid@test.com     | BadPass2!     |
      | notfound@email.com   | FakePass3!    |
