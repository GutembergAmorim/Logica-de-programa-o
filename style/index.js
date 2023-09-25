// const container = document.getElementById('container');
// const p = document.createElement('p');
// container.appendChild(p);

// p.innerText = 'Texto aqui'

// p.classList.add('hidden')
// p.classList.add('show')

// p.style.fontSize = '50px'
// p.style.color = 'green'

//Adiciona uma class
//Remover uma class

//Remover ou adicinonar

const container = document.getElementById('container')

const h1 = document.createElement('h1')
const p = document.createElement('p')

container.appendChild(h1)
container.appendChild(p)

p.innerText = 'Texto'
h1.innerText = 'Título'

h1.classList.add('titulo')
p.classList.add('texto')


container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.alignItems = 'center'