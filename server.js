const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from current directory

// Database Connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root', // Default XAMPP/MySQL user
    password: 'aditya9316038680', // Default is empty, user might need to change
    database: 'quiz_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test DB Connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to MySQL database');
        connection.release();
    }
});

// Routes

// Register
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Using plaintext password storage as fallback
    const query = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';

    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ error: 'Email already exists' });
            }
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = results[0];

        // Plaintext comparison
        if (password === user.password_hash) {
            res.json({
                message: 'Login successful',
                user: { id: user.id, username: user.username, email: user.email }
            });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

// Save Score
app.post('/api/score', (req, res) => {
    const { user_id, score, category, level, total_questions, percentage } = req.body;

    const query = 'INSERT INTO scores (user_id, score, category, level, total_questions, percentage) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [user_id, score, category, level, total_questions, percentage], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to save score' });
        }
        res.status(201).json({ message: 'Score saved' });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
