
//Ele fatia a string em vetores.
let userName = getFirstName("André Felipe de Barros Azevedo Nogueira")

console.log("Seja bem vindo" + userName)

function getFirstName(name){
    //por conter espaço no split ele dividira por eles.
    let firstName = namee.split(" ")[0] //está retornando o vetor 0 ( "André" somente )
    return firstName
}