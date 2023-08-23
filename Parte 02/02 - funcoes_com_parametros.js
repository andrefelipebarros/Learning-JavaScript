//passando um parametro para a função
torrar("pão de forma")

function torrar(pao){
    // variavel pao somente existe dentro dessa function

    console.log("torrada feita com " + pao)
}

//SEGUNDO EXEMPLO//
// na chamada não chamei nome e alterei o valor da variável valor
torrar("pão de forma", 10.90)

//declarei a String Cliente a variável nome na function
function torrar(pao, valor= 99.99, nome = 'Cliente'){

    console.log("ele é um pedido de " + nome)
    console.log("torrada feita com " + pao)
    console.log("O valor total é " + valor)
}

//caso você não queira definir o valor utilize undefined
torrar("pão de forma", undefined)
//porém o uso de undefined é ruim, então sempre coloque
//em último na function algo que talvez não queira definir

resultado = soma(5,10)

console.log("O resultado dessa função é " + resultado)

function soma(A,B){
    let somatorio = A + B
    return somatorio
}

//poderia fazer isso também para retornar a soma a variável:
function soma(A,B){
    return A + B
}
//!!!ATENÇÃO RETURN NÃO PODE RETORNAR 2 VARIÁVEIS