//Função é algo que se pode executar diversas vezes
//Função declare nomes que sejam verbos com ações claras
//chamando a função
torrar()
injetarPao()

//"function" é parecido com void em outras linguagens
function toast(){
    consol.log('toasting the bread')
}

function injectBread(){
    consol.log('preparing for inject...')
    consol.log('finish.')
}



//Pode também ocorrer de chamar uma function com diversas functions nela
//exemplo:

function mainData(){
    getData()
    checkValues()
    sendToDatabase()
}

function getData(){
    //action here
}

function checkValues(){
    //action here
}

function sendToDatabase(){
    //action here
}
