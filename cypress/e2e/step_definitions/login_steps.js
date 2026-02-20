import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/login");
});

Then("I should see the login form", () => {
  cy.get('input[type="email"]').should('be.visible');
  cy.get('input[type="password"]').should('be.visible');
  cy.contains('button', 'Login').should('be.visible');
});