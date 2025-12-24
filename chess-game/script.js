
// DOM Elements
const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status-text');
const statusDot = document.querySelector('.status-dot');
const whiteTimeElement = document.getElementById('white-time');
const blackTimeElement = document.getElementById('black-time');
const moveHistoryElement = document.getElementById('move-history');
const pvpBtn = document.querySelector('[data-mode="player"]');
const aiBtn = document.querySelector('[data-mode="ai"]');
const difficultySelector = document.getElementById('difficulty-selector');
const aiLevelInput = document.getElementById('ai-level');
const startGameBtn = document.getElementById('start-game-btn');
const undoBtn = document.getElementById('undo-btn');
const flipBtn = document.getElementById('flip-board-btn');
const gameOverModal = document.getElementById('game-over-modal');
const gameOverTitle = document.getElementById('game-over-title');
const gameOverMsg = document.getElementById('game-over-message');
const closeModalBtn = document.getElementById('close-modal-btn');
const promotionModal = document.getElementById('promotion-modal');
const promotionOptions = document.getElementById('promotion-options');

// --- Audio System (Web Audio API for Reliability) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    // Sound Profiles
    if (type === 'move') {
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now); osc.stop(now + 0.1);
    } else if (type === 'capture') {
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now); osc.stop(now + 0.15);
    } else if (type === 'check') {
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.linearRampToValueAtTime(600, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'gameover') {
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(600, now + 0.5);
        gain.gain.setValueAtTime(0.4, now);
        osc.start(now); osc.stop(now + 1);
    }
}

// --- Game State ---
let game = new Chess();
let selectedSquare = null;
let playerColor = 'w';
let gameMode = 'player';
let aiDifficulty = 3; // 1-5 depth
let orientation = 'white';
let whiteTime = 600;
let blackTime = 600;
let timerInterval = null;

// --- Initialization ---
function init() {
    setupEventListeners();
    startNewGame(); // Start immediately
}

function setupEventListeners() {
    pvpBtn.addEventListener('click', () => setGameMode('player'));
    aiBtn.addEventListener('click', () => setGameMode('ai'));
    startGameBtn.addEventListener('click', startNewGame);
    undoBtn.addEventListener('click', undoMove);
    flipBtn.addEventListener('click', flipBoard);
    closeModalBtn.addEventListener('click', () => gameOverModal.classList.add('hidden'));
    document.getElementById('rematch-btn').addEventListener('click', () => {
        gameOverModal.classList.add('hidden');
        startNewGame();
    });
}

function setGameMode(mode) {
    gameMode = mode;
    pvpBtn.classList.toggle('active', mode === 'player');
    aiBtn.classList.toggle('active', mode === 'ai');
    difficultySelector.classList.toggle('hidden', mode !== 'ai');
}

function startNewGame() {
    game.reset();
    whiteTime = 600;
    blackTime = 600;
    playerColor = 'w';
    selectedSquare = null;
    orientation = 'white';

    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    if (gameMode === 'ai') {
        const level = parseInt(aiLevelInput.value);
        aiDifficulty = Math.max(1, Math.min(level, 4)); // Cap depth at 4 for JS performance
    }

    playTone('move');
    renderBoard();
    updateStatus();
    updateHistoryUI();
}

function flipBoard() {
    orientation = orientation === 'white' ? 'black' : 'white';
    renderBoard();
}

// --- Board Logic & Interaction ---
function renderBoard() {
    boardElement.innerHTML = '';
    const board = game.board();
    const isWhite = orientation === 'white';

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const row = isWhite ? r : 7 - r;
            const col = isWhite ? c : 7 - c;
            const squareId = String.fromCharCode(97 + col) + (8 - row);

            const squareDiv = document.createElement('div');
            squareDiv.className = `square ${(r + c) % 2 === 0 ? 'white' : 'black'}`;
            squareDiv.dataset.square = squareId;

            // Selection Highlight
            if (selectedSquare === squareId) squareDiv.classList.add('selected');

            // Last Move Highlight
            const history = game.history({ verbose: true });
            if (history.length > 0) {
                const lastMove = history[history.length - 1];
                if (lastMove.from === squareId || lastMove.to === squareId) squareDiv.classList.add('last-move');
            }

            // Check Pulse
            const piece = board[row][col];
            if (piece && piece.type === 'k' && piece.color === game.turn() && game.in_check()) {
                squareDiv.classList.add('in-check');
            }

            // Render Piece
            if (piece) {
                const pieceDiv = document.createElement('div');
                pieceDiv.className = 'piece';
                pieceDiv.style.backgroundImage = `url(${getPieceIcon(piece)})`;
                squareDiv.appendChild(pieceDiv);
            }

            // Interaction - Unified Click/Tap Handler
            squareDiv.addEventListener('click', (e) => handleSquareClick(squareId));

            // Legal Move Hint
            if (selectedSquare) {
                const moves = game.moves({ square: selectedSquare, verbose: true });
                const isLegal = moves.some(m => m.to === squareId);
                if (isLegal) {
                    squareDiv.classList.add(game.get(squareId) ? 'capture-hint' : 'highlight');
                }
            }

            boardElement.appendChild(squareDiv);
        }
    }
}

function getPieceIcon(piece) {
    const urls = {
        'w': { 'p': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg', 'r': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg', 'n': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg', 'b': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg', 'q': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg', 'k': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg' },
        'b': { 'p': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg', 'r': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg', 'n': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg', 'b': 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg', 'q': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg', 'k': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg' }
    };
    return urls[piece.color][piece.type];
}

function handleSquareClick(squareId) {
    if (game.game_over()) return;
    if (gameMode === 'ai' && game.turn() !== playerColor) return; // Wait for AI

    const piece = game.get(squareId);

    // If selecting piece
    if (selectedSquare === null) {
        if (piece && piece.color === game.turn()) {
            selectedSquare = squareId;
            renderBoard();
        }
        return;
    }

    // If unselecting or changing selection
    if (selectedSquare === squareId) {
        selectedSquare = null;
        renderBoard();
        return;
    }

    // Attempt move
    const success = attemptMove(selectedSquare, squareId);
    if (!success) {
        // If clicked on own piece, change selection
        if (piece && piece.color === game.turn()) {
            selectedSquare = squareId;
            renderBoard();
        } else {
            selectedSquare = null;
            renderBoard();
        }
    }
}

function attemptMove(from, to) {
    const piece = game.get(from);
    // Pawn Promo Check
    if (piece.type === 'p' && ((piece.color === 'w' && to[1] === '8') || (piece.color === 'b' && to[1] === '1'))) {
        showPromotionModal(from, to, piece.color);
        return true;
    }

    try {
        const result = game.move({ from, to });
        if (result) {
            handleMoveResult(result);
            return true;
        }
    } catch (e) { }
    return false;
}

function handleMoveResult(move) {
    playTone(move.flags.includes('c') ? 'capture' : 'move');
    if (game.in_check()) playTone('check');

    selectedSquare = null;
    onMoveMade();
}

function promote(from, to, pCode) {
    const result = game.move({ from, to, promotion: pCode });
    if (result) handleMoveResult(result);
    promotionModal.classList.add('hidden');
}

function showPromotionModal(from, to, color) {
    promotionOptions.innerHTML = '';
    ['q', 'r', 'b', 'n'].forEach(p => {
        const img = document.createElement('img');
        img.src = getPieceIcon({ type: p, color });
        img.className = 'promo-piece';
        img.onclick = () => promote(from, to, p);
        promotionOptions.appendChild(img);
    });
    promotionModal.classList.remove('hidden');
}

function onMoveMade() {
    renderBoard();
    updateStatus();
    updateHistoryUI();

    if (game.game_over()) {
        endGame();
        return;
    }

    // Trigger AI
    if (gameMode === 'ai' && game.turn() !== playerColor) {
        setTimeout(makeMinimaxMove, 100); // 100ms delay for UI repaint
    }
}

// --- Local Minimax AI (Robust & Fast) ---
function makeMinimaxMove() {
    if (game.game_over()) return;

    // Use Web Worker idea? No, let's keep it main thread for simplicity and "guaranteed run".
    // Depth 3 is usually instant in JS.
    const depth = aiDifficulty;
    const bestMove = getBestMove(game, depth);

    game.move(bestMove);
    handleMoveResult({ flags: 'n', ...bestMove }); // Dummy flags since we already moved
}

// Piece Values
const pieceValues = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };

function evaluateBoard(gameInst) {
    let totalEvaluation = 0;
    const board = gameInst.board();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const piece = board[i][j];
            if (piece) {
                const value = pieceValues[piece.type];
                totalEvaluation += piece.color === 'w' ? value : -value;
            }
        }
    }
    return totalEvaluation;
}

function getBestMove(gameInst, depth) {
    // Generate all moves
    const moves = gameInst.moves();
    let bestMove = -9999;
    let bestMoveFound = moves[0];

    // If no moves, game over
    if (moves.length === 0) return null;

    // Simple randomization for variety if scores are equal
    // But for Minimax, just find max.

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        gameInst.move(move);
        const value = minimax(gameInst, depth - 1, -10000, 10000, false);
        gameInst.undo();

        // AI plays Black usually in this logic (if Player is White)
        // Adjust for AI Color
        if (playerColor === 'w') {
            // AI is Black -> wants to Minimize evaluation
            if (value <= bestMove) { // Fail, my minimax logic below returns max for white.
                // Wait. 
            }
        }
    }

    // Re-doing Minimax entry properly
    // Let's assume AI is ALWAYS Black for now.
    // So AI wants to Minimize the score. 
    // BUT common minimax implements "maximizingPlayer" boolean.

    let isMaximizing = (game.turn() === 'w'); // If AI turn is W, it wants max. If B, min.

    if (isMaximizing) {
        let bestVal = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            gameInst.move(moves[i]);
            let value = minimax(gameInst, depth - 1, -Infinity, Infinity, false);
            gameInst.undo();
            if (value > bestVal) { bestVal = value; bestMoveFound = moves[i]; }
        }
    } else {
        let bestVal = Infinity;
        for (let i = 0; i < moves.length; i++) {
            gameInst.move(moves[i]);
            let value = minimax(gameInst, depth - 1, -Infinity, Infinity, true);
            gameInst.undo();
            if (value < bestVal) { bestVal = value; bestMoveFound = moves[i]; }
        }
    }
    return bestMoveFound;
}

function minimax(gameInst, depth, alpha, beta, isMaximizing) {
    if (depth === 0) return evaluateBoard(gameInst);

    const moves = gameInst.moves();
    if (moves.length === 0) return evaluateBoard(gameInst); // Checkmate or stalemate

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            gameInst.move(moves[i]);
            const eval = minimax(gameInst, depth - 1, alpha, beta, false);
            gameInst.undo();
            maxEval = Math.max(maxEval, eval);
            alpha = Math.max(alpha, eval);
            if (beta <= alpha) break;
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < moves.length; i++) {
            gameInst.move(moves[i]);
            const eval = minimax(gameInst, depth - 1, alpha, beta, true);
            gameInst.undo();
            minEval = Math.min(minEval, eval);
            beta = Math.min(beta, eval);
            if (beta <= alpha) break;
        }
        return minEval;
    }
}

// --- UI Helpers ---
function updateStatus() {
    let status = game.turn() === 'w' ? "White's Turn" : "Black's Turn";
    let color = game.turn() === 'w' ? '#fff' : '#000';

    if (game.in_checkmate()) status = "Checkmate!";
    else if (game.in_draw()) status = "Draw.";
    else if (game.in_check()) status += " (Check!)";

    statusElement.innerText = status;
    statusDot.style.backgroundColor = color;

    document.querySelector('.white-timer').classList.toggle('active', game.turn() === 'w');
    document.querySelector('.black-timer').classList.toggle('active', game.turn() === 'b');
}

function updateHistoryUI() {
    moveHistoryElement.innerHTML = '';
    const history = game.history();
    for (let i = 0; i < history.length; i += 2) {
        const row = document.createElement('div');
        row.className = 'move-row';
        row.innerHTML = `<span class="move-num">${i / 2 + 1}.</span> <span class="move-white">${history[i]}</span> <span class="move-black">${history[i + 1] || ''}</span>`;
        moveHistoryElement.appendChild(row);
    }
    moveHistoryElement.scrollTop = moveHistoryElement.scrollHeight;
}

function updateTimer() {
    if (game.turn() === 'w') {
        whiteTime--;
        whiteTimeElement.innerText = formatTime(whiteTime);
        if (whiteTime <= 0) endGame("Black wins on time");
    } else {
        blackTime--;
        blackTimeElement.innerText = formatTime(blackTime);
        if (blackTime <= 0) endGame("White wins on time");
    }
}

function formatTime(s) {
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${m}:${ss < 10 ? '0' : ''}${ss}`;
}

function endGame(msg) {
    clearInterval(timerInterval);
    playTone('gameover');
    gameOverTitle.innerText = "Game Over";
    gameOverMsg.innerText = msg || (game.turn() === 'w' ? "Black Wins" : "White Wins");
    gameOverModal.classList.remove('hidden');
}

// Start
init();
