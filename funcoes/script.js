function areaQuadrado(lado) {
    return lado * lado /2
}



console.log(areaQuadrado(20))

function  pi() {
    return 3.14;
}

let total = 5 * pi()

console.log(total)

function imc(peso, altura) {
    var imc = peso/ altura * altura
    return imc
}

console.log(imc(70, 1.68))


function corFav(cor) {
    if (cor === 'azul') {
        return 'eu gosto do ceu'
    } else if (cor === 'verde') {
        return 'eu gosto de mato'
    } else if (cor === 'rosa') {
        return 'eu gosto de amor'
    } else {
        return 'eu nao curto cores'
    }
}

console.log(corFav())


/*addEventListener('click', function(){console.log('oi')})
*/

function faltaVisitar(paisesVisitados) {
    return `Falta visitar${totalPaises - paisesVisitados} países`
}
let totalPaises = 193;

console.log(totalPaises)

function dados() {
    var nome = "Sarah"
    var idade = 27
    function outrosDados() {
        let endereco = 'São Paulo'
        let  pets = 5
        return `${nome}, ${pets}`
    }
    return outrosDados()
}

console.log(dados())