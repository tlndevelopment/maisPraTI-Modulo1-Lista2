/*
Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: "Harry Potter e a Câmara Secreta",
    autor: "J. K. Rowling",
    anoPublicacao: 1998,
    genero: "Fantasia"
}

function propExiste(prop, objeto) {
    let propExiste = false

    for(key in objeto) {
        if(key === prop) {
            propExiste = true
            break;
        }
    }

    return propExiste
}

function addPropriedade(prop, objeto) {
    objeto[prop] = "Bloomsbury Publishing"
}

if(!propExiste("editora", livro)){
    console.log("Objeto Original: ")
    console.log(livro)

    addPropriedade("editora", livro)

    console.log("\n")
    console.log("Objeto Manipulado: ")
    console.log(livro)
}



