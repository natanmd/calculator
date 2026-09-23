var num1 = "", num2 = "", operator = "", isOperable = false;
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
        display.textContent = `${num1}`;
    } else {
        num2 = `${num2}${number}`;
    }
    
}

for(let i = 0; i < 10; i++){
    const btn = document.querySelector(`.btn.num${i}`);
    console.log(`.btn.num${i}`);
    btn.addEventListener("click", () => {
        handleNumBtnEvent(i);
        console.log(i);
    });
}
