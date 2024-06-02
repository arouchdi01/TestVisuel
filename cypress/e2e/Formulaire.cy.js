/// <reference types="cypress" />

describe("Test Technique", ()=>{

    before(()=>{
        cy.visit("https://maasil.learnybox.com/page-de-test-maasil/#");
       });

       it('Validation des formulaires', () => {
        // Vérification des formulaires 
        cy.get('#button_link_4285615').contains('RECEVEZ VOTRE DOCUMENT GRATUIT').click();
        
        cy.get('#form_input500729').type('Mohamed');
        cy.get('#form_input500731').type('Abdoulhamid');
       cy.get('#form_input500730').type('abdoulhamidmohamed2004@gmail.com');
       cy.get('#rgpd500732').check();
       cy.get('#btn_submit_500733').contains("Valider").should("be.visible").click();
       
       it.only("Vérification des élements visible", ()=>{
        cy.get('#button_link_4285635').contains('ACHETER LA FORMATION PIANO').click();
        cy.get('.media-body')
          .find('.pricing')
          .should('include.text', '120 €')
          .and('be.visible')
          .then(() => {
             cy.get('#shop-step-1')
               .find('.shop-step-next').contains("Continuer").should("be.visible").click();
           });
       })

      });

});