/*
Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

let obj = {
    preco: 99.99,
    tamanho: 50,
    largarua: 10,
    mensagem: "olá mundo!"
}

function verificaValoresMaiores(obj, valor) {
    retorno = {}

    for(let key in obj) {
        if(!Number.isNaN(valor) && !Number.isNaN(obj[key]) && obj[key] > valor) {
            retorno[key] = obj[key]
        }
    }

    return retorno
}

console.log(verificaValoresMaiores(obj, 10))