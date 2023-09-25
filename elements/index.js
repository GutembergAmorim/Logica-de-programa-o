/**Criando uma TAG para o html */
//const p = document.createElement('p');

//Recebe o elemento que tenha uma div chamada container
//const container = document.getElementById('container');


//Adiciona o elemento 'p' ao final do elemento container
//container.appendChild(p)

//Adiciona o elemento 'p' antes de um elemento especifico
//container.insertBefore(p, container.firstChild)

const h1 = document.createElement('h1');
const p = document.createElement('p');

//add tags

const container = document.getElementById('container');

container.appendChild(p)
container.insertBefore(h1, p)

h1.innerText = 'Teste h1'
p.innerText = 'Teste p'

h1.style = "color: red; display: flex; font-family: arial"

