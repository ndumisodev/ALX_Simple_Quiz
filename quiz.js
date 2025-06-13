

document.addEventListener('DOMContentLoaded', function() {

    function checkAnswer() {

        const correctAnswer = "4";
        const selectedChoice = document.querySelector('input[name="quiz"]:checked');

        if (selectedChoice) {
            let userAnswer = selectedChoice.value;
        }

        // Get the feedback paragraph element to display messages.
        const feedbackElement = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            // If the user's answer matches the correct answer
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            // If the user's answer does not match, or no answer was selected
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; 
        }
    }

    //Adding an Event Listener to the Submit Button
    const submitButton = document.getElementById('submit-answer');

    // Adding a 'click' event listener to the submit button.
    // When the button is clicked, the checkAnswer function will be executed.
    submitButton.addEventListener('click', checkAnswer);

});
