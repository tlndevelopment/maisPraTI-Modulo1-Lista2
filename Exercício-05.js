/*
Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

function aluno(nome, nota1, nota2) {
    return {
        nome,
        nota1,
        nota2
    }
}

let a1 = aluno("Fulano", 10, 8)
let a2 = aluno("Beutrano", 10, 5)
let a3 = aluno("Ciclano", 10, 0)

let alunos = [a1, a2, a3]

for(let aluno of alunos) {
    media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`A média do aluno ${aluno.nome} é: ${media.toFixed(1)}`)
}