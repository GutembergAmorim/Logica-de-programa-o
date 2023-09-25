const container = document.getElementById('container')
const p = document.createElement('p')

container.appendChild(p)

p.innerText = 'Texto'

p.setAttribute('class', 'texto') //Primeiro = Atributo, Segundo = Valor do atributo (class = 'texto')
p.setAttribute('id', 'paragrafo')
p.removeAttribute('id') // Remover um atributo


console.log(p.getAttribute('class')) //Recebe o valor do atributo e exibe
