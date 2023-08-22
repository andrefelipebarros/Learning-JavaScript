///////// SECOND SCRIPT JS: //////////

//constante se usa quando é algo que não muda
//, essa é a diferença de let para const

//"const" NÃO OCORRE MUDANÇA
const notificacao = 'Pokemon Go diz:'
//output
console.log(notificacao + "tem um novo pokemon na região")
console.log(notificacao + "você foi ")
///////////////////////////////////////////

////////// SCRIPT JS: /////////

// USAREMOS BASE DE DECLARAÇÃO DE VARIÁVEL
// O MÉTODO **CAMELCASE** PARA OS NOMES

let poteCafe = "Café Pilão"
let poteAcucar = "Açucar cristal"
let poteBiscoito = "Biscoito Maizena"

console.log("Na cozinha da Vovó hoje tem:" +
poteCafe + "--" +
poteAcucar + "--" +
poteBiscoito
)

//MUDANÇA OCORRENDO DEVIDO O USO DE "let"
poteCafe = "Cafe 3 corações"

console.log("Na cozinha da Vovó hoje tem:" +
poteCafe + "--" +
poteAcucar + "--" +
poteBiscoito
)