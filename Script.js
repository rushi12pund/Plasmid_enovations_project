function validateForm() {
    // Reset error messages
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = 'Name must be at least 5 characters long';
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        isValid = false;
    }

    // Validate Phone Number
    if (phone.length !== 10 || phone === '123456789') {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits and not "123456789"';
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and not "password" or your name';
        isValid = false;
    }

    // Confirm Password Match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // Return false to prevent form submission if validation fails
    return isValid;
}
