/// <reference types="cypress" />

describe("Test Technique", ()=>{

    before(()=>{
        cy.visit("https://maasil.learnybox.com/page-de-test-maasil/#");
       });

    it("Verification visuel de la conformite de la page", ()=>{
        // Vérification du titre principal
    cy.get('h1').should('contain', 'Vous aimez la musique ? Nous sommes là pour vous accompagner !');
    // Vérification du sous-titre
    cy.get('h4').should('contain', 'Vous voulez devenir un artiste ? Téléchargez notre document gratuit pour démarrer votre apprentissage.');
    // Vérification du bouton principal
    cy.get('#button_link_4285615').should('contain', 'RECEVEZ VOTRE DOCUMENT GRATUIT');
    // Vérification de la section d'appel à l'action
    //cy.get('.texte').should('contain', 'Vous souhaitez passer à la vitesse supérieure et atteindre le succès ?');

    cy.get('#colcontainer2337399')
    .find('h2')
    .should('contain', 'Vous souhaitez passer à la vitesse supérieure et atteindre le succès ?')
    })
})