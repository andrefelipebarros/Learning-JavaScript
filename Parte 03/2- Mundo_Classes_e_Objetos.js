class formaDeBolo{
    //criando método construtor(obrigatorio existir constructor)
    constructor(saborDaMassa, saborRecheio){
        //variável
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    //function escrever
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com \ 
        recheio de ${this.saborRecheio}`)
    }
}
//puxando function escrever:
boloFesta.escrever()

//Gerando bolos:
let boloBaunilha = new formaDeBolo("Massa de Baunilha", "Sorvete")
let boloFesta = new formaDeBolo("Massa de Chocolate", "Recheio de Nutella")

//informacoes do bolo
console.log(boloFesta)

//puxando somente recheio:
console.log(boloFesta.saborRecheio)

//Function porém utilizando boloBaunilha
boloBaunilha.escrever()