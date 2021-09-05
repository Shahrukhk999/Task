Feature: The Test

  I want to open assignment
  @Moderate
  Scenario: Opening web page and checking title
    Given I open localhost page
    Then The Title should be "UI Testing Site" on every site
  @Moderate
  Scenario: checking logo
    When  I open website page
    Then The Company Logo should be visible on every site
  @High
  Scenario: click on home page button
    When  I open website page
    And I click on home button
    Then It should navigate to home page
  @Low  
  Scenario: check status active for home button
    Given I open website
    When  I click on the Home button
    Then it should turn to active status
  @Low @High
  Scenario: check form button is working
    When  I click on the Form button
    Then I should get navigated to the Form page
    And Its status should be active
  @High
  Scenario: check error button is working
    When  I click on the Error button
    Then I should get "404 Error: File not found :-(" response code
  @High
  Scenario: checking UI Testing button 
    When  I click on the UI Testing button
    Then  I should get navigated to the home page
  @Low
  Scenario: checking heading and p tag
    When i visit home page
    Then The following text "Welcome to Pixelmatic QA department" should be visible on the Home page in h1 tag 
    And The following text "This site is dedicated to perform some exercises and demonstrate automated web testing." should be visible on the Home page in p tag
  @High
  Scenario: checking input field and button
    When I visit form page 
    Then I should see a textbox
    And One submit button
  @High
  Scenario: check result of form
    When I open form page
    And I entered
        | value   | result        |
        | John    | Hello John!   | 
        | Sophia  | Hello Sophia! |
        | Emily   |  Hello Emily! |
        | Charlie | Hello Charlie!|

  
    

