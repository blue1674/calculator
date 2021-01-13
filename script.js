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
function addOperatorButton(operator, gridArea) {
    let button = document.createElement('button');
    button.textContent = operator;
    button.style.gridArea = gridArea;
    calc.appendChild(button);
    button.addEventListener("click", (event) => dis(event))

}
createDigits();
addOperatorButton('+', "s10");
addOperatorButton('-', "s11");
addOperatorButton('*', "s12");
addOperatorButton('/', "s13");

document.getElementById("clear").addEventListener("click", () => {
    display.textContent = '';
})

equals.addEventListener('click', () => {
    display.textContent.indexOf()
})