/// <reference types="cypress" />
const login = require('../fixtures/perfil.json')
import produtosPage from '../support/page_objects/produtos.page';
import { faker } from '@faker-js/faker';
describe('Funcionalidade: Fluxo de pedido', () => {

    beforeEach(() => {
       produtosPage.visitarUrl()
    });

    afterEach(() => {
      cy.screenshot()
    });

  it('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then( dados =>{
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha)
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
      
  });

    });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
  produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
  cy.get('.button-variable-item-M').click()
  cy.get('.button-variable-item-Yellow').click()
  cy.get('.plus').click()
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message').should('contain', '2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
  cy.get('.button-variable-item-L').click()
  cy.get('.button-variable-item-Brown').click()
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message').should('contain', '2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
  cy.get('.woocommerce-message > .button').click()
  cy.get('h2').should('contain', 'Total no carrinho')
  cy.get('.checkout-button').click()
  cy.get('#billing_first_name').type(faker.person.firstName())
  cy.get('#billing_last_name').type(faker.person.lastName())
  cy.get('#billing_address_1').type(faker.location.streetAddress())
  cy.get('#billing_city').type(faker.location.city())
  cy.get('#billing_postcode').type('01521-020')
  cy.get('#billing_phone').type(faker.phone.imei())
  cy.get('#billing_email').type(faker.internet.email())
  cy.get('.woocommerce-form-coupon-toggle > .woocommerce-info').should('contain','Você tem um cupom de desconto? Clique aqui e informe o código do seu cupom de desconto')
  cy.get('#payment_method_bacs').click()
  cy.get('#terms').click()
  cy.get('#place_order').click()
  cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

});

});





