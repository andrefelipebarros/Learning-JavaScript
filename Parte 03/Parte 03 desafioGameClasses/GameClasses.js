/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/

  class guildaDB{
    //gerar function 
    constructor(name,idade,tipo,ataque){
      //nome e idade é algo extra.
      this.name = name
      this.idade = idade
      ////////////////////////
      this.tipo = tipo
      this.ataque = ataque
    }

    atacar(){
      console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
  }

  let magoAtaque = new guildaDB("Henrique","17", "mago", "magia")
  let guerreiroAtaque = new guildaDB("Matheus", "26", "guerreiro", "espada")
  let mongeAtaque = new guildaDB("Aguiar", "15", "monge", "artes marciais")
  let ninjaAtaque = new guildaDB("André", "19", "ninja", "shuriken")

  //poderia fazer um swith case para ver futuramente uma lista de cada classe
  //para poder utilizar nome e idade com algum valor.

  magoAtaque.atacar()
  guerreiroAtaque.atacar()
  mongeAtaque.atacar()
  ninjaAtaque.atacar()



