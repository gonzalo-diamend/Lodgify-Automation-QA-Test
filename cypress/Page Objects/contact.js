
//Locators
const contactForm = '.fluid';
const nameData = '[data-testid="form"] > :nth-child(1) > :nth-child(1) > .ui > input';
const phoneData = '[data-testid="phone-input"]';
const emailData = '.eight > .ui > input';
const Guests = '.four > .ui > input';
const nameErrorMessage = ':nth-child(1) > :nth-child(1) > .input > .ui';
const emailErrorMessage = '.eight > .input > .ui';
const commentErrorMessage = ':nth-child(4) > .input > .ui';
const datePicker= '.DateRangePickerInput_calendarIcon';
const calendarDatePicker = '.DayPickerNavigation_rightButton__horizontalDefault > .DayPickerNavigation_svg__horizontal';
const conmmentData = '.ui > textarea';
const privacyPolicy = '.light';
const sendButton = '[data-testid="form"] > [data-testid="button"]';
const date1 = '[aria-label="Thursday, April 14, 2022"]';
const date2 = '[aria-label="Tuesday, June 14, 2022"]';
const successMessage = '.content > p';
const logoTitle = '.sliding-menu-wrapper';
const title = '.grid > :nth-child(1) > .top > .ui';
const userImg = '[data-testid="responsive-image-img"]';
const username = '.top > .flex-container > .header';
const descriptionUser = '.html-container';
const contactContainer = '.five';
const titleContact = '.five > .header';
const emailContact = '.medium > :nth-child(1)';
const phoneContact = '.medium > :nth-child(2)';
const navigationIcon = '[data-testid="navigation-icon"]';
const menuIcon = '[data-testid="navigation-wrapper"] > .menu';
const footer = '.bottom-navigation';
const rightsReserved = '.rights';

//Test data

const contactTitle = 'Contact';
const nameMandatory = 'Name is mandatory';
const emailMandatory = 'Email is mandatory';
const commentMandatory = 'Comment is mandatory';
const nameInfo = 'Ricardo Gomez';
const phoneInfo = '1562588798';
const emailInfo = 'rgomez@gmail.com';
const commentInfo = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
const privacyInfo = 'This site is protected by reCAPTCHA and the Google ';
const successInfo = 'Your request has been sent successfully.';
const rightsReserveInfo = 'All rights reserved';




export class contactPage  {
    static contactPageTest4 (){
        it('Test 4 - Checking contact page ', () => {
            cy.visit('http://localhost:8080/Contact.html');
            cy.title().should('include', contactTitle);
            cy.get(contactForm)
              .should('be.visible').and('exist');
            cy.get(sendButton).click({force:true});
            cy.get(nameErrorMessage)
              .should('be.visible').and('contain', nameMandatory);
            cy.get(emailErrorMessage)
              .should('be.visible').and('contain', emailMandatory);
            cy.get(commentErrorMessage)
              .should('be.visible').and('contain', commentMandatory);
            cy.get(nameData).type(nameInfo)
            cy.get(phoneData).type(phoneInfo);
            cy.get(emailData).type(emailInfo);
            cy.get(Guests).type('2');
            cy.get(datePicker).click({force:true});
            cy.get(calendarDatePicker).click({force:true});
            cy.get(calendarDatePicker).click({force:true});
            cy.get(calendarDatePicker).click({force:true});
            cy.get(calendarDatePicker).click({force:true});
            cy.get(date1).click({force:true});
            cy.get(calendarDatePicker).click({force:true});
            cy.get(calendarDatePicker).click({force:true});
            cy.get(date2).click({force:true});
            cy.get(conmmentData)
              .should('be.visible').type(commentInfo);
            cy.get(privacyPolicy)
              .should('be.visible').and('contain', privacyInfo);
            cy.get(sendButton).click({force:true});
            cy.get(sendButton).click({force:true});
            cy.get(successMessage)
              .should('be.visible').and('contain', successInfo);
          })
        }
        
        static contactPageTest5 (){
          it('Test 5 - Other validations ', () => {
            cy.visit('http://localhost:8080/Contact.html');
            cy.title().should('include', contactTitle);
            cy.get(logoTitle)
              .should('be.visible').and('exist');
            cy.get(title)
              .should('be.visible').and('exist');
            cy.get(userImg)
              .should('be.visible').and('exist');
            cy.get(username)
              .should('be.visible').and('exist');
            cy.get(descriptionUser)
              .should('be.visible').and('exist');
            cy.get(contactContainer)
              .should('be.visible').and('exist');
            cy.get(titleContact)
              .should('be.visible').and('exist');
            cy.get(emailContact)
              .should('be.visible').and('exist');
            cy.get(phoneContact)
              .should('be.visible').and('exist');
            cy.get(footer)
              .should('be.visible').and('exist');
            cy.get(navigationIcon).click({force:true});
            cy.get(menuIcon)
              .should('be.visible').and('exist');
            cy.get(navigationIcon).click({force:true});
            cy.get(rightsReserved)
              .should('be.visible').and('contain', rightsReserveInfo);
        
          })


        
    }


}