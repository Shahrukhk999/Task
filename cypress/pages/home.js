class home
{
open_page()
{
    return cy.visit('http://127.0.0.1:8081')
}
title()
{
    return cy.title()
}
logo_on_home_page()
{
    return cy.get('#if_logo')
}
button_home_click (){
    return cy.get('#home').should('be.visible').click()
}
click_on_form_button(){
    return cy.get('#form').should('be.visible').click()
}
click_on_error_button(){
    return cy.get('#error').should('be.visible').click()
}
click_on_ui_testing_button(){
    return cy.get('#site').should('be.visible').click()
}
}

export default home