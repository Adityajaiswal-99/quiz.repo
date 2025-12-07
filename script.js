// Global variables
let currentCategory = null;
let currentLevel = null;
let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];
let timer;
let secondsElapsed = 0;

// DOM Elements
const menuView = document.getElementById('menu-view');
const levelView = document.getElementById('level-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const progressFill = document.getElementById('progress-fill');
const scoreDisplay = document.getElementById('score-display');
const currentScoreSpan = document.getElementById('current-score');
const finalScoreValue = document.getElementById('final-score-value');
const percentageDisplay = document.getElementById('percentage-display');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const backToCategoriesBtn = document.getElementById('back-to-categories-btn');
const timerDisplay = document.getElementById('timer-display');
const timeTakenDisplay = document.getElementById('time-taken-display');

// Event Listeners
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        showLevelSelection(card.dataset.category);
    });
});

document.querySelectorAll('.level-card').forEach(card => {
    card.addEventListener('click', () => {
        startQuiz(card.dataset.level);
    });
});

restartBtn.addEventListener('click', showMenu);
backToMenuBtn.addEventListener('click', showMenu);
if (backToCategoriesBtn) {
    backToCategoriesBtn.addEventListener('click', showMenu);
}

function showLevelSelection(category) {
    currentCategory = category;
    menuView.classList.remove('active');
    levelView.classList.add('active');
}

function showMenu() {
    stopTimer();
    resultsView.classList.remove('active');
    quizView.classList.remove('active');
    levelView.classList.remove('active');
    menuView.classList.add('active');
    currentCategory = null;
    currentLevel = null;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(level) {
    try {
        console.log("Starting quiz for level:", level);
        currentLevel = level;
        currentQuestionIndex = 0;
        score = 0;
        secondsElapsed = 0;

        // Get questions for the selected category and level
        // quizData is defined in quiz_data.js and available globally
        if (typeof quizData !== 'undefined' && quizData[currentCategory] && quizData[currentCategory][currentLevel]) {
            currentQuestions = shuffleArray([...quizData[currentCategory][currentLevel]]);
            console.log("Questions loaded:", currentQuestions.length);
        } else {
            console.error("No questions found for category:", currentCategory, "level:", currentLevel);
            alert("Error loading questions. Please try another category.");
            showMenu();
            return;
        }

        levelView.classList.remove('active');
        quizView.classList.add('active');
        scoreDisplay.style.display = 'block';
        updateScore();
        startTimer();
        loadQuestion();
    } catch (error) {
        console.error("Error in startQuiz:", error);
        alert("An error occurred: " + error.message);
    }
}

function startTimer() {
    stopTimer(); // Clear any existing timer
    timerDisplay.textContent = "00:00";
    timer = setInterval(() => {
        secondsElapsed++;
        timerDisplay.textContent = formatTime(secondsElapsed);
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];

    // Display Question in English and Hindi
    questionText.innerHTML = `
        ${questionData.q}
        <span class="question-hindi">${questionData.q_hi}</span>
    `;

    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback-message';

    // Update progress bar
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;

    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';

        // Display Option in English and Hindi
        const hindiOption = questionData.options_hi[index];
        btn.innerHTML = `
            ${option}
            <span class="hindi">${hindiOption}</span>
        `;

        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

// Audio Context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(isCorrect) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (isCorrect) {
        // Correct sound: High pitched, pleasant
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.1); // C6
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    } else {
        // Wrong sound: Low pitched, buzzing
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

function checkAnswer(selectedIndex, selectedBtn) {
    // Disable all buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const correctIndex = currentQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        playSound(true);
        selectedBtn.classList.add('correct');
        feedbackMessage.textContent = "Correct Answer! / सही उत्तर!";
        feedbackMessage.className = 'feedback-message success'; // Add success class
        score++;
        updateScore();
    } else {
        playSound(false);
        selectedBtn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
        const correctOption = currentQuestions[currentQuestionIndex].options[correctIndex];
        const correctOptionHi = currentQuestions[currentQuestionIndex].options_hi[correctIndex];
        feedbackMessage.innerHTML = `Wrong! Correct:<br><strong>${correctOption}</strong><br><span style="font-size: 0.9em">${correctOptionHi}</span>`;
        feedbackMessage.className = 'feedback-message error'; // Add error class
    }

    // Wait and go to next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 2500);
}

function updateScore() {
    currentScoreSpan.textContent = score;
}

function showResults() {
    stopTimer();
    quizView.classList.remove('active');
    resultsView.classList.add('active');
    scoreDisplay.style.display = 'none';

    const total = currentQuestions.length;
    finalScoreValue.textContent = score;
    document.getElementById('total-questions').textContent = total;

    const percentage = (score / total) * 100;
    percentageDisplay.textContent = `${percentage.toFixed(0)}%`;

    if (timeTakenDisplay) {
        timeTakenDisplay.textContent = `Time Taken: ${formatTime(secondsElapsed)}`;
    }

    if (percentage >= 80) {
        resultMessage.textContent = "Outstanding! You're a genius! 🌟 / बहुत बढ़िया! आप एक प्रतिभाशाली हैं!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Great job! Keep it up! 👍 / बहुत अच्छा! इसे जारी रखो!";
    } else {
        resultMessage.textContent = "Good effort! Try again to improve. 💪 / अच्छा प्रयास! सुधारने के लिए फिर से प्रयास करें।";
    }
}