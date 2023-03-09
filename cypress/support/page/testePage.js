/// <reference types="Cypress"/>

 import testeELments from "../elements/testeElements";

 const ambiente = Cypress.config("baseUrl")


 class testePage {

    acessarsite() {
        cy.visit(ambiente)
    }

    

 }

 export default testePage