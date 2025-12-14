// Global variables
let currentCategory = null;
let currentLevel = null;
let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];
let userAnswers = [];
let currentStreak = 0;
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
const loadingOverlay = document.getElementById('loading-overlay');
const questionTracker = document.getElementById('question-tracker');
const questionCountSelect = document.getElementById('question-count-select');
const timerToggle = document.getElementById('timer-toggle');

const reviewView = document.getElementById('review-view');
const reviewList = document.getElementById('review-list');
const reviewBtn = document.getElementById('review-btn');
const closeReviewBtn = document.getElementById('close-review-btn');
const streakCounter = document.getElementById('streak-counter');
const streakValue = document.getElementById('streak-value');
const liveScoreValue = document.getElementById('live-score-value');
const errorContainer = document.getElementById('error-container');
const errorTitle = document.getElementById('error-title');
const errorMessage = document.getElementById('error-message');
const retryBtn = document.getElementById('retry-btn');
const shareBtn = document.getElementById('share-btn');
const highScoreBadge = document.getElementById('high-score-badge');

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
if (reviewBtn) {
    reviewBtn.addEventListener('click', showReview);
}
if (closeReviewBtn) {
    closeReviewBtn.addEventListener('click', () => {
        reviewView.classList.remove('active');
        resultsView.classList.add('active');
    });
}
if (retryBtn) {
    retryBtn.addEventListener('click', retryQuiz);
}
if (shareBtn) {
    shareBtn.addEventListener('click', shareResults);
}

// Load user preferences from localStorage
function loadPreferences() {
    const savedTimer = localStorage.getItem('timerEnabled');
    const savedQuestionCount = localStorage.getItem('questionCount');

    if (savedTimer !== null) {
        timerToggle.checked = savedTimer === 'true';
    }
    if (savedQuestionCount) {
        questionCountSelect.value = savedQuestionCount;
    }
}

// Save preferences when changed
questionCountSelect.addEventListener('change', () => {
    localStorage.setItem('questionCount', questionCountSelect.value);
});

timerToggle.addEventListener('change', () => {
    localStorage.setItem('timerEnabled', timerToggle.checked);
});

// Load preferences on page load
loadPreferences();

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

        // Show Loading
        loadingOverlay.classList.remove('hidden');

        // Simulate small delay for better UX (or fetch if we were async)
        setTimeout(() => {
            currentLevel = level;
            currentQuestionIndex = 0;
            score = 0;
            currentLevel = level;
            currentQuestionIndex = 0;
            score = 0;
            secondsElapsed = 0;
            userAnswers = [];
            currentStreak = 0;


            // Get questions for the selected category and level
            if (typeof quizData !== 'undefined' && quizData[currentCategory] && quizData[currentCategory][currentLevel]) {
                // Shuffle and limit questions based on settings
                const fullQuestions = shuffleArray([...quizData[currentCategory][currentLevel]]);
                const limit = parseInt(questionCountSelect.value) || 10;
                currentQuestions = fullQuestions.slice(0, limit);

                console.log(`Questions loaded: ${currentQuestions.length} (Limit: ${limit})`);

                loadingOverlay.classList.add('hidden');
                levelView.classList.remove('active');
                quizView.classList.add('active');
                scoreDisplay.style.display = 'block';

                updateScore();

                // Timer Logic
                if (timerToggle.checked) {
                    timerDisplay.style.display = 'block';
                    startTimer();
                } else {
                    timerDisplay.style.display = 'none';
                    stopTimer();
                }

                loadQuestion();
            } else {
                loadingOverlay.classList.add('hidden');
                console.error("No questions found for category:", currentCategory, "level:", currentLevel);
                showError("No Questions Available", `We couldn't find any questions for ${currentCategory} (${currentLevel}). Please try another category or difficulty.`);
            }
        }, 600); // 600ms artificial delay for "loading" feel

    } catch (error) {
        console.error("Error in startQuiz:", error);
        loadingOverlay.classList.add('hidden');
        showError("Oops! Something went wrong", error.message || "An unexpected error occurred. Please try again.");
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

    // Update Question Tracker
    if (questionTracker) {
        questionTracker.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    }

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

// Simple Audio Feedback (original working version)
function playSound(isCorrect) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (isCorrect) {
            // Correct sound: pleasant tone
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        } else {
            // Wrong sound: lower tone
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
            oscillator.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        }
    } catch (error) {
        // Silently fail if audio context not supported
    }
}

function checkAnswer(selectedIndex, selectedBtn) {
    // Disable all buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const correctIndex = currentQuestions[currentQuestionIndex].answer;

    // Save for review
    userAnswers.push({
        question: currentQuestions[currentQuestionIndex],
        selected: selectedIndex,
        correct: correctIndex
    });

    if (selectedIndex === correctIndex) {
        playSound(true);
        selectedBtn.classList.add('correct');
        feedbackMessage.textContent = "Correct Answer! / सही उत्तर!";
        feedbackMessage.className = 'feedback-message success';
        score++;
        currentStreak++;
        updateScore();
        updateStreak();
    } else {
        playSound(false);
        selectedBtn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
        const correctOption = currentQuestions[currentQuestionIndex].options[correctIndex];
        const correctOptionHi = currentQuestions[currentQuestionIndex].options_hi[correctIndex];
        feedbackMessage.innerHTML = `Wrong! Correct:<br><strong>${correctOption}</strong><br><span style="font-size: 0.9em">${correctOptionHi}</span>`;
        feedbackMessage.className = 'feedback-message error'; // Add error class
        currentStreak = 0;
        updateStreak();
    }

    // Wait and go to next question
    setTimeout(() => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            currentQuestionIndex++;
            showResults();
        }
    }, 2500);
}

function updateScore() {
    currentScoreSpan.textContent = score;
    if (liveScoreValue) {
        liveScoreValue.textContent = score;
    }
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

    // Check and update high score
    const highScoreKey = `highScore_${currentCategory}_${currentLevel}`;
    const previousHighScore = parseInt(localStorage.getItem(highScoreKey)) || 0;

    if (score > previousHighScore) {
        localStorage.setItem(highScoreKey, score);
        highScoreBadge.classList.remove('hidden');
    } else {
        highScoreBadge.classList.add('hidden');
    }

    // Save to Leaderboard
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({
        score: percentage, // Saving percentage as score for leaderboard
        rawScore: score,
        total: total,
        category: currentCategory,
        level: currentLevel,
        date: new Date().toISOString()
    });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Populate breakdown
    const wrongCount = total - score;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('accuracy-display').textContent = `${percentage.toFixed(0)}%`;

    if (timeTakenDisplay) {
        if (timerToggle.checked) {
            timeTakenDisplay.style.display = 'block';
            timeTakenDisplay.textContent = `Time Taken: ${formatTime(secondsElapsed)}`;
        } else {
            timeTakenDisplay.style.display = 'none';
        }
    }

    if (percentage >= 80) {
        resultMessage.textContent = "Outstanding! You're a genius! 🌟 / बहुत बढ़िया! आप एक प्रतिभाशाली हैं!";
        triggerConfetti();
    } else if (percentage >= 60) {
        resultMessage.textContent = "Great job! Keep it up! 👍 / बहुत अच्छा! इसे जारी रखो!";
    } else {
        resultMessage.textContent = "Good effort! Try again to improve. 💪 / अच्छा प्रयास! सुधारने के लिए फिर से प्रयास करें।";
    }

    // Play completion sound
    playSound('complete');

    // Check for badges
    const maxStreak = Math.max(...userAnswers.map((_, i) => {
        let streak = 0;
        for (let j = i; j < userAnswers.length && userAnswers[j].isCorrect; j++) {
            streak++;
        }
        return streak;
    }));

    checkBadges({
        percentage: percentage,
        timeTaken: secondsElapsed,
        maxStreak: maxStreak
    });
}

function triggerConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        // Confetti colors
        const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

        for (let i = 0; i < 3; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function showReview() {
    resultsView.classList.remove('active');
    reviewView.classList.add('active');
    reviewList.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = `review-item ${answer.selected === answer.correct ? 'correct' : 'wrong'}`;

        const isCorrect = answer.selected === answer.correct;
        const selectedText = answer.question.options[answer.selected];
        const correctText = answer.question.options[answer.correct];
        const questionText = answer.question.q;
        const questionTextHi = answer.question.q_hi;

        item.innerHTML = `
            <div class="review-q-num">Question ${index + 1}</div>
            <div class="review-q-text">
                ${questionText}
                <br><span class="hindi-text">${questionTextHi}</span>
            </div>
            <div class="review-status">${isCorrect ? '✅ Correct' : '❌ Wrong'}</div>
            <div class="review-details">
                <div class="review-detail-row">
                    <span class="label">Your Answer:</span>
                    <span class="value ${isCorrect ? 'correct-text' : 'wrong-text'}">${selectedText}</span>
                </div>
                ${!isCorrect ? `
                <div class="review-detail-row">
                    <span class="label">Correct Answer:</span>
                    <span class="value correct-text">${correctText}</span>
                </div>` : ''}
            </div>
        `;
        reviewList.appendChild(item);
    });
} function updateStreak() {
    if (currentStreak >= 2) {
        streakCounter.style.display = 'block';
        streakValue.textContent = currentStreak;
    } else {
        streakCounter.style.display = 'none';
    }
}

function showError(title, message) {
    // Hide quiz elements
    questionText.parentElement.style.display = 'none';

    // Show error container
    errorTitle.textContent = title;
    errorMessage.textContent = message;
    errorContainer.classList.remove('hidden');
}

function retryQuiz() {
    // Hide error, reset state
    errorContainer.classList.add('hidden');
    questionText.parentElement.style.display = 'block';

    // Retry starting the quiz
    if (currentLevel) {
        startQuiz(currentLevel);
    } else {
        showMenu();
    }
}

function shareResults() {
    const total = currentQuestions.length;
    const percentage = ((score / total) * 100).toFixed(0);

    const shareText = `🎯 BrainQuest Results!\n\nCategory: ${currentCategory.toUpperCase()}\nDifficulty: ${currentLevel.toUpperCase()}\nScore: ${score}/${total} (${percentage}%)\n\nCan you beat my score? 🚀`;

    // Try native Web Share API
    if (navigator.share) {
        navigator.share({
            title: 'BrainQuest Results',
            text: shareText
        }).catch(err => console.log('Share cancelled', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            // Show temporary feedback
            const originalText = shareBtn.textContent;
            shareBtn.textContent = '✅ Copied!';
            setTimeout(() => {
                shareBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy', err);
            alert('Share text:\n\n' + shareText);
        });
    }
}
// Sound System using Web Audio API
// Using original simple version - Phase 6 advanced version removed

// Sound toggle - keeping for future use
const soundToggle = document.getElementById('sound-toggle');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const badgesBtn = document.getElementById('badges-btn');
const badgesModal = document.getElementById('badges-modal');
const closeBadgesModal = document.getElementById('close-badges-modal');
const badgesGrid = document.getElementById('badges-grid');
const leaderboardModal = document.getElementById('leaderboard-modal');
const closeLeaderboardModal = document.getElementById('close-leaderboard-modal');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardList = document.getElementById('leaderboard-list');
const infoModal = document.getElementById('info-modal');
const closeInfoModal = document.getElementById('close-info-modal');
const infoModalTitle = document.getElementById('info-modal-title');
const infoModalContent = document.getElementById('info-modal-content');
const howToPlayBtn = document.getElementById('how-to-play-btn');
const aboutBtn = document.getElementById('about-btn');

// Badge definitions
const BADGES = [
    { id: 'perfect', name: 'Perfect Score', icon: '💯', description: 'Get 100% on any quiz', earned: false },
    { id: 'speed', name: 'Speed Demon', icon: '⚡', description: 'Complete quiz in under 1 minute', earned: false },
    { id: 'streak', name: 'Streak Master', icon: '🔥', description: 'Get 5+ correct in a row', earned: false },
    { id: 'scholar', name: 'Scholar', icon: '🎓', description: 'Complete 10 quizzes', earned: false }
];

// Load saved badges and sound preference
function loadGameData() {
    const savedBadges = localStorage.getItem('badges');
    if (savedBadges) {
        const badgeData = JSON.parse(savedBadges);
        BADGES.forEach(badge => {
            if (badgeData[badge.id]) {
                badge.earned = true;
            }
        });
    }

    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
        soundToggle.checked = soundEnabled;
    }

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Save badges
function saveBadges() {
    const badgeData = {};
    BADGES.forEach(badge => {
        badgeData[badge.id] = badge.earned;
    });
    localStorage.setItem('badges', JSON.stringify(badgeData));
}

// Phase 6 playSound removed - using original simple version above checkAnswer

// Check and award badges
function checkBadges(quizData) {
    let newBadges = [];

    // Perfect Score
    if (quizData.percentage === 100 && !BADGES[0].earned) {
        BADGES[0].earned = true;
        newBadges.push(BADGES[0]);
    }

    // Speed Demon (under 60 seconds)
    if (quizData.timeTaken < 60 && !BADGES[1].earned) {
        BADGES[1].earned = true;
        newBadges.push(BADGES[1]);
    }

    // Streak Master
    if (quizData.maxStreak >= 5 && !BADGES[2].earned) {
        BADGES[2].earned = true;
        newBadges.push(BADGES[2]);
    }

    // Scholar (10 quizzes completed)
    const quizCount = parseInt(localStorage.getItem('quizCount') || '0') + 1;
    localStorage.setItem('quizCount', quizCount.toString());
    if (quizCount >= 10 && !BADGES[3].earned) {
        BADGES[3].earned = true;
        newBadges.push(BADGES[3]);
    }

    if (newBadges.length > 0) {
        saveBadges();
        showBadgeNotification(newBadges);
    }
}

// Show badge notification
function showBadgeNotification(badges) {
    badges.forEach(badge => {
        const notification = document.createElement('div');
        notification.className = 'badge-notification';
        notification.innerHTML = `
            <div class="badge-notification-content">
                <span class="badge-notification-icon">${badge.icon}</span>
                <div>
                    <div class="badge-notification-title">Badge Earned!</div>
                    <div class="badge-notification-name">${badge.name}</div>
                </div>
            </div>
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    });
}

// Render badges in modal
function renderBadges() {
    badgesGrid.innerHTML = '';
    BADGES.forEach(badge => {
        const badgeElement = document.createElement('div');
        badgeElement.className = `badge-item ${badge.earned ? 'earned' : 'locked'}`;
        badgeElement.innerHTML = `
            <span class="badge-icon">${badge.icon}</span>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-description">${badge.description}</div>
        `;
        badgesGrid.appendChild(badgeElement);
    });
}

// Event Listeners
if (soundToggle) {
    soundToggle.addEventListener('change', () => {
        soundEnabled = soundToggle.checked;
        localStorage.setItem('soundEnabled', soundEnabled);
        playSound('click');
    });
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

if (badgesBtn) {
    badgesBtn.addEventListener('click', () => {
        renderBadges();
        badgesModal.classList.remove('hidden');
    });
}

if (closeBadgesModal) {
    closeBadgesModal.addEventListener('click', () => {
        badgesModal.classList.add('hidden');
    });
}

if (leaderboardBtn) {
    leaderboardBtn.addEventListener('click', () => {
        renderLeaderboard();
        leaderboardModal.classList.remove('hidden');
    });
}

// Render Leaderboard
function renderLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    // Sort by score (high to low)
    leaderboard.sort((a, b) => b.score - a.score);

    // Get list element (ensure it exists in HTML or use existing selector if available)
    // Assuming structure inside modal exists
    const listContainer = document.querySelector('#leaderboard-list');
    if (listContainer) {
        listContainer.innerHTML = '';

        if (leaderboard.length === 0) {
            listContainer.innerHTML = '<div class="empty-state">No scores yet. Play a quiz!</div>';
            return;
        }

        leaderboard.slice(0, 10).forEach((entry, index) => {
            const item = document.createElement('div');
            item.className = 'leaderboard-entry';
            item.innerHTML = `
                <div class="rank">#${index + 1}</div>
                <div class="details">
                    <div class="category">${entry.category.toUpperCase()} (${entry.level})</div>
                    <div class="date">${new Date(entry.date).toLocaleDateString()}</div>
                </div>
                <div class="score">${entry.score}%</div>
            `;
            listContainer.appendChild(item);
        });
    }
}

if (closeLeaderboardModal) {
    closeLeaderboardModal.addEventListener('click', () => {
        leaderboardModal.classList.add('hidden');
    });
}

// Info Modal Functions
function openInfoModal(title, content) {
    infoModalTitle.textContent = title;
    infoModalContent.innerHTML = content;
    infoModal.classList.remove('hidden');
}

if (closeInfoModal) {
    closeInfoModal.addEventListener('click', () => {
        infoModal.classList.add('hidden');
    });
}

if (howToPlayBtn) {
    howToPlayBtn.addEventListener('click', () => {
        openInfoModal('How to Play', `
            <div class="info-block">
                <p><strong>Step 1:</strong> Select a Category from the main menu.</p>
                <p><strong>Step 2:</strong> Choose a Difficulty Level (Easy, Medium, Hard).</p>
                <p><strong>Step 3:</strong> Answer questions before the timer runs out!</p>
                <div class="info-note">
                    <strong>Controls:</strong><br>
                    • Use your mouse/touch to select options.<br>
                    • Use keys <strong>1-4</strong> for quick selection.<br>
                    • Press <strong>Escape</strong> to close modals.
                </div>
            </div>
        `);
    });
    // Add keyboard support for accessibility
    howToPlayBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            howToPlayBtn.click();
        }
    });
}

if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        openInfoModal('About BrainQuest', `
            <div class="info-block" style="text-align: center;">
                <p><strong>BrainQuest v1.0.0</strong></p>
                <p>Designed for Excellence.</p>
                <p>Created by <strong>Aditya Jaiswal</strong></p>
                <br>
                <p>Featuring:</p>
                <ul style="list-style: none; padding: 0;">
                    <li>✨ Dark Mode</li>
                    <li>🏆 Leaderboards</li>
                    <li>🌍 Multilingual Support (Hindi)</li>
                </ul>
                <br>
                <p>&copy; 2025 All Rights Reserved.</p>
            </div>
        `);
    });
    aboutBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            aboutBtn.click();
        }
    });
}

// Close modals on outside click & Escape key
[badgesModal, leaderboardModal, infoModal].forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        [badgesModal, leaderboardModal, infoModal].forEach(modal => {
            if (modal && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
    }
});

// Load game data on startup
loadGameData();

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Only handle keys if quiz view is active
    if (!quizView.classList.contains('active')) return;

    const key = e.key;
    const options = document.querySelectorAll('.option-btn');

    if (['1', '2', '3', '4'].includes(key)) {
        const index = parseInt(key) - 1;
        if (options[index] && !options[index].disabled) {
            checkAnswer(index, options[index]);
        }
    }
});
