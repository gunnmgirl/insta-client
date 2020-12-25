describe("Posts", () => {
  beforeEach(() => {
    cy.login();
  });

  it("creates new post successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=post-input]").type(
      "width=1200&height=1200&quality=85&auto=format&fit=crop&s=319315badf19ef64d5838c086ae62289"
    );
    cy.get("[data-cy=post-form]").submit();
  });
});
