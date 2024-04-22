/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve fazer login com sucesso', () => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('adryanoqaenginner@gmail.com')
cy.get('#password').type('Junior78$')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adryanoqaenginner (não é adryanoqaenginner? Sair)' )
cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.' )

})
    
})