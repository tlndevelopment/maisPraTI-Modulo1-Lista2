/*
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

function transacao(tipo, valor) {
    return {
        tipo, 
        valor
    }
}

let t1 = transacao("Entrada", 2000)
let t2 = transacao("Saída", 500)
let t3 = transacao("Saída", 1000)
let t4 = transacao("Entrada", 200)
let t5 = transacao("Saída", 100)

let transacoes = [t1, t2, t3, t4, t5]

function saldoFinal(transacoes) {
    let saldoFinal = 0
    transacoes.forEach(transacao => {
        if(transacao.tipo === "Entrada")
            saldoFinal += transacao.valor
        else
            saldoFinal -= transacao.valor
    })
    return saldoFinal
}

console.log(`O saldo final das transações ficou em R$ ${saldoFinal(transacoes).toFixed(2).replace(".", ",")}`)