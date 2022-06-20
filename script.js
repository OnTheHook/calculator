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
    return a / b;
}

function equalsOperation() {
    if (displayValue != '' && operator != '') {
        result = operate(operator, parseFloat(operand), parseFloat(displayValue));
        displayValue = result;
        //may need to remove result equals null line to make everything work
        result = null;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
    if (result === undefined) {
        displayValue = '';
        display.textContent = '0';
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
        result = null;
        operand = null;
        display.textContent = displayValue;
        operator = '';
    }
    if (result === undefined) {
        displayValue = '';
        display.textContent = '0';
    }
});