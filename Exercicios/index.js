const primeiroValor = document.querySelector("#primeiro");
const segundoValor = document.querySelector("#segundo");
const btnCalcular = document.querySelector("#calcular");
const result = document.querySelector("#result");

btnCalcular.addEventListener('click', () => {
    let value1 = Number(primeiroValor.value)
    let value2 = Number(segundoValor.value)
    let sum = value1 * value2
    result.innerText = sum;
});