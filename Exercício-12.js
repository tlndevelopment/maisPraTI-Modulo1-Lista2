/*
Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

function item(produto, quantidade, minimo) {
    return {
        produto, 
        quantidade, 
        minimo 
    }
}

let it1 = item("Nintendo Switch", 20, 10)
let it2 = item("PS5", 2, 10)
let it3 = item("Xbox Series X", 7, 8)

let estoque = [it1, it2, it3]

console.log("Estoque antigo: ")
console.log(estoque)

estoque.forEach(item => {
    if(item.quantidade < item.minimo)
        item.quantidade *= 2
});

console.log("\n")
console.log("Estoque atualizado: ")
console.log(estoque)