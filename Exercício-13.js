/*
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

function item(nome, quantidade, precoUnitario) {
    return {
        nome, 
        quantidade, 
        precoUnitario 
    }
}

let it1 = item("Nintendo Switch", 3, 1500)
let it2 = item("PS5", 1, 5000)
let it3 = item("Xbox Series S", 2, 2500)

let itens = [it1, it2, it3]

let carrinho = {
    itens: itens
}

function valorTotalCarrinho(carrinho) {
    let valorTotal = 0
    carrinho.itens.forEach(item => {
        valorTotal += item.quantidade * item.precoUnitario
    })
    return valorTotal
}

console.log(`O valor total do carrinho é R$ ${valorTotalCarrinho(carrinho).toFixed(2).replace(".", ",")}`)
