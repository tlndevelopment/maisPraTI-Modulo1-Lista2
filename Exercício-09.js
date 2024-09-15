/*
Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

function cliente(nome, idade, cidade) {
    return {
        nome,
        idade,
        cidade
    }
}

let c1 = cliente("Fulano", 35, "Porto Alegre")
let c2 = cliente("Beutrano", 30, "São Paulo")
let c3 = cliente("Ciclano", 47, "Rio de Janeiro")

let clientes = [c1, c2, c3]

function contaClientesMais30Anos(clientes) {
    let count = 0
    clientes.forEach(cliente => {
        if(cliente.idade > 30)
            count++       
    });
    return count
}

console.log(`Temos ${contaClientesMais30Anos(clientes)} com mais de 30 anos`)