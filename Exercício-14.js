/*
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

function funcionario(nome, profissao) {
    return {
        nome,
        profissao
    }
}

let f1 = funcionario("Fulano", "DEV Backend")
let f2 = funcionario("Ciclano", "DEV Frontend")
let f3 = funcionario("Beutrano", "Tech Lead")

let f4 = funcionario("Fulana", "Auxiliar de RH")
let f5 = funcionario("Ciclana", "Gerente de RH")

function departamento(nome, funcionarios) {
    return {
        nome,
        funcionarios
    }
}

let d1 = departamento("RH", [f4, f5])
let d2 = departamento("TI", [f1, f2, f3])

let empresa = {
    departamentos: [d1, d2]
}

for(d in empresa.departamentos) {
    for(let f of empresa.departamentos[d].funcionarios)
        console.log(`Departamento de ${empresa.departamentos[d].nome}: Funcionário(a) ${f.nome}`)
}