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
    if(b == 0)
    return "Division by 0 not allowed!!";
    return a / b;
}
function operate(operator, a, b) {
    if (operator == '+')
        return add(a, b);
    if (operator == '-')
        return subtract(a, b);
    if (operator == '/')
        return divide(a, b);
    if (operator == '*')
        return multiply(a, b);
}
let display = document.getElementById("display");
let calc = document.querySelector(".container");
let equals = document.getElementById("equals");
let operand1;
let operand2;
function addOperatorButton(operator, gridArea) {
    let button = document.createElement('button');
    button.textContent = operator;
    button.style.gridArea = gridArea;
    calc.appendChild(button);
    button.addEventListener("click", (event) => disOperator(event));

}
document.getElementById("clear").addEventListener("click", () => {
    display.textContent = '';
});



function createDigits() {
    for (let i = 0; i <= 9; i++) {
        let button = document.createElement('button');
        calc.appendChild(button);
        button.textContent = i;
        button.style.gridArea = 's' + i;
        button.addEventListener("click", (event) => dis(event))

    }

}
function dis(event) {
    display.textContent += event.target.innerText;
}

function disOperator(event) {
    const d = display.textContent;
    const opIndex = d.search(/[+-/*]/);
    if (opIndex !== -1) {
        const op = d.charAt(opIndex);
        const a = d.substring(0, opIndex);
        const b = d.substring(opIndex + 1, d.length);
        display.textContent = operate(op, a, b);
    }
        dis(event);
}
createDigits();
addOperatorButton('+', "s10");
addOperatorButton('-', "s11");
addOperatorButton('*', "s12");
addOperatorButton('/', "s13");


equals.addEventListener('click', () => {
    const d = display.textContent;
    const opIndex = d.search(/[+-/*]/);
    if (opIndex !== -1) {
        const op = d.charAt(opIndex);
        const a = d.substring(0, opIndex);
        const b = d.substring(opIndex + 1, d.length);
        display.textContent = operate(op, a, b);
    }
})