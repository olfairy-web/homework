

function hello(name) {
    return `Hello "${name}"`
}

console.log(hello(`Витя`))

// Числа больше 10

const numbers = [2, 8, 10, 18, 39]
function printNumbersGreaterThanTen(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i]);
        }
    }
}
printNumbersGreaterThanTen(numbers);


// калькулятор

function calcNumbers(num1, num2, opiration) {
    if (opiration == 'plus') {
        return num1 + num2
    } else if (opiration == 'minus') {
        return num1 - num2
    } else if (opiration == 'multiply') {
        return num1 * num2
    } else if (opiration == 'divide') {
        return num1 / num2
    }
}
const result = calcNumbers (2, 3, 'minus')
console.log(`Результат операции 'minus' для (2, 3): ${result}`)



