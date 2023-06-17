

// Constructors for the calculator
function Calculator() {
    this.display = document.getElementById('displayText');
    this.displayValue = this.display.innerHTML;
    this.displayValue = 0;
    this.firstValue = 0;
    this.secondValue = 0;
    this.operator = "";
    this.result = 0;
}

// Calculator methods
Calculator.prototype = {
    add: function() {
        this.result = this.firstValue + this.secondValue;
        this.display.innerHTML = this.result;
    },
    subtract: function() {
        this.result = this.firstValue - this.secondValue;
        this.display.innerHTML = this.result;
    },
    multiply: function() {
        this.result = this.firstValue * this.secondValue;
        this.display.innerHTML = this.result;
    },
    divide: function() {
        this.result = this.firstValue / this.secondValue;
        this.display.innerHTML = this.result;
    },
    clear: function() {
        this.display.innerHTML = 0;
        this.firstValue = 0;
        this.secondValue = 0;
        this.operator = "";
        this.result = 0;
    }
}

// Create a new calculator
var calculator = new Calculator();

// Event listeners for the calculator
document.getElementById('clear').addEventListener('click', function() {
    entry("clear");
});
document.getElementById('sign').addEventListener('click', function() {
    entry("+/-");
});
document.getElementById('percent').addEventListener('click', function() {
    entry("%");
});
document.getElementById('divide').addEventListener('click', function() {
    entry("/");
});
document.getElementById('seven').addEventListener('click', function() {
    entry(7);
});
document.getElementById('eight').addEventListener('click', function() {
    entry(8);
});
document.getElementById('nine').addEventListener('click', function() {
    entry(9);
});
document.getElementById('times').addEventListener('click', function() {
    entry("*");
});
document.getElementById('four').addEventListener('click', function() {
    entry(4);
});
document.getElementById('five').addEventListener('click', function() {
    entry(5);
});
document.getElementById('six').addEventListener('click', function() {
    entry(6);
});
document.getElementById('minus').addEventListener('click', function() {
    entry("-");
});
document.getElementById('one').addEventListener('click', function() {
    entry(1);
});
document.getElementById('two').addEventListener('click', function() {
    entry(2);
});
document.getElementById('three').addEventListener('click', function() {
    entry(3);
});
document.getElementById('plus').addEventListener('click', function() {
    entry("+");
});
document.getElementById('zero').addEventListener('click', function() {
    entry(0);
});
document.getElementById('decimal').addEventListener('click', function() {
    entry(".");
});
document.getElementById('equals').addEventListener('click', function() {
    entry("=");
});

// Function to handle button clicks
function entry(value) {

    console.log(value);
    // Get Operator
    if (value === "+" || value === "-" || value === "*" || value === "/") {
        calculator.operator = value;
        console.log(`Operator: ${calculator.operator}`)

        calculator.firstValue = calculator.displayValue;
        console.log(`First Value: ${calculator.firstValue}`)

        calculator.display.innerHTML = 0;
        console.log(`Display: ${calculator.display.innerHTML}`)
    }
    
    // Get Answer
    else if (value === "=") {
        calculator.secondValue = calculator.displayValue;
        switch (calculator.operator) {
            case "+":
                calculator.add();
                break;
            case "-":
                calculator.subtract();
                break;
            case "*":
                calculator.multiply();
                break;
            case "/":
                calculator.divide();
                break;
        }
    } 
    
    // Clear the display and Variables
    else if (value === "clear") {
        calculator.clear();
    } 
    
    // Change display
    else {
        if (calculator.display.innerHTML === "0") {
            calculator.display.innerHTML = value;
        } else {
            calculator.display.innerHTML += value;
        }
    }
}



