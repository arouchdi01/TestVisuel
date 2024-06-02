/// <reference types="cypress" />

describe("Test Technique", ()=>{ 

   /* it('Validation des formulaires de paiement avec GET', () => {
        cy.request('GET', "https://maasil.learnybox.com/page-vente-formation-piano/")
          .its('status')
          .should('equal', 200);  
    });

    it('Validation des formulaires de paiement avec POST', () =>{
        cy.request({
            method: 'POST',
            url: 'https://maasil.learnybox.com/page-vente-formation-piano/',
            body: {
                  '#nom': 'chamsoudine',
                  '#prenom': 'djawad',
                  '#email' : 'chamsoudinedjawad@gmail.com',
                  '#adresse' : 'Fass delorme',
                  '#cp' : '114007', 
                  '#ville' : 'Paris',
                  '#select2-pays-n7-container' : 'France',
                }
        })

        .its('status')
        .should('equal', 200)
    })
*/
    it('Validation des formulaires de paiement avec POST', () =>{
        cy.visit('https://maasil.learnybox.com/page-vente-formation-piano/')
        cy.get(':nth-child(3) > .shop-step-next').click();
        cy.get('[class="input-group"]') 
          .find('#nom').type("Rouchdi")
    })
});
