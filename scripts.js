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

let displayValue = document.querySelector('.display-value');
displayValue.textContent = '';
let calculation = '';
const operators = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equals');
let operator;
let a;
let b;

let numberButtons = document.querySelectorAll('.buttons');
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (a) displayValue.textContent = '';
        displayValue.textContent += button.textContent;
        calculation += button.innerText;
        console.log(calculation);
    })
})

operators.forEach(oper => {
    oper.addEventListener('click', function() {
        operator = oper.textContent;
        a = +displayValue.textContent;
    });
})

equalsButton.addEventListener('click', function() {
    if (b === undefined || a !== undefined) b = +displayValue.textContent;
    displayValue.textContent = operate(operator, a, b);
})

function operate(operator, a, b) {
    if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/' && b === 0) return 'LMAO';
    else if (operator == '/') return divide(a, b);
}

document.querySelector('.clear').addEventListener('click', clear);

function clear() {
    displayValue.textContent = '';
    reset();
}

function reset() {
    a = undefined;
    b = undefined;
    operator = undefined;
}