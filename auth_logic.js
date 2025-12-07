
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
    const user = localStorage.getItem('currentUser'); // We still keep session in LS for now
    if (user) {
        showApp();
    } else {
        showAuth();
    }
}

function showApp() {
    authContainer.style.display = 'none';
    mainContent.style.display = 'block';
}

function showAuth() {
    authContainer.style.display = 'flex';
    mainContent.style.display = 'none';
}

// Switch Forms
if (showSignupBtn) {
    showSignupBtn.addEventListener('click', (e) => {
        console.log('Signup clicked');
        e.preventDefault();
        loginBox.classList.add('hidden');
        signupBox.classList.remove('hidden');
    });
}

if (showLoginBtn) {
    showLoginBtn.addEventListener('click', (e) => {
        console.log('Login clicked');
        e.preventDefault();
        signupBox.classList.add('hidden');
        loginBox.classList.remove('hidden');
    });
}

// Handle Signup
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Account created successfully! Please login.');
            signupBox.classList.add('hidden');
            loginBox.classList.remove('hidden');
            signupForm.reset();
        } else {
            alert(data.error || 'Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to server');
    }
});

// Handle Login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('currentUser', JSON.stringify(data.user)); // Store user session
            showApp();
            loginForm.reset();
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to server');
    }
});

// Initialize
checkAuth();
