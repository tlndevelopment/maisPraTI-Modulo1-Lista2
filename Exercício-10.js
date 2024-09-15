/*
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

function venda(produto, quantidade, valor) {
    return {
        produto,
        quantidade,
        valor
    }
}

let v1 = venda("Nintendo Switch", 5, 1500)
let v2 = venda("PS5", 2, 5000)
let v3 = venda("Steam Deck", 3, 4000)

let vendas = [v1, v2, v3]

function totalVendas(vendas) {
    let total = 0
    vendas.forEach(venda => {
        total += venda.quantidade * venda.valor
    });
    return total
}

console.log(`Nossas vendas deram um total de R$ ${totalVendas(vendas).toFixed(2).replace(".", ",")}`)