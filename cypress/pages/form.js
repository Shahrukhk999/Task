class form
{
    url_form="http://127.0.0.1:8081/form.html";
open_page()
{
    return cy.visit("http://127.0.0.1:8081/form.html")
}
title()
{
    return cy.title()
}
logo(){
   return cy.get('#if_logo')
}
}
export default form