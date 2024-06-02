/// <reference types="cypress" />

describe("Test Technique", ()=>{

    before(()=>{
        cy.visit("https://maasil.learnybox.com/page-de-test-maasil/#");
       });

       it('Test de tous les éléments interactifs', () => {
        // Vérification du bouton principal "RECEVEZ VOTRE DOCUMENT GRATUIT"
        cy.get('#button_link_4285615').contains('RECEVEZ VOTRE DOCUMENT GRATUIT').click();
        
      });

      it('Vérification du bouton ACHETER LA FORMATION PIANO et GUITARE', () => {
        // Vérification du bouton "ACHETER LA FORMATION PIANO"
        cy.get('#line1259833').find('#button_link_4285635').contains('ACHETER LA FORMATION PIANO').click();
      
    
        // Vérification du bouton "ACHETER LA FORMATION GUITARE"
        cy.get('#line1259834').find('#button_link_4285639').contains('ACHETER LA FORMATION GUITARE').click();
        
      });
      
})