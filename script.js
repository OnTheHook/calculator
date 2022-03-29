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
    }
    return result;

}

let displayValue;
let operand;
let operator;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', function () {
        display.textContent = number.textContent;
        displayValue = number.textContent;
    });
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function () {
    operator = '+';
    operand = displayValue;
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function() {
    displayValue = operate(operator, parseFloat(operand), parseFloat(displayValue));
    display.textContent = displayValue;
});