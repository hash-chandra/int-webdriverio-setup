Feature: The Orange HRM Website

  Scenario: As a user, I can log into the website
    Given I am on the login page
    When I login with "forgooddly123" and "forgooddly123"
    Then I should see the Admin homepage



    