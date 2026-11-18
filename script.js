let numA = 0;
let numB = 0;
let operator ;
const nbContainer = document.querySelector(".numsOpsContainer");  // numbers div container
const numbers = document.querySelectorAll(".nums");  // all numbers's buttons
const display = document.querySelector('output'); // output display


function add (a, b) {
  return a + b;
};

function subtract (a, b) {
  return a - b;
};

function multiply (a, b){
    return a * b;
};

function division (a, b){
    return a/ b;
};

function operate (a, b, op){
    switch(op){

        case "+" : 
            add(a, b);
            break;
        case "-" : 
            subtract(a, b);
            break;
        case "*" : 
            multiply(a, b);
            break;
        case "/" : 
            division(a, b);
            break;
    }
}

// update numbers and show it on display
function updateNb (currentNum) {    
    if(operator !== "") {
        numA += currentNum;
        display.textContent += numA;}
    else {
        numB += currentNum;
        display.textContent += numB;}
}


numbers.forEach(number => number.addEventListener('click', event => 
        updateNb(event.currentTarget.textContent)));