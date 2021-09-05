import Home from "../../pages/home"
import Form from "../../pages/form"
import Error from "../../pages/error"
import { And, Given,Then, When} from "cypress-cucumber-preprocessor/steps";

const url = "http://127.0.0.1:8081";


const home = new Home()
const form = new Form()
const error =new Error()

Given('I open localhost page', () => 
{
  home.open_page()
});
Then('The Title should be {string} on every site', (content) => {
    home.title().should('eq',content);
    form.open_page;
    form.title().should('eq',content);
    error.open_page;
    error.title().should('eq',content);
});

When('I open website page', () => 
{
  cy.visit(url);
});
Then('The Company Logo should be visible on every site', () => 
{
  home.logo_on_home_page().should('be.visible')
  form.open_page();
  form.logo().should('be.visible')
  error.open_page();
  error.logo().should('be.visible')
});
When('I open website page', () => 
{
  cy.visit(url);
});
And('I click on home button',()=>
{
home.button_home_click();
})
Then('It should navigate to home page', () => 
{
  cy.get('h1').contains('Welcome to Pixelmatic QA department')
});


Given('I open website', () => 
{
  home.open_page();
});
When('I click on the Home button', () => 
{
  home.button_home_click();
});
Then('it should turn to active status', () => 
{
  cy.get('ul').children('.active').children().should('have.id', 'home')
});

When('I click on the Form button', () => 
{
  home.click_on_form_button();
  //cy.get('#form').should('be.visible').click()
});
Then('I should get navigated to the Form page', () => 
{
  cy.url().should('eq',form.url_form) 
});
And('Its status should be active',()=>{
  cy.get('ul').children('.active').children().should('have.id', 'form')
});

When('I click on the Error button', () => 
{
  home.click_on_error_button();
});
Then('I should get {string} response code', (content) => 
{
  cy.wait(500)
  cy.get('h1').contains(content)
});

When('I click on the UI Testing button', () => 
  { 
    home.open_page();
    home.click_on_ui_testing_button()
  });
Then('I should get navigated to the home page', () => 
  {
    cy.get('ul').children('.active').children().should('have.id', 'home')
    
  });
  When('i visit home page', () => 
  { 
    home.open_page();
  });
Then('The following text {string} should be visible on the Home page in h1 tag', (content) => 
  {
    cy.get('h1').contains(content)
       
  });
  And('The following text {string} should be visible on the Home page in p tag',(content)=>{
    cy.get('.lead').contains(content)
  });

When('I visit form page', () => 
  { 
    form.open_page();
  });

Then('I should see a textbox', () => 
  {
    cy.get('#hello-input').should('be.visible')
    
  });
And('One submit button',()=>{
cy.get('#hello-submit').should('be.visible')
});
When('I open form page', () => 
  { 
    form.open_page();
  });

And('I entered',(datatable)=>{
  datatable.hashes().forEach(element =>{
    cy.get('#hello-input').type(element.value)
    cy.get('#hello-submit').should('be.visible').click()
    cy.get('#hello-text').contains(element.result)
    cy.wait(500)
    cy.go('back')
    cy.get('#hello-input').clear()
  })
  });
