// Ensure the script runs after the entire HTML document has been loaded.
// This prevents errors where the script might try to access elements
// that haven't been created yet by the browser.
document.addEventListener('DOMContentLoaded', function() {

    // --- Arithmetic Functions ---
    // These functions take two numbers as input and return the result
    // of the specified arithmetic operation.

    /**
     * @function add
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of num1 and num2.
     */
    function add(num1, num2) {
        return num1 + num2;
    }

    /**
     * @function subtract
     * @param {number} num1 - The first number (minuend).
     * @param {number} num2 - The second number (subtrahend).
     * @returns {number} The difference between num1 and num2.
     */
    function subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     * @function multiply
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The product of num1 and num2.
     */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * @function divide
     * @param {number} num1 - The first number (dividend).
     * @param {number} num2 - The second number (divisor).
     * @returns {number|string} The quotient of num1 and num2, or an error message if num2 is zero.
     */
    function divide(num1, num2) {
        // Prevent division by zero, which would result in Infinity or NaN.
        if (num2 === 0) {
            return "Error: Division by zero!";
        }
        return num1 / num2;
    }

    // --- Helper Function to Get Input Values and Display Result ---
    // This function centralizes the logic for getting input numbers,
    // performing a calculation, and displaying the result.
    /**
     * @function performCalculation
     * @description Retrieves numbers from input fields, performs a calculation
     * using the provided operation function, and displays the result.
     * @param {Function} operationFn - The arithmetic function (add, subtract, etc.) to call.
     */
    function performCalculation(operationFn) {
        // Get the input elements by their IDs.
        const number1Input = document.getElementById('number1');
        const number2Input = document.getElementById('number2');
        const calculationResultSpan = document.getElementById('calculation-result');

        // Retrieve the values from the input fields.
        // parseFloat() converts the string input to a floating-point number.
        // The '|| 0' provides a default value of 0 if the input field is empty
        // or contains non-numeric characters that parseFloat cannot convert (resulting in NaN).
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;

        // Perform the calculation using the passed-in operation function.
        const result = operationFn(number1, number2);

        // Display the result in the designated span element.
        calculationResultSpan.textContent = result;
    }

    // --- Attaching Event Listeners to Buttons ---
    // We select each button by its unique ID and attach a 'click' event listener.
    // When a button is clicked, it will call the `performCalculation` helper function,
    // passing the specific arithmetic function it should execute.

    // Get a reference to the addition button.
    const addButton = document.getElementById('add');
    // Add a click event listener. When clicked, call performCalculation with the 'add' function.
    addButton.addEventListener('click', function() {
        performCalculation(add);
    });

    // Get a reference to the subtraction button.
    const subtractButton = document.getElementById('subtract');
    // Add a click event listener. When clicked, call performCalculation with the 'subtract' function.
    subtractButton.addEventListener('click', function() {
        performCalculation(subtract);
    });

    // Get a reference to the multiplication button.
    const multiplyButton = document.getElementById('multiply');
    // Add a click event listener. When clicked, call performCalculation with the 'multiply' function.
    multiplyButton.addEventListener('click', function() {
        performCalculation(multiply);
    });

    // Get a reference to the division button.
    const divideButton = document.getElementById('divide');
    // Add a click event listener. When clicked, call performCalculation with the 'divide' function.
    divideButton.addEventListener('click', function() {
        performCalculation(divide);
    });
});
