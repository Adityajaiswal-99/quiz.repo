
/* Auth Logic */
const authContainer = document.getElementById('auth-container');
const mainContent = document.getElementById('main-content');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBox = document.getElementById('login-box');
const signupBox = document.getElementById('signup-box');
const showSignupBtn = document.getElementById('show-signup');
const showLoginBtn = document.getElementById('show-login');

// Check Auth State on Load
function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        showApp();
    } else {
        showAuth();
    }
}

function showApp() {
    authContainer.style.display = 'none';
    mainContent.style.display = 'block';
    // Optional: Update UI with user name
}

function showAuth() {
    authContainer.style.display = 'flex';
    mainContent.style.display = 'none';
}

// Switch Forms
showSignupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.classList.add('hidden');
    signupBox.classList.remove('hidden');
});

showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.classList.add('hidden');
    loginBox.classList.remove('hidden');
});

// Handle Signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (localStorage.getItem(`user_${email}`)) {
        alert('User already exists! Please login.');
        return;
    }

    const user = { name, email, password };
    localStorage.setItem(`user_${email}`, JSON.stringify(user));
    alert('Account created successfully! Please login.');

    // Switch to login
    signupBox.classList.add('hidden');
    loginBox.classList.remove('hidden');
    signupForm.reset();
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedUser = localStorage.getItem(`user_${email}`);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showApp();
            loginForm.reset();
        } else {
            alert('Invalid password!');
        }
    } else {
        alert('User not found! Please sign up.');
    }
});

// Initialize
checkAuth();
