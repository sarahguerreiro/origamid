/*var videoGames = ['Switch', 'PS4', 'Xbox', 'Steam'];
videoGames.forEach(function(item) {
    console.log(item)
})*/

// crie um array com os anos q o brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002

 //let ganhou = [1959, 1962, 1970, 1994, 2002]

// interaja com o array, utilizando um loop para mostrar no console a mensagem: 'O Brasil ganhou a copa de: '

/*ganhou.forEach(function(item){
    console.log(`O Brasil ganhou a copa de: ${item}`)
})*/

// interaja com um loop nas frutas abaixo e pare ao chegar na pera:

let frutas = ['muruci', 'cupuaçu', 'pupunha', 'uxi'];

for (let item = 0; item < frutas.length; item++) {
    
    console.log(frutas[item]);
    if (frutas[item] === 'cupuaçu') {
        break;
    }
}


// coloque a ultima fruta do array acima em uma variavel sem remover a mesma do array

let ultimoItem = frutas[frutas.length - 1]
console.log(ultimoItem)