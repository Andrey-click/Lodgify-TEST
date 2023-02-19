import {PricingPage} from "../../pages/pricing"
context('Lodgify Pricing page', () => {
  const price = new PricingPage();

  it('Checking price change for 50 rentals', () => {
    cy.visit("http://localhost:8080/pricing.html");
    price.checkCostFor50Rentals();
  });
})