/**
 * 
 * Snake Case -> calcular_total
 * Camel Case [***] -> calcularToral
 * Pascal Case -> CalcularTotal
 * 
 */

function calcularTotal(preco: number, quantitade: number){
    return preco * quantitade;
}

/**
 * Arrow function
 */

const calcularDesconto = (preco: number, percentual: number): number => {
    return preco - (preco * percentual) /100
}


const saudação = (nome: string, sobrenome?: string): string =>{
    return sobrenome ? `COÉ Rapa ${nome} ${sobrenome}`
                     : `COÉ Rapa ${nome}`
}