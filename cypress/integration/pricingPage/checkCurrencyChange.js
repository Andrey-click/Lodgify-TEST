import {PricingPage} from "../../pages/pricing"
import {currency, eur25Value, eur75Value, gbp25Value, gbp75Value} from "../../text/textsForInput";
context('Lodgify Pricing page', () => {

  const price = new PricingPage();

  it('Checking currency change', () => {
    cy.visit("http://localhost:8080/pricing.html");

    // CHeck change currency for EUR
    price.currencyDropDown.select(currency.usd).select(currency.eur);
    price.checkCurrencyChange({
      rent25: eur25Value.rentals25,
      rent75: eur75Value.rentals75,
      starter25: eur25Value.starter25Rentals,
      starter75: eur75Value.starter75Rentals,
      professional25: eur25Value.professional25Rentals,
      professional75: eur75Value.professional75Rentals,
      ultimate25: eur25Value.ultimate25Rentals,
      ultimate75: eur75Value.ultimate75Rentals,
      currency: currency.eur
    });

    // CHeck change currency for GBP
    price.currencyDropDown.select(currency.gbp);
    price.checkCurrencyChange({
      rent25: gbp25Value.rentals25,
      rent75: gbp75Value.rentals75,
      starter25: gbp25Value.starter25Rentals,
      starter75: gbp75Value.starter75Rentals,
      professional25: gbp25Value.professional25Rentals,
      professional75: gbp75Value.professional75Rentals,
      ultimate25: gbp25Value.ultimate25Rentals,
      ultimate75: gbp75Value.ultimate75Rentals,
      currency: currency.gbp
    });
  });
})