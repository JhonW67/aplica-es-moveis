/*
const alunos = []

alunos.push(1)
alunos.push("")
alunos.push(new Date().getFullYear())
*/
/*
    Tipando uma Array com tipos normal e demonstrando erro

let notas: number = []

notas.push("")
*/

/*
    Tipando uma Array com o tipo da LP Array e tipando <tipo>

let salário: Array<number> = []

salário.push(1.5)
salário.push(2)
salário.push(1)

*/

const alunos : { name: string, idade: number, salarioMes: number[] }[] = []

alunos.push({
    name: "João Vitor",
    idade: 23,
    salarioMes: [200, 500, 700]
})
//alunos = [{João Vitor, 23, salarioMes: 200,500,700}]

alunos[0].salarioMes.push(2000)

//alunos = [{João Vitor, 23, salarioMes: 200,500,700,2000}]

let usuarios: [string, number] = ["Jonas", 28] 