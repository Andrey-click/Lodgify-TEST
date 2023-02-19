import {ContactsPage} from "../../pages/contact"
import {dataForContact} from "../../text/textsForInput";
context('Lodgify contact page', () => {
    const contact = new ContactsPage();

    it('Validation of contact fields', () => {
    cy.visit('http://localhost:8080/Contact.html');
    //Checking of error messages for mandatory contact fields
        contact.sendBtn.click();
        contact.checkFieldsContact();
        contact.fillInMandatoryFields(
            dataForContact.name,
            dataForContact.email
        )
        //some test of highlighting of phone field
        contact.sendBtn.click();
        contact.phoneDropdown.should('have.css', 'background-color')
            .and('eq', 'rgb(250, 220, 207)')

        //check dates (arrival / departure)
        contact.chooseArrDeptDates();
        contact.checkDates()
    });
})