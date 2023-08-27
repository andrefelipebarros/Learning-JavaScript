// JSON - JavaScript Object Notation //
// Objeto simples composto por chave e valor com objetivo de transferir dados


//SEM A UTILIZAÇÃO DO JSON PARA FAZER A CHAMADA DE TRANSFERENCIA
let name = "Felipe"
let age = 28
let products = ["mouse 2xwn", "Teclado Mecanico", "Monitor Mancer"]
let productsValues = ["29.90", "129.90", "899.99"]

generateInvoice(name, products, productsValues,age)

function generateInvoice(){
    console.log("o comprador é: " + name)
    console.log("a idade é: " + age)
    console,log("------------------------")
    console.log("o produto é: " + products)
    console.log("o valor é: " + productsValues) 
}


//COM A UTILIZAÇÃO DO JSON PARA FAZER A CHAMADA DE TRANSFERENCIA

//Meio que você gera um dicionário com as variáveis.
let invoice = {
    name:"Felipe",
    age: 28,
    //lista de produtos:
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Tecaldo mecanico", 129.99],
        2: ["Monitor", "899.99"],
    }
}

console.log(invoice.name) //fazendo chamada somente do name

console.log(` O comprador é ${invoice.name}`) //chamada utilizando o f-strings e invoice

console.log(invoice.products) //Vai aparecer OBJECT OBJEC para percorrer a lista use for in

//fazer um loop para percorrer uma lista e printar na tela
for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(` - ${productName}: ${productPrice}`)
}




