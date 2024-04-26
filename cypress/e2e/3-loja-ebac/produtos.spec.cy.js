/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    cy.visit('produtos')

});

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block ')
        //.first()
        //.last()
        //.eq(8)
        .contains('Aero Daily Fitness Tee')
        .click()

        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', '“Aero Daily Fitness Tee” foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

    });
});