const href = window.location.href

if (href === 'http://127.0.0.1:5500/dom/index.html') {
 
//window.alert('é o mesmo href')

}

// com o querySelector vc pode acessar um elemento colocando diretamente o nome da tag ou do modo css atraves de .classes ou #ids

const h1selecionado = document.querySelector('h1')

// somando o metodo add ao metodo classList vc consegue adicionar uma class a um elemento html

h1selecionado.classList.add('active')
 const h1Classes = h1selecionado.classList

const titulo = document.querySelector('h1')

titulo.innerText // retorna o texto ;
titulo.classList // retorna as classes;
titulo.id // retorna o id;
titulo.offsetHeight // retorna a ALTURA DO ELEMENTO;

function callbackh1() {
   
  console.log('clicou em', titulo.innerText)
   
}

titulo.addEventListener('click', callbackh1)// ativa a funcao callback ao click no titulo
