
const MAX_LENGTH = 12;
const ROUND_DIGITS = 12;
const MAX_DENOM = 10 ** 8;
const DECIMAL_PLACES = 4;

const display =  document.querySelector('.display');

const number0 =  document.querySelector('#number-0');
const number1 =  document.querySelector('#number-1');
const number2 =  document.querySelector('#number-2');
const number3 =  document.querySelector('#number-3');
const number4 =  document.querySelector('#number-4');
const number5 =  document.querySelector('#number-5');
const number6 =  document.querySelector('#number-6');
const number7 =  document.querySelector('#number-7');
const number8 =  document.querySelector('#number-8');
const number9 =  document.querySelector('#number-9');
const period =  document.querySelector('#period');

const allClear =  document.querySelector('#ac');
const plusMinus =  document.querySelector('#plus-minus');
const percent =  document.querySelector('#percent');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = undefined;
let operator = undefined;
let num2 = undefined;

let displayValue = 0;
let hasPeriod = false;
let addDenom = 1;

const operate = (op, num1, num2) => {
    switch(op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'ERROR';
    }
}

const roundNumber = (num) => 
    Math.round(num * 10 ** ROUND_DIGITS)/10 ** ROUND_DIGITS;

const clearDisplayValue = () => {
    displayValue = 0;
    hasPeriod = false;
    addDenom = 1;
}

const addDisplayCharacter = (digit) => {
    if (hasPeriod) {
        addDenom *= 10;
        if (addDenom < MAX_DENOM)
            displayValue += (+digit)/addDenom;
    }
    else displayValue = 10 * displayValue + (+digit);
    updateDisplay();
};

const updateDisplay = () => {
    console.log(displayValue);
    let stringDisplay = roundNumber(displayValue).toString();
    // console.log(stringDisplay);
    if(stringDisplay.length > MAX_LENGTH) 
        stringDisplay = displayValue.toExponential(DECIMAL_PLACES); 
    else if(hasPeriod && !(stringDisplay.includes('.')))
        stringDisplay += '.';
    display.textContent = stringDisplay;
};

number0.addEventListener('click', () => addDisplayCharacter('0'));
number1.addEventListener('click', () => addDisplayCharacter('1'));
number2.addEventListener('click', () => addDisplayCharacter('2'));
number3.addEventListener('click', () => addDisplayCharacter('3'));
number4.addEventListener('click', () => addDisplayCharacter('4'));
number5.addEventListener('click', () => addDisplayCharacter('5'));
number6.addEventListener('click', () => addDisplayCharacter('6'));
number7.addEventListener('click', () => addDisplayCharacter('7'));
number8.addEventListener('click', () => addDisplayCharacter('8'));
number9.addEventListener('click', () => addDisplayCharacter('9'));

period.addEventListener('click', () => {
    hasPeriod = true;
    updateDisplay();
});

allClear.addEventListener('click', () => {
    clearDisplayValue();
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    updateDisplay();
});

plusMinus.addEventListener('click', () => {
    displayValue *= -1;
    updateDisplay();
});

percent.addEventListener('click', () => {
    displayValue /= 100;
    updateDisplay();
});

//put listeners for operations

window.addEventListener('DOMContentLoaded', () => {
    clearDisplayValue();
    // clear state?
    updateDisplay();
});