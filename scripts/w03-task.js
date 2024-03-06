/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const number1 = parseFloat(document.getElementById('add1').value);
    const number2 = parseFloat(document.getElementById('add2').value);
    
    document.getElementById('sum').value = add(number1, number2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    const number1 = parseFloat(document.getElementById('subtract1').value);
    const number2 = parseFloat(document.getElementById('subtract2').value);
    
    document.getElementById('difference').value = subtract(number1, number2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    const number1 = parseFloat(document.getElementById('factor1').value);
    const number2 = parseFloat(document.getElementById('factor2').value);
    
    document.getElementById('product').value = multiply(number1, number2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const number1 = parseFloat(document.getElementById('dividend').value);
    const number2 = parseFloat(document.getElementById('divisor').value);
    
    document.getElementById('quotient').value = divide(number1, number2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', () => {
    let total = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    
    if (isMember) {
        total *= 0.8;
    }
    
    document.getElementById('total').textContent = `$ ${total.toFixed(2)}`
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numbers;

/* Output Odds Only Array */
document.getElementById('odds').textContent = numbers.filter((number) => number % 2 === 1);

/* Output Evens Only Array */
document.getElementById('evens').textContent = numbers.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numbers.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').textContent = numbers
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number);
