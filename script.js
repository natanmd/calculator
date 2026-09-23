var num1 = "", num2 = "", operator = "", isOperable = false;
const display = document.getElementById("display");

function add(a, b){
    a = +a;
    b = +b;
    return a + b;
}

function subtract(a, b){
    a = +a;
    b = +b;
    return a - b;
}

function multiply(a, b){
    a = +a;
    b = +b;
    return a * b;
}

function divide(a, b){
    a = +a;
    b = +b;
    if(b === 0){return NaN;}
    return a / b;
}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            var result = add(num1, num2);
            break;
        case '-':
            var result = subtract(num1, num2);
            break;
        case '*':
            var result = multiply(num1, num2);
            break;
        case '/': 
            var result = divide(num1, num2);
            break;
    }
    return result;
}

function handleNumBtnEvent(number){
    if(!isOperable){
        num1 = `${num1}${number}`;
        display.textContent = `${num1}`;
    } else {
        num2 = `${num2}${number}`;
        display.textContent = `${num1} ${operator} ${num2}`;
    }
}


// attach callback to the numbered buttons, the 'let' 
// declaration is necessary because its on global scope otherwise
for(let i = 0; i < 10; i++){
    var btn = document.querySelector(`.btn.num${i}`);
    btn.addEventListener("click", () => handleNumBtnEvent(i));
}

function clearData(){
    num1 = "";
    num2 = "";
    operator = "";
    isOperable = false;
    display.textContent = "";
}

var btn = document.querySelector(".clear");
btn.addEventListener("click", clearData);

var btn = document.querySelector(".plus");
btn.addEventListener("click", () => {
    if(!isOperable){
        operator = "+";
        isOperable = true;
        display.textContent = `${num1} +`;
    } else if(num2 === ""){
        operator = "+";
        display.textContent = `${num1} +`;
    } else {
        num1 = operate(num1, num2, operator);
        if(num1 === NaN){
            clearData();
            display.textContent = "i dont think so";
            return;
        }
        num2 = "";
        operator = "+";
        display.textContent = `${num1} +`;
    }
});

var btn = document.querySelector(".minus");
btn.addEventListener("click", () => {
    if(!isOperable){
        operator = "-";
        isOperable = true;
        display.textContent = `${num1} -`;
    } else if(num2 === ""){
        operator = "-";
        display.textContent = `${num1} -`;
    } else {
        num1 = operate(num1, num2, operator);
        if(num1 === NaN){
            clearData();
            display.textContent = "i dont think so";
            return;
        }
        num2 = "";
        operator = "-";
        display.textContent = `${num1} -`;
    }
});

var btn = document.querySelector(".mult");
btn.addEventListener("click", () => {
    if(!isOperable){
        operator = "*";
        isOperable = true;
        display.textContent = `${num1} *`;
    } else if(num2 === ""){
        operator = "*";
        display.textContent = `${num1} *`;
    } else {
        num1 = operate(num1, num2, operator);
        if(num1 === NaN){
            clearData();
            display.textContent = "i dont think so";
            return;
        }
        num2 = "";
        operator = "*";
        display.textContent = `${num1} *`;
    }
});

var btn = document.querySelector(".divide");
btn.addEventListener("click", () => {
    if(!isOperable){
        operator = "/";
        isOperable = true;
        display.textContent = `${num1} /`;
    } else if(num2 === ""){
        operator = "/";
        display.textContent = `${num1} /`;
    } else {
        num1 = operate(num1, num2, operator);
        if(num1 === NaN){
            clearData();
            display.textContent = "i dont think so";
            return;
        }
        num2 = "";
        operator = "/";
        display.textContent = `${num1} /`;
    }
});

var btn = document.querySelector(".equal");
btn.addEventListener("click", () => {
    if(!isOperable || num2 === ""){
        return;
    } else {
        num1 = operate(num1, num2, operator);
        if(Number.isNaN(num1)){
            clearData();
            display.textContent = "i dont think so";
            return;
        }
        num2 = "";
        operator = "";
        isOperable = false;
        display.textContent = `${num1}`;
    }
});