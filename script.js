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
        if (String(result).length >= 13) {
            result = result.toExponential(6);
        }
        displayValue = result;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
    if (result === 'Error') {
        displayValue = '';
        operand = null;
        result = null;
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
    if (innerResult != 'Error') {
        innerResult = Math.round(innerResult * 100) / 100;
    }
    return innerResult;
}

function removeTransition(e) {
    this.classList.remove('numberPressed');
}

function removeTransitionOperator(e) {
    this.classList.remove('operatorPressed');
}

function removeTransitionFunction(e) {
    this.classList.remove('functionPressed');
}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const functs = document.querySelectorAll('.function');
const operators = document.querySelectorAll('.operator');

functs.forEach(funct => funct.addEventListener('transitionend', removeTransitionFunction));
operators.forEach(operator => operator.addEventListener('transitionend', removeTransitionOperator));


numbers.forEach(number => {
    number.addEventListener('click', function () {
        number.classList.add('numberPressed');
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
        if (displayValue.length >= 12) {
            return;
        }
        displayValue += number.textContent;
        display.textContent = displayValue;
    });
});

numbers.forEach(number => number.addEventListener('transitionend', removeTransition));

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
    addButton.classList.add('operatorPressed');
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
    subtractButton.classList.add('operatorPressed');
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
    multiplyButton.classList.add('operatorPressed');
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
    divideButton.classList.add('operatorPressed');
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function () {
    displayValue = '';
    operator = '';
    operand = null;
    result = null;
    display.textContent = '0';
    clearButton.classList.add('functionPressed');
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', function () {
    if (displayValue != '' && operator != '') {
        result = operate(operator, parseFloat(operand), parseFloat(displayValue));
        if (String(result).length >= 13) {
            result = result.toExponential(6);
        }
        displayValue = result;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
    if (result === 'Error') {
        displayValue = '';
        operand = null;
        result = null;
    }
    equals.classList.add('operatorPressed');
});

const invert = document.querySelector('#invert');
invert.addEventListener('click', function () {
    if (displayValue != '') {
        result = operate('*', parseFloat(-1), parseFloat(displayValue));
        displayValue = result;
        display.textContent = displayValue;
    }
    invert.classList.add('functionPressed');
});

const percentage = document.querySelector('#percentage');
percentage.addEventListener('click', function () {
    if (displayValue != '') {
        result = operate('/', parseFloat(displayValue), parseFloat(100));
        displayValue = result;
        display.textContent = displayValue;
    }
    percentage.classList.add('functionPressed');
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function () {
    decimal.classList.add('numberPressed');
    if (result === displayValue) {
        displayValue = '';
        result = null;
    }
    if (displayValue.length >= 12) {
        return;
    }
    if (!displayValue.includes('.') && displayValue === '') {
        displayValue = '0.'
        display.textContent = displayValue;
    } else if (!displayValue.includes('.')) {
        displayValue += decimal.textContent;
        display.textContent = displayValue;
    }
});

decimal.addEventListener('transitionend', removeTransition);