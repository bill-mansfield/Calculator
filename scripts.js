/*
Math functions
*/

function add(x, y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
    return parseInt(x) - parseInt(y);
}

function multiply(x, y) {
    return parseInt(x) * parseInt(y);
}

function divide(x, y) {
    return parseInt(x) / parseInt(y);
}

function operate(x, y, z) {
    switch(z) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}

/*
Display
*/

const keys = document.getElementsByClassName("key");
var display = document.getElementById("display");
var smallDisplay = document.getElementById("smallDisplay");
var displayOperator = document.getElementById("operator");
var firstValue = "";
var result = "";
var smallValue = "";
var operator = "";

Array.from(keys).forEach(key => key.addEventListener("click", displayScreen));

function displayScreen() {

    /* TODO:
    > Below switch statement half works, only need to add "small number" display to save the first value of the operation before operating on it
    > Run operate() on values when the user presses the “=” key
    */

   firstValue += this.id;
   firstValue = firstValue.replace(/[^0-9]/g, "");
   display.innerHTML = firstValue;

    if (this.id === "+" || this.id === "-" || this.id === "/" || this.id === "*") {
        smallValue = firstValue;
        smallDisplay.innerHTML = smallValue;
        display.innerHTML = "";
        firstValue = "";
    }

    switch(this.id) {
        case "+":
            operator = "+";
            displayOperator.innerHTML = "+";
            return
        case "-":
            operator = "-";
            displayOperator.innerHTML = "-";
            return
        case "/":
            operator = "/";
            displayOperator.innerHTML = "/";
            return
        case "*":
            operator = "*";
            displayOperator.innerHTML = "*";
            return
        case "=":
            display.innerHTML = operate(smallValue, firstValue, operator);
            smallDisplay.innerHTML = "";
            displayOperator.innerHTML = "";
    
    }

}

/*
User input
*/

