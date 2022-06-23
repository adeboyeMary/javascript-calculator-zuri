//addition
//subtraction
//division
//multiplication

function add(x, y){
    return x + y;
}

function sub(x, y){
    return x - y;
}

function divide(x, y){
    return x / y;
}
function multi(x, y){
    return x * y;
}

function calculate(){
    let answer;
    let num1 = parseFloat(prompt("Enter first number"));
    let operation = prompt("Enter 1 for addition, enter 2 for subtraction, enter 3 for division, enter 4 for multiplication");
    let num2 = parseFloat(prompt("Enter second number"));
    

    if(operation == 1){
        answer = add(num1, num2)
        alert(answer)
    }
    if(operation == 2){
        answer = sub(num1, num2)
        alert(answer)
    }
    if(operation == 3){
        answer = divide(num1, num2)
        alert(answer)
    }
    if(operation == 4){
        answer = multi(num1, num2)
        alert(answer)
    }
}