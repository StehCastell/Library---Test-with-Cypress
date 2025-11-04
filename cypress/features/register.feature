Feature: User Registration
  As a new user
  I want to register in the Library System
  So that I can access the application

  Background:
    Given I am on the register page

  Scenario: Successful user registration
    When I fill the "name" field with "user"
    And I fill the "email" field with "email"
    And I fill the "password" field with "SecurePass123!"
    And I click the register button
    Then I should be redirected to "/books"

  # Scenario not code yet.
  # Scenario: Registration with invalid email format
  #   When I fill the "name" field with "Invalid User"
  #   And I fill the "email" field with "invalid-email-format"
  #   And I fill the "password" field with "Password123!"
  #   And I click the register button
  #   Then I should see validation errors
  #   And I should remain on the register page

  Scenario: Registration with empty name field
    When I fill the "email" field with "user@example.com"
    And I fill the "password" field with "Password123!"
    And I click the register button
    Then I should see validation errors
    And I should remain on the register page

  Scenario: Registration with empty email field
    When I fill the "name" field with "Test User"
    And I fill the "password" field with "Password123!"
    And I click the register button
    Then I should see validation errors
    And I should remain on the register page

  Scenario: Registration with empty password field
    When I fill the "name" field with "Test User"
    And I fill the "email" field with "test@example.com"
    And I click the register button
    Then I should see validation errors
    And I should remain on the register page

  Scenario: Registration with all empty fields
    When I click the register button
    Then I should see validation errors
    And I should remain on the register page

  Scenario: Registration with password less than 6 characters
    When I fill the "name" field with "user"
    And I fill the "email" field with "email"
    And I fill the "password" field with "12345"
    And I click the register button
    Then I should see validation errors
    And I should remain on the register page

  Scenario: Registration with existing user email
    When I fill the name field with random data
    And I fill the email field with existing user email
    And I fill the password field with existing user password
    And I click the register button
    Then I should see validation errors

  Scenario: Navigate to login page from register page
    When I click on the login link
    Then I should be redirected to "/account/login"