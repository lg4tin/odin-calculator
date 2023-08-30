function add(a, b) {
    return a + b;
}

console.log(add(3, 5))
console.log(add(3, 505))

function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 5))

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}

console.log(operate('/', 10, 4))
console.log(operate('*', 10, 50))

let displayValue = document.querySelector('.display-value');
displayValue.textContent = '';
let calculation = '';
let operator;
let a;
let b;

let buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        displayValue.textContent = button.textContent;
        calculation += button.textContent;
    })
})