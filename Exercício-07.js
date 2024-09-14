/*
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

function produto(nome, preco, desconto) {
    return {
        nome,
        preco, 
        desconto
    }
}

let p1 = produto("Nintendo Switch", 1500, 10)
let p2 = produto("PS5", 5000, 10)
let p3 = produto("Steam Deck", 4000, 10)

let produtos = [p1, p2, p3]

produtos.forEach(produto => {
    let descontado = produto.preco - (produto.preco*(produto.desconto/100))
    console.log(`Um ${produto.nome} tem o preço original de R$ ${produto.preco.toFixed(2).replace(".", ",")},`+
    ` mas com o desconto de ${produto.desconto}% fica no valor de R$ ${descontado.toFixed(2).replace(".", ",")}`)
})