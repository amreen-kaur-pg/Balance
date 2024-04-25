document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();

    // Check if email contains '@' and '.'
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        emailError.textContent = 'Invalid email format';
        event.preventDefault(); // Prevent form submission
    } else {
        // Clear any previous error messages
        emailError.textContent = '';
    }
});

function signIn() {
    alert("You're signed in!");
}
