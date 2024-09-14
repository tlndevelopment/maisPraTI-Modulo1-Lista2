/*
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

function filme(titulo, diretor, anoLancamento) {
    return {
        titulo, 
        diretor, 
        anoLancamento
    }
}

let f1 = filme("Matrix", "Irmãs Wachowski", 1999)
let f2 = filme("Vingadores: Ultimato", "Irmãos Russo", 2019)
let f3 = filme("O Senhor dos Anéis", "Peter Jackson", 2002)

let filmes = [f1, f2, f3]
let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)