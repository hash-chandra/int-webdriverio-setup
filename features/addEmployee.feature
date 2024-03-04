Feature: The Orange HRM Website - Addition and Verification of an employee

Background:
    Given I am on the login page
    When I login with "Admin" and "admin123"
    Then I should see the Admin homepage
    Given I am on the login page

  Scenario: As an admin, I can add an employee
    When I click on the PIM tab
    And I click on the Add button
    And I fill in the employee details "raw" and "two"
    And I submit the details
    Then I should see the employee "raw" added successfully

  # Scenario: As an admin, I can search the newly added employee
  #   When I click on the PIM tab
  #   And I enter the employee name "xxx"
  #   And I click on the search button
  #   Then I should see the employee details

  