let currentInput = '';
let operator = '';
let firstNumber = null;

function clearDisplay() {
    currentInput = '';
    firstNumber = null;
    operator = '';
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    currentInput += number.toString(); // Ensure currentInput is a string to allow concatenation
    document.getElementById('display').value = currentInput; // Update the display with the current input
}

function appendOperator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(currentInput); // Store the first number
        currentInput = ''; // Clear the input for the second number
    }
    operator = op; // Set the operator
    document.getElementById('display').value = operator; // Optionally display the operator for clarity
}

function calculateResult() {
    if (firstNumber !== null && currentInput !== '') {
        let secondNumber = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '%':
                result = firstNumber % secondNumber;
                break;
        }
        currentInput = result.toString(); // Store the result as the new input
        firstNumber = null; // Reset for future calculations
        operator = '';
        document.getElementById('display').value = currentInput; // Update the display with the result
    }
}

function square() {
    currentInput = (parseFloat(currentInput) ** 2).toString(); // Square the current input
    document.getElementById('display').value = currentInput; // Update the display with the squared value
}
