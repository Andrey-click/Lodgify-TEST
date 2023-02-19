import {CONTACT_FIELDS} from "../locators/contactPage";
import {errorMessages} from "../text/textsForInput";
import {generateDataForCommentField} from "./generate";
export class ContactsPage {
    constructor(node) {
        this.node = node;
    }
    get sendBtn() {
        return cy.get(CONTACT_FIELDS.sendBtn);
    }
    get nameErrorMessage() {
        return cy.get(CONTACT_FIELDS.nameErrorMessage);
    }
    get emailErrorMessage() {
        return cy.get(CONTACT_FIELDS.emailErrorMessage);
    }
    get commentErrorMessage() {
        return cy.get(CONTACT_FIELDS.commentErrorMessage);
    }
    get phoneDropdown() {
        return cy.get(CONTACT_FIELDS.phoneDropdown);
    }
    get nameInput() {
        return cy.get(CONTACT_FIELDS.nameInput);
    }
    get emailInput() {
        return cy.get(CONTACT_FIELDS.emailInput);
    }
    get commentInput() {
        return cy.get(CONTACT_FIELDS.commentInput);
    }
    get phoneInput() {
        return cy.get(CONTACT_FIELDS.phoneInput);
    }
    get arrowRight() {
        return cy.get(CONTACT_FIELDS.arrowRight);
    }
    get dateBtn() {
        return cy.get(CONTACT_FIELDS.dateBtn);
    }
    get arrivalDate() {
        return cy.get(CONTACT_FIELDS.arrivalDate);
    }
    get departureDate() {
        return cy.get(CONTACT_FIELDS.departureDate);
    }
    get arrivalField() {
        return cy.get(CONTACT_FIELDS.arrivalField);
    }
    get departureField() {
        return cy.get(CONTACT_FIELDS.departureField);
    }
    checkFieldsContact = () => {
        this.nameErrorMessage.should("include.text", errorMessages.name);
        this.emailErrorMessage.should("include.text", errorMessages.email);
        this.commentErrorMessage.should("include.text", errorMessages.comment);
    }
    fillInMandatoryFields = (userName, userEmail) => {
        this.nameInput.type(userName);
        this.emailInput.type(userEmail);
        this.commentInput.type(generateDataForCommentField())
    }
    chooseArrDeptDates = () => {
        this.dateBtn.click();
        this.arrowRight.click();
        this.arrivalDate.click();
        this.arrowRight.dblclick();
        this.departureDate.click();
    }
    checkDates = () => {
        this.arrivalField.should("include.value", "14/04/2023")
        this.departureField.should("include.value", "14/06/2023")
    }
}