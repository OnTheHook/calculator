function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return;
    }
    return result;

}

let displayValue = '';
let operand;
let operator;
let result = null;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', function () {
        if (result === displayValue) {
            displayValue = '';
            result = null;
        }
        displayValue += number.textContent;
        display.textContent = displayValue;
    });
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function () {
    operator = '+';
    operand = displayValue;
    displayValue = '';
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', function () {
    operator = '-';
    operand = displayValue;
    displayValue = '';
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', function () {
    operator = '*';
    operand = displayValue;
    displayValue = '';
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', function () {
    operator = '/';
    operand = displayValue;
    displayValue = '';
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function () {
    displayValue = ''
    operator = ''
    display.textContent = '0'
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function () {
    result = operate(operator, parseFloat(operand), parseFloat(displayValue));
    displayValue = result;
    display.textContent = displayValue;
});