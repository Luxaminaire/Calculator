class Calc {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.operator = "";
    }

    add(a, b) {
        a + b;
    }

    subtract(a, b) {
        a - b;
    }

    multiply(a, b) {
        a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        }
    }

    operate(a, b, operator) {
        if (operator === "+") {
            add(a,b);
        } else if (operator === "-") {
            subtract(a,b);
        } else if (operator === "*") {
            multiply(a,b);
        }  else {
            divide(a,b);
        }
    }
}
