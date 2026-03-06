
/*
// Fórmula: IMC = peso / (altura * altura)
function calcularIMC(
peso: number,
altura: number
): number {
    
    let imc = peso / (altura * altura)

    return Number(imc.toFixed(2));

}

console.log(calcularIMC(119, 1.83));

/**
 *  rode com ts-node 
 */
/* 
function formatarNome(
  nome: string,
  sobrenome?: string
): string {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    }
    return `Olá, ${nome}!`;
}
    console.log(formatarNome("João Vitor","Costa"))
    console.log(formatarNome("João Vitor"))
 */

/* function verificarMaioridade(
  idade: number
): boolean {
    return idade >= 18;
}
    console.log(verificarMaioridade(20))
    console.log(verificarMaioridade(16))
 */

/* interface Produto {
  id: number;
  nome: string;
  preco: number;
  marca?: string;
  descricao?: string;
}

function formatarProduto(produto: Produto): string {
  let textoProduto = `Produto: ${produto.nome} (ID: ${produto.id})\n Preço: R$ ${produto.preco.toFixed(2)}`;
    if (produto.marca) { 
        textoProduto += `\n Marca: ${produto.marca}`;
    }
    if (produto.descricao) {
        textoProduto += `\n Descrição: ${produto.descricao}`;
    }
    return textoProduto;
}
    console.log(formatarProduto({ 
        id: 1, 
        nome: "Smartphone", 
        preco: 1999.99, marca: "Samsung", 
        descricao: "Tela de 6.5 polegadas" 
    }))
    console.log(formatarProduto({ 
        id: 2, 
        nome: "Notebook", 
        preco: 2999.99, 
        marca: "Dell" 
    }))
    console.log(formatarProduto({ 
        id: 3, 
        nome: "Fone de Ouvido", 
        preco: 199.99, 
        descricao: "Áudio de alta qualidade" 
    }))
    console.log(formatarProduto({ 
        id: 4, 
        nome: "Mouse", 
        preco: 49.99 
    }))
 */
/* 
function filtrarPares(
  numeros: number[]
): number[] {
    return numeros.filter(num => num % 2 === 0);
}
    console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
 */
