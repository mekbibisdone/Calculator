function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function mutiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(op,num1,num2){
    switch(op){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break
        case "*":
            return mutiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
        default:
            return "not an operator";
            break;
    }
}