describe("Posts", () => {
  beforeEach(() => {
    cy.login();
  });

  it("creates new post successfully", () => {
    cy.get("[data-cy=post-input]").type(
      "https://i.guim.co.uk/img/media/ff00af5ea36a10b9d75dd7cb6ab9ce08fbe89034/0_107_3520_2113/master/3520.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=319315badf19ef64d5838c086ae62289"
    );
    cy.get("[data-cy=post-form]").submit();
  });
});
