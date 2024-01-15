var pessoa = {
    nome: 'Sarah',
    idade: 28
}

console.log(pessoa.idade)

// métodos: é uma propriedade que possuui uma função no local do seu valor

// nesse exemplo temos quadrado como um objeto e a chave que tem como valor uma função seria um método

let quadrado = {

    lados: 4,
// a funcao dentro de area é uma funcao anonima, em que seu nome é o nome da chave, nesse caso area:
    area: function (lado) {
        return lado * lado
    },

// a partir da atualizacao ES6 do js, sempre q vc tiver um metodo (area e perimetro, nesse caso) dentro de um objeto, vc pode escrever o metodo dessa maneira:

    perimetro(lado) {
        return this.lados * lado;

// o this faz referencia ao objeto. Entao quando vc usa o this.lados, vc esta acessando o valor de uma chave q existe nesse objeto, sem precisar ficar se repetindo
    },

}

console.log(quadrado.lados);
console.log(quadrado.area(8));
console.log(quadrado.perimetro(8));

var menu = {
    width: 800,
    height: 100,
    backgroundColor: '#666'
}

// assim vc accessa o valor da propriedade especificada apos o ponto, do objeto especificado antes do ponto:

menu.backgroundColor


// assim vc acessa o valor da propriedade e atribui um novo valor  a ela (dot notation set): 

menu.backgroundColor = '#111'


// assim vc atribui a uma variavel o acesso ao valor desta propriedade(backgroundColor) do objeto(menu):

let bg = menu.backgroundColor

// vc tbm pode adcionar novas propriedades e novos metodos ao objeto assim:

menu.color = 'blue'

menu.esconder = function () {
    console.log('escondi')
}

// palavra-chave this: sempre fará uma referencia ao proprio objeto

var height = 50

var menu = {
    width: 800,
    height: 100,
    backgroundColor: '#666',
    metadeHeight() {
        return this.height / 2
    }
}

// com o uso do this, vc garante que pegara a propriedade deste objeto, sem correr o risco de acabar acessando uma variavel de fora do escopo so pq tem o mesmo nome.


// prototipo e heranca: um objeto herda propriedades e metodos doo objeto que foi utlizado em sua criação