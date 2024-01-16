//var videoGames = ['Switch', 'PS4', 'Xbox'];

//videoGames[0] 
//videoGames[2]

//videoGames.pop(); //remove o ultimo item e retorna ele
//videoGames.push('Nitendo Wii'); // adiciona ao final da array
//videoGames.length; 

//let ultimoItem = videoGames.pop()

/*for (let numero = 0; numero <= 10; numero++) {
   
    console.log(numero)
    
}*/

// cuidado com loops, são eles que realmente usam o poder da maquina

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

/*var videoGames = ['Switch', 'PS4', 'Xbox'];

for (let item = 0; item < videoGames.length; item++) {
    
    console.log(videoGames[item])
    
    if (videoGames[item] === 'PS4') {
        let acrescimo = videoGames.push('nitendo wii')
        console.log(acrescimo)
    }
    
}*/

// forEach é um metodo q executa uma funcao para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays


var videoGames = ['Switch', 'PS4', 'Xbox', 'Steam'];
videoGames.forEach(function(item) {
    console.log(item)
})

// o argumento item será atribuido dinamicamente. Podemos passar os seguintes parametros: item, index e array


