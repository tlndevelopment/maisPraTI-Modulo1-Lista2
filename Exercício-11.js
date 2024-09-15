/*
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

function pedido(cliente, produto, quantidade) {
    return {
        cliente, 
        produto, 
        quantidade 
    }
}

let p1 = pedido("Fulano", "Memória Ram", 2)
let p2 = pedido("Beutrano", "Fone de Ouvido", 5)
let p3 = pedido("Fulano", "Placa de Vídeo", 1)

let pedidos = [p1, p2, p3]

function produtosPorCliente(pedidos, cliente) {
    let produtosPorCliente = {}
    pedidos.forEach(pedido => {
        if(produtosPorCliente[pedido.cliente])
            produtosPorCliente[pedido.cliente]++
        else
            produtosPorCliente[pedido.cliente] = 1
    });

    if(produtosPorCliente[cliente] != undefined)
        return `O cliente ${cliente} comprou um total de ${produtosPorCliente[cliente]} produto(s)`
    else
        return `O cliente ${cliente} não foi encontrado`
}

console.log(produtosPorCliente(pedidos, "Fulano"))
