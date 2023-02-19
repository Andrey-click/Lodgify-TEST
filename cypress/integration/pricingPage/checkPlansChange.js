import {PricingPage} from "../../pages/pricing"
import {currency, eur25Value} from "../../text/textsForInput";
context('Lodgify Pricing page', () => {

  const price = new PricingPage();

  it('Checking plan change', () => {
    cy.visit("http://localhost:8080/pricing.html");
    price.currencyDropDown.select(currency.usd).select(currency.eur);

    //Check plan change on Monthly
    price.numberOfRentalsField.clear().type(eur25Value.rentals25);
    price.monthlyPlan.click();

    price.checkPlanChange({
      start: eur25Value.starter25Rentals,
      professional: eur25Value.professional25Rentals,
      ultimate: eur25Value.ultimate25Rentals
    });

    //Check plan change on Two Years
    price.twoYearsPlan.click();

    price.checkPlanChange({
      start: eur25Value.starter25Rentals,
      professional: eur25Value.professional25Rentals,
      ultimate: eur25Value.ultimate25Rentals
    });
  });
})