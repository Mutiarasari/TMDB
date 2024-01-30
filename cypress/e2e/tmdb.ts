import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from '../fixtures/testData.json';
import movie from '../fixtures/movieList.json';
import homepage from '../pages/homePage';

When("I visit The MovieDB", () => {
  cy.visit("https://www.themoviedb.org/");
  homepage.welcomeHeaderValidation();
});

Then("I change the language", () => {
  cy.get(".translate").click();
});

 Then("I choose the language",()=>{
  cy.get("[aria-labelledby='default_language_popup_label'] .k-input").click();
 });

Then("Im Login on my Account",()=>{
  homepage.loginMethod(data.username,data.Password);
  cy.get('.about [href="/u/MutiarasariKusumaPutri"]').should('be.visible');
})

Then("I Search movie and Favorite it",() => {
  cy.visit("https://www.themoviedb.org/");
  homepage.firstFavoriteMovieMethod(movie.movie1);
})

Then("I Search the other movie and favorite it to",()=>{
  cy.visit("https://www.themoviedb.org/");
  homepage.secondFavoriteMovieMethod(movie.movie2);
})

Then("I Check my favorite",()=>{
  cy.visit("https://www.themoviedb.org/u/MutiarasariKusumaPutri/favorites");
  cy.get(".details").should('be.visible');
})

Then("I Order my favorite list",()=>{
  cy.get('.group_dropdown > .selected > span').should('be.visible');
  homepage.orderFavoriteMovieListMethod();
})

Then("I Remove my favorite Movie",()=>{
  cy.get(".action_bar li:nth-of-type(4) > .remove_list_item").should('be.visible');
  // cy.get(".action_bar li:nth-of-type(4) > .remove_list_item").eq(0).click();
  // cy.get(".action_bar li:nth-of-type(4) > .remove_list_item").eq(1).click();
  homepage.removeFavoriteMovieList();
})
