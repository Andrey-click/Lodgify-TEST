1) Incorrect price for ultimate rentals
   Summary: With 50 rentals we get an incorrect price for Ultimate plan

   Priority: High
   Severity: Critical

   STP:
1. Go to http://localhost:8080/pricing.html (Run server)
2. Click on field with rentals number 
3. Type 50 

ER: Price should be 525 $ 
AR: Displayed price is 518 $



2) Incorrect currency displayed
   Summary: When open pricing page displayed prices in $ USD, But displayed currency is € EUR

   Priority: Medium
   Severity: Major

   STP:
1. Go to http://localhost:8080/pricing.html (Run server)

ER: Prices should be displayed according to displayed currency
AR: Displayed prices is $ USD, displayed currency € EUR



3) No appearance of error message for phone field
   Summary: When didn't fill in phone field and proceed further, no appearance of Error message

   Priority: Medium
   Severity: Low

   STP:
1. Go to http://localhost:8080/Contact.html (Run server)
2. Click on "Send" btn

ER: Above phone input field appeared error message because of mandatory of field
AR: Above phone input field didn't displayed any error message