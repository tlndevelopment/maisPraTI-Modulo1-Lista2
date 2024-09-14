/*
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

function pessoa(nome, idade, cidade) {
    return {
        nome, 
        idade, 
        cidade
    }
}

let p1 = pessoa("Edu", "24", "Porto Alegre")
let p2 = pessoa("Tássio", "30", "Porto Alegre")
let p3 = pessoa("Fulano", "50", "Erechim")

let pessoas = [p1, p2, p3]

for(let pessoa of pessoas) {
    console.log("Nome: " + pessoa.nome)
    console.log("Idade: " + pessoa.idade)
    console.log("Cidade: " + pessoa.cidade)
    console.log("\n")
}