
//Locators
const scrollSlide = '#scroll-prop-plan';
const titleData = 'body > div.content-wrapper > div.section.pad-top-0.pad-bot-2 > div.container.container-md > div.property-scroll-box > div.scroll-box > div:nth-child(2) > div.slider-handle.min-slider-handle.round';
const priceData1 = '[data-testid="phone-input"]';
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
const faqQuestion1 = ':nth-child(1) > .faq-question';
const faqQuestion2 = ':nth-child(2) > .faq-question';
const faqQuestion3 = ':nth-child(3) > .faq-question';
const faqQuestion4 = ':nth-child(4) > .faq-question';
const faqQuestion5 = ':nth-child(5) > .faq-question';
const faqQuestion6 = ':nth-child(6) > .faq-question';
const faqQuestion7 = ':nth-child(7) > .faq-question';
const faqQuestion8 = ':nth-child(8) > .faq-question';
const faqQuestion9 = ':nth-child(9) > .faq-question';
const faqQuestion10 = ':nth-child(10) > .faq-question';
const faqQuestion11 = ':nth-child(11) > .faq-question';
const faqQuestion12 = ':nth-child(12) > .faq-question';
const faqQuestion13 = ':nth-child(13) > .faq-question';
const faqQuestion14 = ':nth-child(14) > .faq-question';
const faqQuestion15 = ':nth-child(15) > .faq-question';
const faqQuestion16 = ':nth-child(16) > .faq-question';


//Test data

const pricingTitle = 'Pricing';
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

export class pricingPage  {
    static pricingTest1 (){
        it('Test 1 - Checking pricing plans ', () => {
            cy.visit('http://localhost:8080/Pricing.html');
            cy.title().should('include', pricingTitle);
            cy.get(scrollSlide).clear({force:true})
            cy.get(scrollSlide).type(50)
            cy.get(titleData)
                .should('be.visible').and('exist')
            cy.get()
                .should('be.visible').and('exist')
            cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price > .total-sum')
                .should('be.visible').and('contain', '64' )
            cy.get('.price-card-starter > .price-item > :nth-child(2) > .wd-100 > .btn')
                .should('be.visible').and('contain', 'Get Started')
            cy.get(':nth-child(2) > .price-item')
                .should('be.visible').and('exist')
            cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price > .total-sum')
                .should('be.visible').and('contain', '375' )
            cy.get(':nth-child(2) > .price-item > :nth-child(2) > .wd-100 > .btn')
                .should('be.visible').and('contain', 'Get')
            cy.get(':nth-child(3) > .price-item')
                .should('be.visible').and('exist')
            cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price > .total-sum')
                .should('be.visible').and('contain', '518' )
            cy.get(':nth-child(3) > .price-item > :nth-child(2) > .wd-100 > .btn')
                .should('be.visible').and('contain', 'Started')
              
          })
        }
        static pricingTest2 (){
          it('Test 2 - Checking currencies', () => {
            cy.title().should('include', 'Pricing');
            cy.get('.row-sm > :nth-child(1)')
              .should('be.visible').and('contain', 'Do you want to see other currencies?')
            cy.get('.price-currency-select')
              .select('eur')
            cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '60€' )
            cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '330€' )
            cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '466€' )
            cy.get('.row-sm > :nth-child(1)')
                .should('be.visible').and('contain', 'Do you want to see other currencies?')
            cy.get('.price-currency-select')
                .select('gbp')
            cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '£51' )
            cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '£294' )
            cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '£414' )
            cy.get('.row-sm > :nth-child(1)')
                .should('be.visible').and('contain', 'Do you want to see other currencies?')
            cy.get('.price-currency-select')
                .select('usd')
                cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '$64' )
            cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '$375' )
            cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price')
                .should('be.visible').and('contain', '$518' )
        
            
            })
        }
        static pricingTest3 (){
            it('Test 3 - Other page tests', () => {
                cy.get('.head-top-bar > .container')
                    .should('be.visible').and('exist')
                cy.get('#menu-item-15007 > .dropdown-toggle')
                    .should('be.visible').and('exist')
                cy.get('#menu-item-13168 > .dropdown-toggle')
                    .should('be.visible').and('exist')
                cy.get('#menu-item-8806 > .dropdown-toggle')
                    .should('be.visible').and('exist')
                cy.get('#menu-item-31 > a')
                    .should('be.visible').and('exist')
                cy.get('#menu-item-32 > a')
                    .should('be.visible').and('exist')
                cy.get('.wd-100 > .push-bot-3')
                    .should('be.visible').and('exist')
                cy.get('.property-scroll-box')
                    .should('be.visible').and('exist')
                cy.get('[data-price-period="1"] > span')
                    .should('be.visible').and('exist')
                cy.get('[data-price-period="1"] > span')
                    .click({force:true})
                cy.get('[data-price-period="2"]')
                    .should('be.visible').and('exist')
                cy.get('[data-price-period="2"]')
                    .click({force:true})
                cy.get('[data-price-period="3"] > a')
                    .should('be.visible').and('exist')
                cy.get('[data-price-period="3"] > a')
                    .click({force:true})
                cy.get(faqQuestion1)
                    .click({force:true})
                cy.get(faqQuestion2)
                    .click({force:true})
                cy.get(faqQuestion3)
                    .click({force:true})
                cy.get(faqQuestion4)
                    .click({force:true})
                cy.get(faqQuestion5)
                    .click({force:true})
                cy.get(faqQuestion6)
                    .click({force:true})
                cy.get(faqQuestion7)
                    .click({force:true})
                cy.get(faqQuestion8)
                    .click({force:true})
                cy.get(faqQuestion9)
                    .click({force:true})
                cy.get(faqQuestion10)
                    .click({force:true})
                cy.get(faqQuestion11)
                    .click({force:true})
                cy.get(faqQuestion12)
                    .click({force:true})
                cy.get(faqQuestion13)
                    .click({force:true})
                cy.get(faqQuestion14)
                    .click({force:true})
                cy.get(faqQuestion15)
                    .click({force:true})
                cy.get(faqQuestion16)
                    .click({force:true})
                cy.get('.sct-heading-box')
                    .should('be.visible').and('exist')
                cy.get(':nth-child(4) > .container > .row > :nth-child(1)')
                    .should('be.visible').and('exist')
                cy.get(':nth-child(4) > .container > .row > :nth-child(2)')
                    .should('be.visible').and('exist')
                cy.get(':nth-child(4) > .container > .row > :nth-child(3)')
                    .should('be.visible').and('exist')
                cy.get('#nav_menu-2')
                    .should('be.visible').and('exist')
                cy.get('#nav_menu-3')
                    .should('be.visible').and('exist')
                cy.get('#nav_menu-4')
                    .should('be.visible').and('exist')
                cy.get('#nav_menu-5')
                    .should('be.visible').and('exist')
                cy.get('#cn-accept-cookie')
                    .should('be.visible').and('exist')
                cy.get('#cn-accept-cookie')
                    .click({force:true})
        
            
                
                })


        
    }


}