// crie um objeto com os seus dados pessoais, deve possuir pelo menos 2 prop, nome e sobrenome

let dadosPessoais = {
    nome: 'sarah',
    sobrenome: 'Guerreiro',
    idade: 27,
    cidade: 'São Paulo'
}

// crie um metodo no objeto anterior que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'audi',
}

carro.preco = 3000;

// crie um objeto de um cachorro que represente um labrador preto, com 10 anos e que late ao ver homem

let cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if (pessoa === 'homem') {
          return "au, au"
        } else {
            return 'sou mansinho'
        }
         
    }
}