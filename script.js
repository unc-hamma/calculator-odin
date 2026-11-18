let numA = 0;
let numB = 0;
let operator = "";
let currentResult = 0;                                                          // current result of operations 
const nbContainer = document.querySelector(".numsOpsContainer");                // numbers div container
const numbers = document.querySelectorAll(".nums");                             // all numbers's buttons
const operators = document.querySelectorAll(".ops");                            // all operators buttons
const display = document.querySelector('output');                               // output display
const equalsBtn = document.querySelector('.equals');                            // equals button


const add = (a, b) =>  currentResult = a + b;

const subtract = (a, b) => currentResult = a - b;

const multiply =  (a, b) => currentResult = a * b;

const division = (a, b) => {
    if(b === 0) {
        numA = 0;                                  // initiaize numA to not cummulate in new operation
        alert("Division by 0 is not possible!" + a, + " " + b);
        console.log(a)
    }
    else return currentResult = a / b;
}

function operate (a, b, op){
    switch(op){

        case "+" : 
            return add(a, b);
            break;
        case "-" : 
            return subtract(a, b);
            break;
        case "*" : 
            return multiply(a, b);
            break;
        case "/" :
            return division(a, b);
            break;
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
        numA += currentNum;
        numA = Number(numA);
        display.textContent = numA;}
    else {
        numB += currentNum;
        numB = Number(numB);
        display.textContent = numB;}
}

const updateOp = op => {
    operator = op;
    display.textContent += op;}

// numbers buttons event listener
numbers.forEach(number => number.addEventListener('click', event => 
        updateNb(event.currentTarget.textContent)));

// operator buttons event listener
operators.forEach(opr => opr.addEventListener('click', event => {
    updateOp(event.currentTarget.textContent);
    if(numB !== 0) {                                                // test if number b exists then continue operation 
        operate(numA, numB, operator);
        numA = currentResult;
        numB = 0;
    }
}));

// equals button event listener
equalsBtn.addEventListener('click', () => {
    display.textContent = operate(numA, numB, operator);
    operator = "=";
});    