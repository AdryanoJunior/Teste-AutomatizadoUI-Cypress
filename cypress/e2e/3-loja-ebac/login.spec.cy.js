/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
    cy.visit('minha-conta')   
    });

    afterEach(() => {
        cy.screenshot()
    });

it('Deve fazer login com sucesso', () => {
cy.get('#username').type('adryanoqaenginner@gmail.com')
cy.get('#password').type('Junior78$')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adryanoqaenginner (não é adryanoqaenginner? Sair)' )

});

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
cy.get('#username').type('junin8qaenginner@gmail.com')
cy.get('#password').type('Junior78$')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
cy.get('.woocommerce-error').should('exist')

});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
cy.get('#username').type('adryanoqaenginner@gmail.com')
cy.get('#password').type('Junin78$')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail adryanoqaenginner@gmail.com está incorreta. Perdeu a senha?' )
cy.get('.woocommerce-error').should('exist')

});

it('Deve fazer login com sucesso - Usando massa de dados', () => {
cy.get('#username').type(perfil.usuário)
cy.get('#password').type(perfil.senha)
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adryanoqaenginner (não é adryanoqaenginner? Sair)' )
});

it('Deve fazer login com sucesso - Usando Fixture ', () => {
cy.fixture('perfil').then( dados => {
    cy.get('#username').type(dados.usuário), {log: false}
    cy.get('#password').type(dados.senha , {log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adryanoqaenginner (não é adryanoqaenginner? Sair)' )    
})

});

it.only('Deve fazer login com sucesso - Usando Comandos Customizados', () => {
   cy.login('adryanoqaenginner@gmail.com', 'Junior78$' )
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adryanoqaenginner (não é adryanoqaenginner? Sair)' )

});

})
    
