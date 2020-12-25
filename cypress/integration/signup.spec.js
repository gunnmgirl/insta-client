import faker from "faker";

describe("The Sign up Suite", () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const username = faker.internet.userName();
  const password = faker.internet.password();

  it("happy workflow", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("[data-cy=firstName-signup-input]").type(firstName);
    cy.get("[data-cy=lastName-signup-input]").type(lastName);
    cy.get("[data-cy=email-signup-input]").type(email);
    cy.get("[data-cy=username-signup-input]").type(username);
    cy.get("[data-cy=password-signup-input]").type(password);
    cy.get("[data-cy=signup-button]").click();
    cy.location("pathname").should("equal", "/");
    cy.get("[data-cy=feed]").should("be.visible");
  });
});
