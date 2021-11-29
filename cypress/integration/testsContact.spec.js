import {contactPage} from '../Page Objects/contact'

/*Description tests
4. On "Contact" page, add a test to verify that the field validations appear according to the following requirements. 
   "Name" is mandatory and a message should be displayed in case this field is left empty
   "Phone number" is mandatory and a message should be displayed in case this field is left empty
   "Email address" is mandatory and a message should be displayed in case this field is left empty
   "Comment" is mandatory and a message should be displayed in case this field is left empty
   This test should pick the date of arrival "April 14th" and date of departure "June 14" to verify the datepicker is working as expected
   This test should also add a random Lorem Ipsum of your choice to "Comment" field
5. Using your own criteria, add tests according to what you think should be important to cover in this page "Contact". (Optional)
*/


describe('Lodgify Contact page', () => {
  contactPage.contactPageTest4();
  contactPage.contactPageTest5();
})


/* Defects: 
A) Phone mandatory field validation is not working:

Description:  When any user wants to check if phone is considered as a mandatory fields they can verify that this field is not displaying any error message.

Steps:
- 1 -> Log into this URL -> http://localhost:8080/Contact.html
- 2 -> Click on send button
- 3 -> Contact page will display all the mandatory fields error

Expected result -> Phone should be marked as a mandatory field and display an error message
Actual result -> Phone is not a mandatory field and system is not displaying an error message
------------------------------------------------------------------------------------------------------------------------------------------------------------
B) Send contact message is not working:

Description:  When any user wants to send a contact request they can verify that this functionality is not working.

Steps:
- 1 -> Log into this URL -> http://localhost:8080/Contact.html
- 2 -> Fill all the mandatory fields
- 3 -> Click in send button

Expected result -> Contact request should be send to the lodgify team
Actual result -> Contact request is displaying an error label and the request it's not send it.

*/ 