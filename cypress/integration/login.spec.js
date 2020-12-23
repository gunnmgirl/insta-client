/// <reference types="Cypress" />

describe("The Log In Suite", () => {
  it("does not work with wrong credentials", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=log-in-link]").click();
    cy.get("[data-cy=email-input]").type("naid@gmail.com");
    cy.get("[data-cy=password-input]").type("12345678");
    cy.get("[data-cy=log-in-button]").click();
    cy.get("[data-cy=error-message]").contains("You entered a wrong password!");
    cy.location("pathname").should("equal", "/login");
  });
  it("happy path", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=log-in-link]").click();
    cy.get("[data-cy=email-input]").type("naid@gmail.com");
    cy.get("[data-cy=password-input]").type("kkkkk");
    cy.get("[data-cy=log-in-button]").click();
    cy.location("pathname").should("equal", "/");
    cy.get("[data-cy=feed]").should("be.visible");
  });
});
