import {pricingPage} from '../Page Objects/pricing'

//Locators
const contactForm = '.fluid';
const contactForm = '.PhoneInput/ [data-testid="phone-input"]';
const contactForm = '.eight > .ui > input';
const contactForm = '.four > .ui > input';
const contactForm = '.DateRangePickerInput';
const contactForm = '.ui > textarea';
const contactForm = '.light';
const contactForm = '[data-testid="form"] > [data-testid="button"]';





// Test data

//This site is protected by reCAPTCHA and the Google 


describe('Lodgify Pricing / Contact page', () => {
  it('Test 4 - Checking contact page ', () => {
  cy.visit('http://localhost:8080/Contact.html');
  cy.title().should('include', 'Contact');
  })
})