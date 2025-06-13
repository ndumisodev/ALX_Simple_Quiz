
document.addEventListener('DOMContentLoaded', function() {

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        // Prevent division by zero.
        if (num2 === 0) {
            return "Error: Division by zero!";
        }
        return num1 / num2;
    }

    function performCalculation(operationFn) {

        const number1Input = document.getElementById('number1');
        const number2Input = document.getElementById('number2');
        const calculationResultSpan = document.getElementById('calculation-result');

        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;

        // Perform the calculation using the passed-in operation function.
        const result = operationFn(number1, number2);

        // Display the result in the designated span element.
        calculationResultSpan.textContent = result;
    }

    // Get a reference to the addition button.
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', function() {
        performCalculation(add);
    });

    // Get a reference to the subtraction button.
    const subtractButton = document.getElementById('subtract');
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
