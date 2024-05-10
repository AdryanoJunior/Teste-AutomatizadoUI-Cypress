class produtosPage {

    visitarUrl() {
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    }

buscarProduto(nomeProduto) { 
 cy.get('placeholder="Enter your search ..."').eq(1).type(nomeProduto)
}

buscarProdutoLista(nomeProduto) {
    cy.get(' .product-block ')
    .contains(nomeProduto)
    .click()
}

visitarProduto() {

}

addProdutoCarrinho() {


}

}

export default new produtosPage()