
//Locators
const scrollSlide = '#scroll-prop-plan';
const titleData = 'body > div.content-wrapper > div.section.pad-top-0.pad-bot-2 > div.container.container-md > div.property-scroll-box > div.scroll-box > div:nth-child(2) > div.slider-handle.min-slider-handle.round';
const priceData1 = '.price-card-starter > .price-item';
const priceData1Price = '.price-card-starter > .price-item > :nth-child(1) > .plan-price > .total-sum';
const priceData1Label = '.price-card-starter > .price-item > :nth-child(2) > .wd-100 > .btn';
const priceData2 = ':nth-child(2) > .price-item';
const priceData2Price = ':nth-child(2) > .price-item > :nth-child(1) > .plan-price > .total-sum';
const priceData2Label = ':nth-child(2) > .price-item > :nth-child(2) > .wd-100 > .btn';
const priceData3 = ':nth-child(3) > .price-item';
const priceData3Price = ':nth-child(3) > .price-item > :nth-child(1) > .plan-price > .total-sum';
const priceData3Label = ':nth-child(3) > .price-item > :nth-child(2) > .wd-100 > .btn';
const currencyLabel = '.row-sm > :nth-child(1)';
const currencyDropdown = '.price-currency-select';
const priceCard1 = '.price-card-starter > .price-item > :nth-child(1) > .plan-price';
const priceCard2 = ':nth-child(2) > .price-item > :nth-child(1) > .plan-price';
const priceCard3 = ':nth-child(3) > .price-item > :nth-child(1) > .plan-price';
const header = '.head-top-bar > .container';
const menuItem1 = '#menu-item-15007 > .dropdown-toggle';
const menuItem2 = '#menu-item-13168 > .dropdown-toggle';
const menuItem3 = '#menu-item-8806 > .dropdown-toggle';
const menuItem4 = '#menu-item-31 > a';
const menuItem5 = '#menu-item-32 > a';
const pushBot = '.wd-100 > .push-bot-3';
const properties1 = '.property-scroll-box';
const dataPeriod1 = '[data-price-period="1"] > span';
const dataPeriod2 = '[data-price-period="2"]';
const dataPeriod3 = '[data-price-period="3"] > a';
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
const headingBox = '.sct-heading-box';
const footerRow1 = ':nth-child(4) > .container > .row > :nth-child(1)';
const footerRow2 = ':nth-child(4) > .container > .row > :nth-child(2)';
const footerRow3 = ':nth-child(4) > .container > .row > :nth-child(3)';
const navMenu2 = '#nav_menu-2';
const navMenu3 = '#nav_menu-3';
const navMenu4 = '#nav_menu-4';
const navMenu5 = '#nav_menu-5';
const cookiesAccept = '#cn-accept-cookie';


//Test data

const pricingTitle = 'Pricing';
const pricing1 = '64';
const pricing2 = '375';
const pricing3 = '518';
const labelPricing1 = 'Get Started';
const labelPricing2 = 'Get';
const labelPricing3 = 'Started';
const labelCurrencies = 'Do you want to see other currencies?';
const eurosCurrency = 'eur';
const eurosPricing1= '60€';
const eurosPricing2 = '330€';
const eurosPricing3 = '466€';
const gbpCurrency = 'gbp';
const gbpPricing1 = '£51';
const gbpPricing2 = '£294';
const gbpPricing3 = '£414';
const usdCurrency = 'usd';
const usdPricing1 = '$64';
const usdPricing2 = '$375';
const usdPricing3 = '$518';

export class pricingPage  {
    static pricingTest1 (){
        it('Test 1 - Checking pricing plans ', () => {
            cy.visit('http://localhost:8080/Pricing.html');
            cy.title().should('include', pricingTitle);
            cy.get(scrollSlide).clear({force:true})
            cy.get(scrollSlide).type(50)
            cy.get(titleData)
                .should('be.visible').and('exist')
            cy.get(priceData1)
                .should('be.visible').and('exist')
            cy.get(priceData1Price)
                .should('be.visible').and('contain',  pricing1)
            cy.get(priceData1Label)
                .should('be.visible').and('contain', labelPricing1)
            cy.get(priceData2)
                .should('be.visible').and('exist')
            cy.get(priceData2Price)
                .should('be.visible').and('contain', pricing2)
            cy.get(priceData2Label)
                .should('be.visible').and('contain', labelPricing2)
            cy.get(priceData3)
                .should('be.visible').and('exist')
            cy.get(priceData3Price)
                .should('be.visible').and('contain', pricing3 )
            cy.get(priceData3Label)
                .should('be.visible').and('contain', labelPricing3)
              
          })
        }
        static pricingTest2 (){
          it('Test 2 - Checking currencies', () => {
            cy.title().should('include', 'Pricing');
            cy.get(currencyLabel)
              .should('be.visible').and('contain', labelCurrencies)
            cy.get(currencyDropdown)
              .select(eurosCurrency)
            cy.get(priceCard1)
                .should('be.visible').and('contain',  eurosPricing1)
            cy.get(priceCard2)
                .should('be.visible').and('contain', eurosPricing2 )
            cy.get(priceCard3)
                .should('be.visible').and('contain', eurosPricing3)
            cy.get(currencyLabel)
                .should('be.visible').and('contain', labelCurrencies)
            cy.get(currencyDropdown)
                .select(gbpCurrency)
            cy.get(priceCard1)
                .should('be.visible').and('contain', gbpPricing1 )
            cy.get(priceCard2)
                .should('be.visible').and('contain', gbpPricing2 )
            cy.get(priceCard3)
                .should('be.visible').and('contain',gbpPricing3)
            cy.get(currencyLabel)
                .should('be.visible').and('contain', labelCurrencies)
            cy.get(currencyDropdown)
                .select(usdCurrency)
            cy.get(priceCard1)
                .should('be.visible').and('contain', usdPricing1)
            cy.get(priceCard2)
                .should('be.visible').and('contain', usdPricing2 )
            cy.get(priceCard3)
                .should('be.visible').and('contain', usdPricing3 )
        
            
            })
        }
        static pricingTest3 (){
            it('Test 3 - Other page tests', () => {
                cy.get(header)
                    .should('be.visible').and('exist')
                cy.get(menuItem1)
                    .should('be.visible').and('exist')
                cy.get(menuItem2)
                    .should('be.visible').and('exist')
                cy.get(menuItem3)
                    .should('be.visible').and('exist')
                cy.get(menuItem4)
                    .should('be.visible').and('exist')
                cy.get(menuItem5)
                    .should('be.visible').and('exist')
                cy.get(pushBot)
                    .should('be.visible').and('exist')
                cy.get(properties1)
                    .should('be.visible').and('exist')
                cy.get(dataPeriod1)
                    .should('be.visible').and('exist')
                cy.get(dataPeriod1)
                    .click({force:true})
                cy.get(dataPeriod2)
                    .should('be.visible').and('exist')
                cy.get(dataPeriod2)
                    .click({force:true})
                cy.get(dataPeriod3)
                    .should('be.visible').and('exist')
                cy.get(dataPeriod3)
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
                cy.get(headingBox)
                    .should('be.visible').and('exist')
                cy.get(footerRow1)
                    .should('be.visible').and('exist')
                cy.get(footerRow2)
                    .should('be.visible').and('exist')
                cy.get(footerRow3)
                    .should('be.visible').and('exist')
                cy.get(navMenu2)
                    .should('be.visible').and('exist')
                cy.get(navMenu3)
                    .should('be.visible').and('exist')
                cy.get(navMenu4)
                    .should('be.visible').and('exist')
                cy.get(navMenu5)
                    .should('be.visible').and('exist')
                cy.get(cookiesAccept)
                    .should('be.visible').and('exist')
                cy.get(cookiesAccept)
                    .click({force:true})

                
                })
        
    }


}