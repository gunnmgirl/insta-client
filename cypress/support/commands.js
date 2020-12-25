Cypress.Commands.add("login", () => {
  localStorage.clear();
  cy.request("POST", "http://localhost:4000/auth/login", {
    email: "test@gmail.com",
    password: "test1",
  }).then((response) => {
    const { token } = response.body;
    localStorage.setItem("token", token);
  });
});
