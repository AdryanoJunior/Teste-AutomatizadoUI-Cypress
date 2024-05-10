/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    produtosPage.visitarUrl()

});

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get(' .product-block ')


        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', '“Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

    });
});

it('Deve buscar um produto com sucesso', () => {
    produtosPage.buscarProduto('Arcadio Gym Short')
});

it.only('Deve visitar a página do produto', () => {
    produtosPage.visitarProduto()
});

it('Deve adicionar produto ao carrinho', () => {
    
});
