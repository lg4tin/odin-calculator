let displayValue = document.querySelector('.display-value');
const operators = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equals');
let operator;
let a;
let b;
let previousCalculation;

let numberButtons = document.querySelectorAll('.buttons');
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (displayValue.textContent === operator || displayValue.textContent == 0 || (operator != undefined && displayValue.textContent == previousCalculation) || displayValue.textContent == 'NaN') {
            displayValue.textContent = '';
        }
        if (operator) {
            displayValue.textContent += button.textContent;
        } else {
            displayValue.textContent += button.textContent;
        }
    })
})

operators.forEach(oper => {
    oper.addEventListener('click', function() {
        if (a != undefined && operator != undefined && displayValue.textContent == operator) {
            operator = oper.textContent;
            displayValue.textContent = oper.textContent;
        } else {
            if (a != undefined && operator != undefined) {
                previousCalculation = operate(operator, a, b);
                displayValue.textContent = operate(operator, a, b);
                a = displayValue.textContent;
                b = undefined;
                operator = oper.textContent;
            } else {
                operator = oper.textContent;
                a = +displayValue.textContent;
                displayValue.textContent = oper.textContent;
            }
        }
    });
})

equalsButton.addEventListener('click', function() {
    if (!a || !operator) return;
    displayValue.textContent = operate(operator, a, b);
    b = undefined;
    operator = undefined;
    if (displayValue.textContent === 'NaN') clear();
})

function addDecimal() {
    if (displayValue.textContent.includes('.')) {
        return;
    } else {
        displayValue.textContent += '.';
    }
}

document.querySelector('.decimal').addEventListener('click', addDecimal);

function deleteButton() {
    if (displayValue.textContent === '' || displayValue.textContent === operator) {
        return;
    } else {
        displayValue.textContent = displayValue.textContent.slice(0, -1);
    }
}

document.querySelector('.delete').addEventListener('click', deleteButton);

function operate(operator, a, b) {
    if (b === undefined) b = +displayValue.textContent;
    if (operator == '+') return add(a, b).toFixed(2);
    else if (operator == '-') return subtract(a, b).toFixed(2);
    else if (operator == '*') return multiply(a, b).toFixed(2);
    else if (operator == '/' && b === 0) return 'LMAO';
    else if (operator == '/') return divide(a, b).toFixed(2);
}

function add(a, b) {
    return +a + +b;
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


document.querySelector('.clear').addEventListener('click', clear);

function clear() {
    displayValue.textContent = 0;
    reset();
}

function reset() {
    a = undefined;
    b = undefined;
    operator = undefined;
}
