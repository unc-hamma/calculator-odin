let numA = 0;
let numB = 0;
let operator = "";
let currentResult = 0;                                                          // current result of operations 
const nbContainer = document.querySelector(".numsOpsContainer");                // numbers div container
const numbers = document.querySelectorAll(".nums");                             // all numbers's buttons
const operators = document.querySelectorAll(".ops");                            // all operators buttons
const display = document.querySelector('output');                               // output display
const equalsBtn = document.querySelector('.equals');                            // equals button
const deleteBtn = document.querySelector(".delete");                            // delete button
const clearBtn = document.querySelector(".clear");                              // clear button


const add = (a, b) =>  currentResult = Math.round((a + b) * 1000000) / 1000000

const subtract = (a, b) => currentResult = Math.round((a - b) * 1000000) / 1000000

const multiply =  (a, b) => currentResult = Math.round((a * b) * 1000000) / 1000000

const division = (a, b) => {
    if(b === 0) {
        numA = 0;                                  // initiaize numA to not cummulate in new operation
        alert("Division by 0 is not possible!");
    }
    else return currentResult = Math.round((a / b) * 1000000) / 1000000;
}

function operate (a, b, op){
    switch(op){

        case "+" : 
            return add(a, b);
        case "-" : 
            return subtract(a, b);
        case "*" : 
            return multiply(a, b);
        case "/" :
            return division(a, b);
    }
    
}

// update numbers and show it on display
function updateNb (currentNum) {
    if(operator === "="){
        numA = 0;
        numB =0;
        operator = "";
    }
    
    if(operator === "" ) {
        if(currentNum === '.'){
            if(!String(numA).includes('.')) {
                numA += currentNum;
                display.textContent = numA;
            }
        }
        else {
            numA += currentNum;
            numA = Number(numA);
            display.textContent = numA;}
    }
    else {
        if(currentNum === '.'){
            if(!String(numB).includes('.')) {
                numB += currentNum;
                display.textContent = numB;
            }
        }
        else {
            numB += currentNum;
            numB = Number(numB);
            display.textContent = numB;}
        }
}

// function to delete last number 
function handleDelete(){

    if(operator === "" ) {
        numA = String(numA).slice(0, -1);
        display.textContent = numA;
    }

    else {
        numB = String(numB).slice(0, -1);
        display.textContent = numB;
    }
}

const updateOp = op => {
    operator = op;
    display.textContent += op;}


const handleEquals = () => {
    if(operator === '=' || operator === null) return;
    display.textContent = operate(numA, numB, operator);
    numA = currentResult;
    numB = 0;
    operator = "=";
}

const handleClear = () => {
    numA = 0;
    numB = 0;
    operator = "";
    display.textContent = "";
}

// numbers buttons event listener
numbers.forEach(number => number.addEventListener('click', event => 
        updateNb(event.currentTarget.textContent)));

// operator buttons event listener
operators.forEach(opr => opr.addEventListener('click', event => {  
    if(numB !== 0) {                                                // test if number b exists then continue operation 
        operate(numA, numB, operator);
        numA = currentResult;
        numB = 0;
    }
    updateOp(event.currentTarget.textContent);
}));

// equals button event listener
equalsBtn.addEventListener('click', handleEquals);

// clear button click event to initialize all
clearBtn.addEventListener('click', handleClear)

// delete last number button event 
deleteBtn.addEventListener('click', handleDelete);

//keyboard event listeners

document.addEventListener('keydown', event => {
    if(/^[0-9]$/.test(event.key)) updateNb(event.key);

    else if(event.key === '+' || event.key === '-' || event.key === '/' || event.key === '*') updateOp(event.key);

    else if(event.key === "Enter") {
        event.preventDefault();
        handleEquals();
    }
    else if(event.key === "Backspace") handleDelete();
    else if(event.key === "Escape")  handleClear();
})