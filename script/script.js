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
    numb.addEventListener('click',getNumber
)})

operators.forEach((operator)=>{
    operator.addEventListener('click',updateNumbers)
})

function getNumber(e){
    if (firstOperand === Infinity || isNaN(firstOperand))
        clearAll();
    selectedNumber += e.target.textContent;
    updateDisplay(e.target.textContent);
}

function updateNumbers(e){
    if (selectedNumber !== ''){

        if (firstOperand === '')
                firstOperand = selectedNumber;
                
        else {
            secondOperand = selectedNumber;
            firstOperand =getSolution();
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

function getSolution(){
    let sum = operate(op,Number(firstOperand),Number(secondOperand));
        if (sum.toString().length > 10)
            return Math.round(sum);
    return sum;
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