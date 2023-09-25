/**Selecionar elementos no JS
 * document.getElementId('id do elemento') -> Retorna um unico elemento
 * document.getElementsbyClassName('noma da classe') -> retorna os elementos que possuem a classe
 * document.getElementsByTagName('nome da tag') -> retorna os elementos que possuem a tag
 * document.querySelector('Query da busca') ->
 * document.querySelectorAll('Query da busca')
 */


function lista (){
    const lista = document.getElementById('container')
    lista.innerHTML = `
    <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ol>`
}

lista()