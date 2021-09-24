let a = "";
let b = "";
let operator = "";
let currentOperation = ["a", "b"];
let o = 0;
let operators = "+-*/";
let digits= "0123456789";
    
   function engaged(e) {
        let onClickTarget = e.target.innerText;
        let output = document.getElementById('display');
        if (digits.includes(onClickTarget) && currentOperation[o] === "a") {
            a += onClickTarget;
            output.innerText = a;
        }

        if (digits.includes(onClickTarget) && currentOperation[o] === "b") {
            b += onClickTarget;
            output.innerText = b;
        }

        if (a.length > 0 && operators.includes(onClickTarget) ) {
            operator = onClickTarget;
            o++;
        }

        if (onClickTarget === "C") {
            let output = document.getElementById('display');
            o = 0;
            a = "";
            b = "";
            operator = "";
            output.innerText = "";
        }

        if(onClickTarget === "=" && a.length > 0 && b.length > 0 ) {
            let val = operate(a, b, operator);
            output.innerText = val;
            a = val;
            o = 1;
        }
    }

    function add(a, b) {
        return Number(a) + Number(b);
    }

    function subtract(a, b) {
        return Number(a) - (b);
    }

    function  multiply(a, b) {
        return Number(a) * Number(b);
    }

    function divide(a, b) {
        if (Number(b) !== 0) {
            return Number(a) / Number(b);
        }
    }

    function operate(a, b, operator) {
        if (operator === "+") {
           return add(a,b);
        } else if (operator === "-") {
            return subtract(a,b);
        } else if (operator === "*") {
            return multiply(a,b);
        }  else if (operator === "/"){
            return divide(a,b);
        }
    }

let output = document.getElementById('display');
    output.innerText = "";

function makeOnClicks(){
    let eles = [...document.querySelectorAll('.cell')];
    
    eles.forEach(element => {
        element.addEventListener('click', engaged);
    });
}

makeOnClicks();