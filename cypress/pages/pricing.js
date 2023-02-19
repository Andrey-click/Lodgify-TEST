import {BASIC_FIELDS, COST, CURRENCY} from "../locators/pricingPage";

export class PricingPage {
    constructor(node) {
        this.node = node;
    }
    get starterCost () {
        return cy.get(COST.starterCost);
    }
    get professionalCost () {
        return cy.get(COST.professionalCost);
    }
    get ultimateCost () {
        return cy.get(COST.ultimateCost);
    }
    get currencyDropDown () {
        return cy.get(CURRENCY.currencyDropDown);
    }
    get currencyStarter () {
        return cy.get(CURRENCY.currencyStarter);
    }
    get currencyProfessional () {
        return cy.get(CURRENCY.currencyProfessional);
    }
    get currencyUltimate () {
        return cy.get(CURRENCY.currencyUltimate);
    }
    get numberOfRentalsField () {
        return cy.get(BASIC_FIELDS.numberOfRentalsField);
    }
    get yearlyPlan () {
        return cy.get(BASIC_FIELDS.yearlyPlan);
    }
    get monthlyPlan () {
        return cy.get(BASIC_FIELDS.monthlyPlan);
    }
    get twoYearsPlan () {
        return cy.get(BASIC_FIELDS.twoYearsPlan);
    }
    checkCostFor50Rentals = () =>{
        this.numberOfRentalsField.clear().type("50");
        this.starterCost.should("include.text", "64");
        this.professionalCost.should("include.text", "375");
        this.ultimateCost.should("include.text", "525");
    }
    checkCurrencyChange = ({
        rent25, rent75, starter25, starter75,
        professional25, ultimate25, professional75, ultimate75, currency
                           }) => {
        const price = [
                [rent25, starter25, professional25, ultimate25],
                [rent75, starter75, professional75, ultimate75],
        ]
        price.forEach(item => {
            this.numberOfRentalsField.clear().type(item[0]);
            this.starterCost.should("include.text", item[1]);
            this.professionalCost.should("include.text", item[2]);
            this.ultimateCost.should("include.text", item[3]);
            this.currencyDropDown.should("include.text", currency)
        })
    }
    checkPlanChange = ({start, professional, ultimate}) => {
        this.starterCost.should("not.have.text", start);
        this.professionalCost.should("not.have.text", professional);
        this.ultimateCost.should("not.have.text", ultimate);
    }
}