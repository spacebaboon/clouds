describe("Aiven cloud listing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows heading", () => {
    cy.findByText("Aiven Clouds").should("exist");
  });

  it("shows a table with columns for name, region and distance", () => {
    cy.findByText("Name");
    cy.findByText("Region");
    cy.findByText("Distance ");
  });
});