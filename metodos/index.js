const numeros = [2,4,6,8,10]
const numeros2 = []

numeros.map((num, index) => {
    let numeros2 =+ num * 2
    console.log(numeros2)
})

console.log('--------------------------------------------------')

const frutas = ["Maça", "Pera", "Melão", "Banana"]

console.log(frutas)

frutas.push("Abacaxi") //Adiciona um item

console.log(frutas)

frutas.pop() //Remove o ultimo item

console.log(frutas)

frutas.shift() //Remove primeiro item

console.log(frutas)

frutas.unshift('Uva') //Adiciona um item em primeiro

console.log(frutas)

console.log('--------------------------------------------------')


const temps = [12, 30, -5, 20, 50]

function celciusToFahrenheit(arr){
    const fahrentheit = arr.map((temp) => {
        const newTemp = temp * 1.8 + 32
        return newTemp
    })
    return fahrentheit
}

console.log(celciusToFahrenheit(temps))

console.log('--------------------------------------------------')

const number = [2,4,3,5,6,7]

function quadrado(arr){
    const quadrado = arr.map((numb) =>{
        let numeros = numb ** 2
        return numeros
    })
    return quadrado
}

console.log(quadrado(number))


console.log('--------------------------------------------------')

const pares = [1,2,3,4,5,6,7,8,9,10]


function filterPares(arr){
    let numeros = []
    arr.map((num) => {
        if(num % 2 === 0)
            numeros.push(num)
        })
    return numeros
}   

console.log(filterPares(pares))


console.log('--------------------------------------------------')

const texto = ["palavra1", "Palavra 3 ", "Paralelepipedo"]

function stingLen(arr){
    const newArr = []
    arr.map((string) => {
         newArr.push(string.length)
    })  
    return newArr
}

console.log(stingLen(texto))


console.log('--------------------------------------------------')

const medidas = [
    {altura: 10, largura: 15}, 
    {altura: 20, largura: 10}, 
    {altura: 42, largura: 5}, 
    {altura: 28, largura: 5}
];


function calcArea(){
    const result = medidas.map((valor) => {
        let area = valor.altura * valor.largura
        return area
    })
    return result
}

console.log(calcArea(medidas))

console.log('--------------------------------------------------')


const palavras = ["Palmeiras", "Ceará", "Mancherter Uniter", "Brasil"]

// function contVogal(arr){
//     const vogais = ["a", "e", "i", "o", "u"]
//     arr.map((string) => {
//         for
//     })


// }