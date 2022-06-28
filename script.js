let displayValue = '';
let operator;
let operand = null;
let result = null;

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
    if (b === 0) {
        return 'Error'
    }
    return a / b;
}

function equalsOperation() {
    if (displayValue != '' && operator != '') {
        result = operate(operator, parseFloat(operand), parseFloat(displayValue));
        displayValue = result;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
    if (result === 'Error') {
        displayValue = '';
    }
}

function operate(operator, num1, num2) {
    let innerResult;
    switch (operator) {
        case '+':
            innerResult = add(num1, num2);
            break;
        case '-':
            innerResult = subtract(num1, num2);
            break;
        case '*':
            innerResult = multiply(num1, num2);
            break;
        case '/':
            innerResult = divide(num1, num2);
            break;
        default:
            return;
    }
    innerResult = Math.round(innerResult * 100) / 100;
    return innerResult;
}



const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', function () {
        if (result === displayValue) {
            displayValue = '';
            result = null;
        }
        if (displayValue === '0' && number.textContent === '0') {
            return;
        }
        if (displayValue === '0') {
            displayValue = ''
        }
        displayValue += number.textContent;
        display.textContent = displayValue;
    });
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function () {
    if (operand != null && displayValue != '') {
        equalsOperation();
    }
    if (displayValue != '') {
        operator = '+';
        operand = displayValue;
        displayValue = '';
    }

});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', function () {
    if (operand != null && displayValue != '') {
        equalsOperation();
    }
    if (displayValue != '') {
        operator = '-';
        operand = displayValue;
        displayValue = '';
    }
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', function () {
    if (operand != null && displayValue != '') {
        equalsOperation();
    }
    if (displayValue != '') {
        operator = '*';
        operand = displayValue;
        displayValue = '';
    }
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', function () {
    if (operand != null && displayValue != '') {
        equalsOperation();
    }
    if (displayValue != '') {
        operator = '/';
        operand = displayValue;
        displayValue = '';
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function () {
    displayValue = '';
    operator = '';
    operand = null;
    result = null;
    display.textContent = '0';
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function () {
    if (displayValue != '' && operator != '') {
        result = operate(operator, parseFloat(operand), parseFloat(displayValue));
        displayValue = result;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
    if (result === 'Error') {
        displayValue = '';
    }
});

const invert = document.querySelector('#invert');
invert.addEventListener('click', function () {
    if (displayValue != '') {
        result = operate('*', parseFloat(-1), parseFloat(displayValue));
        displayValue = result;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
});

const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', function () {
    if (displayValue != '') {
        result = operate('/', parseFloat(displayValue), parseFloat(100));
        displayValue = result;
        display.textContent = displayValue;
    }
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function () {
    if (result === displayValue) {
        displayValue = '';
        result = null;
    }
    if (!displayValue.includes('.') && displayValue === '') {
        displayValue = '0.'
        display.textContent = displayValue;
    } else if (!displayValue.includes('.')) {
        displayValue += decimal.textContent;
        display.textContent = displayValue;
    }
});