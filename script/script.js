const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

let selectedNumber  = '';
let firstOperand = '';
let secondOperand = '';
let op = '';
display.textContent = '';

clear.addEventListener('click',clearAll);

numbers.forEach((numb)=>{
    numb.addEventListener('click',()=>{
        if (firstOperand === Infinity || isNaN(firstOperand))
            clearAll();
        selectedNumber += numb.textContent;
        updateDisplay(numb.textContent);
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click',updateNumbers)
})

function updateNumbers(e){
    if (selectedNumber !== ''){

        if (firstOperand === '')
                firstOperand = selectedNumber;
                
        else {
            secondOperand = selectedNumber;
            firstOperand = operate(op,Number(firstOperand),Number(secondOperand));
            display.textContent =  firstOperand;
            if (firstOperand === Infinity || isNaN(firstOperand)){
                selectedNumber = '';
                return;
            }
            
        }
        if (e.target.textContent !== "="){
            op = e.target.textContent;
            updateDisplay(op); 
            selectedNumber = ''; 
        }

        else{
            selectedNumber = firstOperand;
            firstOperand = '';
        }
            
    }
     
}

function updateDisplay(toBeDisplayed){
    display.textContent += toBeDisplayed;
}

function clearAll(){
    selectedNumber  = '';
    firstOperand = '';
    secondOperand = '';
    op = '';
    display.textContent = '';
}

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