// crie uma função pra identificar se um valor é true

function isTruthy(dado) {
    return !!dado
}

console.log(isTruthy)

//crie uma função matematica que retorne o perimetro de um quadrado

function perimetroQuadrado(lado) {
    return lado * 4
}

console.log(perimetroQuadrado(10))

// Crie uma funcao que retorne um nome completo

function nomeCompleto(nome, sobrenome) {
    return nome + sobrenome
}

console.log('sarah', 'silva', 'guerreiro')

// Crie uma funcao que verifica se um numero é par

function par(numero) {
  return numero % 2 === 0 
}

console.log(par(3))

// crie umafuncao que verifica a partir da idade se a pessoa é ou nao da 3a idade

function terceiraIdade(idade) {
    
    if (typeof idade !== 'number') {
        return 'Por favor, insira sua idade'
    }else if (idade >= 60) {
        return true;
    } else {
        return false;
    }

}

console.log(terceiraIdade(14))

//crie uma função que verifica quantos países faltam pra vc visitar

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`
}