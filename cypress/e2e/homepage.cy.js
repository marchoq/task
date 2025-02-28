describe("Homepage", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.contains("Welcome to Nuxt");
  });

  it("increments counter", () => {
    cy.visit("/");
    cy.get('[data-test="counter-button"]').click();
    cy.get('[data-test="counter-value"]').should("contain", "1");
  });
});
