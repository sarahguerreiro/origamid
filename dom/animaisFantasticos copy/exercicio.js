// Retorne no console todas as imagens  do site

const imgAll = document.querySelectorAll('img')
console.log(imgAll)


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagem = document.querySelectorAll('img[src^="img/bufalo.jpg"]')
console.log(imagem)

//Selecione todos os links internos(onde o href começa com #)

const linksInternosAll = document.querySelectorAll('[href^="#"]')
console.log(linksInternosAll)

// Selecione o 1o h2 dentro de .animais-desricao

const primeiroH2 = document.querySelector('h2')
console.log(primeiroH2)

// selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length-1])