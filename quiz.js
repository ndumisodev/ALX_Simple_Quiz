

document.addEventListener('DOMContentLoaded', function() {

    /**
     * @function checkAnswer
     * @description Checks the user's selected answer against the correct answer
     * and displays appropriate feedback.
     */
    function checkAnswer() {

        const correctAnswer = "4";
        const selectedChoice = document.querySelector('input[name="quiz"]:checked');

        // let userAnswer = null; 
        // Check if a radio button was actually selected
        if (selectedChoice) {
            // If a selection was made, get its value.
            let userAnswer = selectedChoice.value;
        }

        // Get the feedback paragraph element to display messages.
        const feedbackElement = document.getElementById('feedback');

        // 3. Compare the User’s Answer with the Correct Answer
        // Implement an if statement to compare userAnswer with correctAnswer.
        if (userAnswer === correctAnswer) {
            // If the user's answer matches the correct answer
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Add styling for correct answer
        } else {
            // If the user's answer does not match, or no answer was selected
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Add styling for incorrect answer
        }
    }

    // 4. Add an Event Listener to the Submit Button
    // Get a reference to the "Submit Answer" button by its ID.
    const submitButton = document.getElementById('submit-answer');

    // Add a 'click' event listener to the submit button.
    // When the button is clicked, the checkAnswer function will be executed.
    // Note: Do not call checkAnswer() with parentheses here, as we want to
    // pass the function reference, not its immediate return value.
    submitButton.addEventListener('click', checkAnswer);

});
