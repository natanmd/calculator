var num1 = null, num2 = null, operator = null, isOperable = false;
const display = document.getElementById("display");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0) return;
    return a/b;
}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            var result = add(num1, num2);
        case '-':
            var result = subtract(num1, num2);
        case '*':
            var result = multiply(num1, num2);
        case '/': 
            var result = divide(num1, num2);
    }
}

function handleNumBtnEvent(number){
    if(!isOperable){
        num1 = `${num1}${number}`;
    } else {
        num2 = `${num2}${number}`;
    }

}

for(var i = 0; i < 10; i++){
    var btn = document.querySelector(`.num .${i}`);
    btn.addEventListener("click", () => handleNumBtnEvent(i));
}
