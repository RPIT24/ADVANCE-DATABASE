// Function to toggle password visibility for the password input field
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  // Show password
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');  // Change icon to eye-slash
    } else {
        passwordInput.type = 'password';  // Hide password
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');  // Change icon back to eye
    }
}

// Function to toggle password visibility for the confirm password input field
function toggleConfirmPasswordVisibility() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordIcon = document.getElementById('toggleConfirmPassword');

    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';  // Show confirm password
        confirmPasswordIcon.classList.remove('fa-eye');
        confirmPasswordIcon.classList.add('fa-eye-slash');  // Change icon to eye-slash
    } else {
        confirmPasswordInput.type = 'password';  // Hide confirm password
        confirmPasswordIcon.classList.remove('fa-eye-slash');
        confirmPasswordIcon.classList.add('fa-eye');  // Change icon back to eye
    }
}

// Form validation and submission logic
function handleFormSubmit(event) {
    event.preventDefault();  // Prevents the form from submitting automatically

    // Validate passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Passwords do not match!";
        return false;  // Stop form submission if passwords don't match
    }

    // If validation passes, clear any previous error messages
    document.getElementById('error-message').textContent = "";

    // Redirect to the dashboard page after successful registration
    window.location.href = 'dashboard.html'; // Redirects to dashboard.html
    return true;  // Indicating the form was processed successfully
}

// Function to handle registration form submission
function handleRegistration(event) {
    event.preventDefault();  // Prevents the form from submitting automatically

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make sure both fields are filled
    if (username && password) {
        // Send registration data to the server using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "register.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Handle the server response here (e.g., show success message or redirect)
                alert("Account created successfully!");
                window.location.href = "dashboard.html";  // Redirect to login page after successful registration
            }
        };
        xhr.send("username=" + username + "&password=" + password);  // Send form data to the server
    } else {
        alert("Please fill out all fields.");
    }
}
