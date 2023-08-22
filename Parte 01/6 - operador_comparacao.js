let marca = "Apple"
console.log(marca !== "Samsung")

// "=" é atribuição
// "==" é para comparar o valor
// "===" é para comparar o valor e o formato do conteúdo
// "!==" é diferente ?



//guardar o valor em uma variável de resultado TRUE?FALSE
let marcaa = "Apple"
let resultado = marcaa === "Samsung"

console.log(resultado)

//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
//igualando e conferindo:
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)


//Operadores  &&  ||  

// AND (&&) 
let idade = 17
let visto = true
console.log((idade >= 18) && (visto === true))
let result = (idade >= 18) && (visto === true)

console.log(result)
//result: false