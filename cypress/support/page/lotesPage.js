/// <reference types="Cypress"/>
import lotesElements from "../elements/lotesElements";

const elements = new lotesElements

class lotesPage {
   accessSite() {
    cy.visit(Cypress.config('baseUrl'));
  }

  accessAllEvent() {
    cy.get(elements.btn_next_events()).click()
  }

  acessLote() {
    cy.get(elements.btn_batch()).first().click()
    cy.get(elements.btn_card_bid()).should('be.visible')
    cy.contains('Lote').should('be.visible')
    cy.get(elements.text_description_card()).should('be.visible')
    cy.get(elements.text_values_card()).should('be.visible')
    cy.get(elements.btn_favorite_card()).should('be.visible')
    cy.get(elements.btn_bid_batch_card()).click()
    cy.wait(3000)
    cy.get(elements.btn_exit_bid_batch_card()).click();
    cy.get(elements.btn_info_batch_card()).eq(0).click();
    cy.wait(2000)
    cy.get(elements.btn_photo_batch_card()).eq(0).click();
    cy.get(elements.btn_info_batch_card()).eq(1).click();
    cy.wait(2000)
    cy.get(elements.btn_photo_batch_card()).eq(0).click();
    cy.get(elements.btn_card_bid()).click()
    
  }

  validateLote() {
    cy.contains('Painel de lances').should('be.visible')
    cy.get(elements.btn_photo_bid()).click()
    cy.screenshot()
    cy.get(elements.btn_change_photo_bid()).first().click({ force: true })
    cy.get(elements.btn_change_photo_bid()).first().click({ force: true })
    cy.get(elements.btn_change_photo_bid()).first().click({ force: true })
    cy.get(elements.btn_change_photo_bid()).first().click({ force: true })
    cy.get(elements.btn_change_photo_bid()).first().click({ force: true })
    cy.get(elements.btn_favorite_bid()).should(($element) => {
        expect($element).to.have.attr('aria-haspopup', 'false');
      });
    cy.get(elements.btn_share_bid()).should('be.visible')
    cy.get(elements.text_info_bid()).should('be.visible')
    cy.get(elements.text_description_card_bid()).should('be.visible')
    cy.get(elements.text_location_card_bid()).should('be.visible')
    cy.get(elements.text_next_bid_card()).should('have.text', 'Próximo lance')
    cy.get(elements.btn_bid_options_card()).should('be.visible')
    cy.get(elements.btn_more_information_card_bid()).eq(0).click({ force: true });
    cy.get(elements.text_more_information_card_bid()).scrollIntoView().should('be.visible');
    cy.get(elements.btn_more_information_card_bid()).eq(0).click({ force: true });
    cy.get(elements.btn_more_information_card_bid()).eq(1).click({ force: true });
    cy.get(elements.text_description_card_bid()).scrollIntoView().should('be.visible');
    cy.get(elements.btn_more_information_card_bid()).eq(1).click({ force: true });
    cy.screenshot()
  }
}

export default lotesPage;
