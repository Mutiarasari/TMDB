Feature: The Movie DB Test Scenario 
  Scenario: Favorite the movie 
    When I visit The MovieDB
    Then Im Login on my Account
    Then I Search movie and Favorite it
    Then I Search the other movie and favorite it to
    Then I Check my favorite
    Then I Order my favorite list
    Then I Remove my favorite Movie