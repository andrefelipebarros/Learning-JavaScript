 let nomesPokemon = ["Pikachu", "Charmander", "Digo", "Mewtwo"]
 //MATRIZ SENDO FEITA EM JS:
 let timePokemon = [
    // COL.1   COL.2  COL.3
    ["Pikachu", "M", "Lvl 1"], //Linha 01
    ["Charmander","F","lvl 4"] //Linha 02
 ]

 //Linha 0 é Pikachu e a 
 //segunda coluna guarda o sexo = "M"
 console.log(timePokemon[0][1]) 

 //agora deixarei mais aesthetic e informarei o nome e sexo da segunda linha = Charmander
 console.log(" O pokemon" + timePokemon[1][0] + "Tem o Sexo: " + timePokemon[1][2])