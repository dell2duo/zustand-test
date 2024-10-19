describe("counter", () => {
  it("should increment counter and see result", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("+1").click();
    cy.contains("See result").click();
    cy.url().should("include", "/result");
    cy.contains("2");
  });
});
