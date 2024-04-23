/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

});

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block ')
        //.first()
        //.last()
        //.eq(8)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()

        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

    });
});