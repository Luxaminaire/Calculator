let a = "";
let b = "";
let operator = "";
let isOnA = true;
let o = 0;
let operators = "+-*/";
let digits= "0123456789";
    
   function engaged(e) {
        let onClickTarget = e.target.innerText;
        let output = document.getElementById('display');
        if (digits.includes(onClickTarget) && isOnA) {
            a += onClickTarget;
            output.innerText = a;
        }

        if (digits.includes(onClickTarget) && !isOnA) {
            b += onClickTarget;
            output.innerText = b;
        }

        if (a.length > 0 && operators.includes(onClickTarget) ) {
            operator = onClickTarget;
            isOnA = false;
        }

        if (onClickTarget === "C") {
            let output = document.getElementById('display');
            isOnA = true;
            a = "";
            b = "";
            operator = "";
            output.innerText = "";
        }

        if(onClickTarget === "=" && a.length > 0 && b.length > 0 ) {
            let val = operate(a, b, operator);
            isOnA = false;
            a = val.toString();
            b = "";
            operator = "";
            output.innerText = val;
            console.log(a);
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
            return (Number(a) / Number(b)).toPrecision(2);
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