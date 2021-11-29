import {pricingPage} from '../Page Objects/pricing'


/*Description tests
1. On "Lodgify Pricing" page, add a test to verify that the "Yearly" plan selecting 50 rentals displays: 
   $64 for Starter plan
   $375 for Professional plan
   $525 for Ultimate plan
2. On "Lodgify Pricing" page, add a test to verify that the change of currency (located just below the pricing options) properly changes the currency of the pricing options. 
   The way you do so, and the extra verification steps are up to you (such as verifying the currency price difference)
3. Using your own criteria, add tests according to what you think should be important to cover in this page "Lodgify Pricing". (Optional)*/



describe('Lodgify Pricing / Contact page', () => {
    pricingPage.pricingTest1();
    pricingPage.pricingTest2();
    pricingPage.pricingTest3();
})


/* Defects: 
A)- Ultimate plan pricing has wrong pricing:

Description:  When any user wants to check valid pricing for ultimate pricing they can verify that pricing is different than expected it.

Steps:
- 1 -> Log into this URL -> http://localhost:8080/Pricing.html
- 2 -> Change pricing extension to 50
- 3 -> Check pricing valid for this extension

Expected result -> Pricing for Ultimate plan should be 525
Actual result -> Pricing for Ultimate plan actually us 518

*/ 