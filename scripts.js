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
        if (operator) {
            
            displayValue.textContent += button.textContent;
        } else {
            displayValue.textContent += button.textContent;
        }
    })
})

operators.forEach(oper => {
    oper.addEventListener('click', function() {
        if (a != undefined && operator != undefined) {
            displayValue.textContent = operate(operator, a, b);
        } else {
            operator = oper.textContent;
            a = +displayValue.textContent;
            displayValue.textContent = '';
        }
        
    });
})

equalsButton.addEventListener('click', function() {
    if (b === undefined) b = +displayValue.textContent;
    
    displayValue.textContent = operate(operator, a, b);
    a = operate(operator, a, b);
    b = undefined;
    previousCalculation = operate(operator, a, b);
    reset();
})

function operate(operator, a, b) {
    if (b === undefined) b = displayValue.textContent;
    if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/' && b === 0) return 'LMAO';
    else if (operator == '/') return divide(a, b);
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
    displayValue.textContent = '';
    reset();
}

function reset() {
    a = undefined;
    b = undefined;
    operator = undefined;
}
