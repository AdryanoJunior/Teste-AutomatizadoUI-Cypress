/// <reference types="cypress" />

const cypress = require("cypress")

context('Funcionalidade Login , () =>{
 
    it('Deve fazer login com sucesso' , () => {
        cy.visit("https://www.palmeiras.com.br/")
    } )

    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos' () => {

    })
})

