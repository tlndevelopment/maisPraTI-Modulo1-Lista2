/*
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

function funcionario(nome, cargo, salario) {
    return {
        nome, 
        cargo, 
        salario
    }
}

let f1 = funcionario("Fulano", "DEV", 5000)
let f2 = funcionario("Ciclano", "RH", 2500)
let f3 = funcionario("Beutrano", "Gerente", 20000)

let funcionarios = [f1, f2, f3]

for(let funcionario of funcionarios) {
    if(funcionario.salario > 3000) {
        console.log(funcionario)
    } 
}