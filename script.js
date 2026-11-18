let numA = 0;
let numB = 0;
let operator ;

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