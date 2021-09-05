class error
{
     url_error="http://127.0.0.1:8081/error.html";
open_page()
{
    return cy.visit("http://127.0.0.1:8081/error.html")
}
title()
{
    return cy.title()
}
logo()
{
    return cy.get('#if_logo')
}
}
export default error