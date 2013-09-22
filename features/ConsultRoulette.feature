Feature: Consult the roulette
  In order to exchange a registered product I can go to the roulette.
  As a result, I can see all objects from the roulette.
 
  Scenario: Consult the roulette when I have added an object
    Given I am registered
    And I added an iPhone to the roulette
    And 3 objects are on the roulette
    When I go to my homepage
    Then I should see 3 objects for exchange

   Scenario: Consult the roulette
    Given I am registered
    When I go to my homepage
    Then I should see 0 objects for exchange
