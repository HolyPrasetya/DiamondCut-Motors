function login() {
    var username = document.getElementById('inputUsername').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var password = document.getElementById('inputPassword').value;
    var confirmPassword = document.getElementById('inputConfirmPassword').value;
    var agreement = document.getElementById('agreement').checked;


    if (username.trim() === '') {
        alert('Username must be filled');
        return;
    }
    
    if (email.trim() === '') {
        alert('Email must be filled');
        return;
    }
    
    if (phone.trim() === '') {
        alert('Phone number must be filled');
        return;
    }
    
    if (password.trim() === '') {
        alert('Password must be filled');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!agreement) {
        alert('You should agree to the terms and services');
        return;
    }

    setTimeout(function() {
        document.getElementById('redirectAlert').style.display = 'block';
        
        setTimeout(function() {
            window.location.href = "home.html";
        }, 2000);
    }, 500);
}
