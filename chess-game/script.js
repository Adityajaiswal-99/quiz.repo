
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

// Audio Assets (Base64 for reliability)
const sounds = {
    // Short "Pop" for move
    move: new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA='),
    // We will use real base64 short sounds below to ensure they play. 
    // Placeholder empty wavs above for safety if string too long, but let's try a simple beep system or better yet, short encoded beeps.
    // Actually, simple beeps are better than nothing or broken URLs.
    // Let's use a specialized function to generate beeps if we want to be ultra-safe, or real base64.
    // For "Premium" feel, I will use generated oscillator tones if base64 is too large, but standard base64 click sounds are ~5kb.
    // "Click"
    move_real: 'data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG84W0Wj5gKHCew0/gMAAAABwIBAQAA//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG84W0Wj5gKHCew0/gMAAAABwIBAQAA', // This is just a dummy.
    // Real implementation: Web Audio API for synthesized premium sounds.
};

// Premium Synthesized Sounds (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === 'move') {
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'capture') {
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
    } else if (type === 'check') {
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.linearRampToValueAtTime(500, now + 0.1); // Wah-wah
        osc.frequency.linearRampToValueAtTime(600, now + 0.2);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'gameover') {
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.4);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.8);
        osc.start(now);
        osc.stop(now + 0.8);
    }
}

// Global Game State
let game = new Chess();
let selectedSquare = null;
let playerColor = 'w';
let gameMode = 'player';
let aiLevel = 3;
let stockfish = null;
let isEngineReady = false;
let orientation = 'white';
let whiteTime = 600;
let blackTime = 600;
let timerInterval = null;

// Initialize
function init() {
    initBoard();
    initStockfish();
    setupEventListeners();
    updateStatus();
    renderBoard();
}

// SETUP STOCKFISH (Retry Logic & Fallback)
function initStockfish() {
    // Attempt to load from a reliable CDN with Cross-Origin workaround
    const stockfishUrl = 'https://unpkg.com/stockfish@10.0.0/src/stockfish.js'; // Reliable CDN

    try {
        const blob = new Blob([`importScripts('${stockfishUrl}');`], { type: 'application/javascript' });
        stockfish = new Worker(URL.createObjectURL(blob));

        stockfish.onmessage = function (event) {
            const line = event.data;
            if (line === 'uciok') {
                isEngineReady = true;
                console.log("Stockfish Ready.");
            } else if (line.startsWith('bestmove')) {
                const move = line.split(' ')[1];
                makeAiMove(move);
            }
        };

        stockfish.onerror = function (e) {
            console.warn("Stockfish Worker Failed. Using Random Fallback.", e);
            isEngineReady = false;
        };

        stockfish.postMessage('uci');
    } catch (e) {
        console.warn("Stockfish Init Failed. Using Fallback.");
        isEngineReady = false;
    }
}

function getFallbackMove() {
    // Simple Minimax or Random if engine fails
    // For now, random legal move to ensure playability
    const moves = game.moves();
    if (moves.length === 0) return null;
    return moves[Math.floor(Math.random() * moves.length)];
}

// Setup Event Listeners
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
    orientation = 'white';
    playerColor = 'w';
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    playTone('gameover'); // Start sound

    // Resume Audio Context if needed
    if (audioCtx.state === 'suspended') audioCtx.resume();

    // AI Setup
    if (gameMode === 'ai' && isEngineReady) {
        aiLevel = parseInt(aiLevelInput.value);
        const skill = { 1: 0, 2: 5, 3: 10, 4: 15, 5: 20 }[aiLevel] || 10;
        stockfish.postMessage(`setoption name Skill Level value ${skill}`);
    }

    updateStatus();
    renderBoard();
    updateHistoryUI();
}

function flipBoard() {
    orientation = orientation === 'white' ? 'black' : 'white';
    renderBoard();
}

function getPieceIcon(piece) {
    if (!piece) return '';
    const urlMap = {
        'w': { 'p': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg', 'r': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg', 'n': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg', 'b': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg', 'q': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg', 'k': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg' },
        'b': { 'p': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg', 'r': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg', 'n': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg', 'b': 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg', 'q': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg', 'k': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg' }
    };
    return urlMap[piece.color][piece.type];
}

// Board Logic
function initBoard() { renderBoard(); }

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
            squareDiv.classList.add('square');
            squareDiv.classList.add((r + c) % 2 === 0 ? 'white' : 'black');
            squareDiv.dataset.square = squareId;

            if (selectedSquare === squareId) squareDiv.classList.add('selected');

            // King Check Pulse
            const piece = board[row][col];
            if (piece && piece.type === 'k' && piece.color === game.turn() && game.in_check()) {
                squareDiv.classList.add('in-check');
            }

            // Piece
            if (piece) {
                const pieceDiv = document.createElement('div');
                pieceDiv.classList.add('piece');
                pieceDiv.style.backgroundImage = `url(${getPieceIcon(piece)})`;
                pieceDiv.draggable = true;

                // Desktop Drag
                pieceDiv.addEventListener('dragstart', (e) => handleDragStart(e, squareId));

                // Mobile Touch Drag
                pieceDiv.addEventListener('touchstart', (e) => handleTouchStart(e, squareId));
                pieceDiv.addEventListener('touchmove', (e) => handleTouchMove(e));
                pieceDiv.addEventListener('touchend', (e) => handleTouchEnd(e));

                squareDiv.appendChild(pieceDiv);
            }

            squareDiv.addEventListener('dragover', (e) => e.preventDefault());
            squareDiv.addEventListener('drop', (e) => handleDrop(e, squareId));
            squareDiv.addEventListener('click', () => handleSquareClick(squareId));

            boardElement.appendChild(squareDiv);
        }
    }
}

// Interaction Handlers
function handleDragStart(e, sourceSquare) {
    if (checkInteractionAllowed(sourceSquare)) {
        selectedSquare = sourceSquare;
        renderBoard();
        highlightLegalMoves(sourceSquare);
        e.dataTransfer.setData('text/plain', sourceSquare);
    } else {
        e.preventDefault();
    }
}

// Mobile Touch Logic
let touchSourceSquare = null;
let activePieceElement = null;

function handleTouchStart(e, sourceSquare) {
    if (checkInteractionAllowed(sourceSquare)) {
        e.preventDefault(); // Prevent scroll
        touchSourceSquare = sourceSquare;
        selectedSquare = sourceSquare;
        renderBoard();
        highlightLegalMoves(sourceSquare);

        // Visual feedback
        const touch = e.touches[0];
        activePieceElement = e.target;
        activePieceElement.style.position = 'absolute';
        activePieceElement.style.zIndex = '1000';
        activePieceElement.style.width = '60px'; // Fixed size for varying screens
        activePieceElement.style.height = '60px';
        movePieceToTouch(touch);
    }
}

function handleTouchMove(e) {
    if (activePieceElement) {
        e.preventDefault();
        movePieceToTouch(e.touches[0]);
    }
}

function handleTouchEnd(e) {
    if (activePieceElement) {
        activePieceElement.style.position = '';
        activePieceElement.style.zIndex = '';
        activePieceElement = null;

        // Determine drop target via coordinates
        const touch = e.changedTouches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        const targetSquareDiv = targetElement?.closest('.square');

        if (targetSquareDiv) {
            const targetSquare = targetSquareDiv.dataset.square;
            attemptMove(touchSourceSquare, targetSquare);
        } else {
            renderBoard(); // Reset
        }
        touchSourceSquare = null;
    }
}

function movePieceToTouch(touch) {
    if (activePieceElement) {
        activePieceElement.style.left = (touch.clientX - 30) + 'px';
        activePieceElement.style.top = (touch.clientY - 30) + 'px';
    }
}

function checkInteractionAllowed(square) {
    if (game.game_over()) return false;
    if (gameMode === 'ai' && game.turn() !== playerColor) return false;
    const piece = game.get(square);
    return piece && piece.color === game.turn();
}

function handleDrop(e, targetSquare) {
    e.preventDefault();
    const sourceSquare = e.dataTransfer.getData('text/plain');
    attemptMove(sourceSquare, targetSquare);
}

function handleSquareClick(squareId) {
    if (game.game_over()) return;
    const piece = game.get(squareId);

    if (selectedSquare === null) {
        if (piece && piece.color === game.turn()) {
            selectedSquare = squareId;
            renderBoard();
            highlightLegalMoves(squareId);
        }
    } else {
        if (selectedSquare === squareId) {
            selectedSquare = null;
            renderBoard();
        } else {
            const success = attemptMove(selectedSquare, squareId);
            if (!success) {
                if (piece && piece.color === game.turn()) {
                    selectedSquare = squareId;
                    renderBoard();
                    highlightLegalMoves(squareId);
                } else {
                    selectedSquare = null;
                    renderBoard();
                }
            }
        }
    }
}

function attemptMove(from, to) {
    const piece = game.get(from);
    if (!piece) return false; // Safety

    // Pawn Promotion Check
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
    } catch (e) { return false; }
    return false;
}

function handleMoveResult(move) {
    if (move.flags.includes('c') || move.flags.includes('e')) playTone('capture');
    else playTone('move');

    if (game.in_check()) playTone('check');

    selectedSquare = null;
    onMoveMade();
}

function promote(from, to, promotionPiece) {
    const result = game.move({ from, to, promotion: promotionPiece });
    if (result) {
        playTone('promote');
        handleMoveResult(result);
    }
    promotionModal.classList.add('hidden');
}

function showPromotionModal(from, to, color) {
    promotionOptions.innerHTML = '';
    ['q', 'r', 'b', 'n'].forEach(pCode => {
        const img = document.createElement('img');
        img.src = getPieceIcon({ type: pCode, color });
        img.classList.add('promo-piece');
        img.onclick = () => promote(from, to, pCode);
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

    // AI Turn
    if (gameMode === 'ai' && game.turn() !== playerColor) {
        setTimeout(() => {
            if (isEngineReady) {
                stockfish.postMessage(`position fen ${game.fen()}`);
                stockfish.postMessage(`go depth ${aiLevel * 2}`);
            } else {
                // Fallback AI
                const moveStr = getFallbackMove();
                if (moveStr) {
                    game.move(moveStr);
                    handleMoveResult({ flags: 'n' }); // Simplified fake result for sound
                }
            }
        }, 500);
    }
}

function makeAiMove(bestMove) {
    const from = bestMove.substring(0, 2);
    const to = bestMove.substring(2, 4);
    const promotion = bestMove.length > 4 ? bestMove.substring(4, 5) : undefined;

    const result = game.move({ from, to, promotion });
    if (result) handleMoveResult(result);
}

function highlightLegalMoves(square) {
    const moves = game.moves({ square, verbose: true });
    moves.forEach(move => {
        const el = document.querySelector(`[data-square="${move.to}"]`);
        if (el) el.classList.add(move.flags.includes('c') ? 'capture-hint' : 'highlight');
    });
}

function updateStatus() {
    // ... (Keep existing status logic)
    let status = '';
    let tc = '';
    if (game.in_checkmate()) { status = 'Checkmate!'; }
    else if (game.in_draw()) { status = 'Draw'; }
    else {
        status = game.turn() === 'w' ? "White's Turn" : "Black's Turn";
        tc = game.turn() === 'w' ? '#ffffff' : '#000000';
        if (game.in_check()) { status += ' (Check!)'; tc = '#ff0000'; }
    }
    statusElement.innerText = status;
    statusDot.style.backgroundColor = tc;
}

function updateTimer() {
    if (game.game_over()) return;
    if (game.turn() === 'w') {
        whiteTime--;
        whiteTimeElement.innerText = formatTime(whiteTime);
        if (whiteTime <= 0) endGame('Black wins on time');
    } else {
        blackTime--;
        blackTimeElement.innerText = formatTime(blackTime);
        if (blackTime <= 0) endGame('White wins on time');
    }
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function updateHistoryUI() {
    const history = game.history({ verbose: true });
    moveHistoryElement.innerHTML = '';
    for (let i = 0; i < history.length; i += 2) {
        const moveWhite = history[i];
        const moveBlack = history[i + 1];
        const row = document.createElement('div');
        row.classList.add('move-row');
        row.innerHTML = `<span class="move-num">${Math.floor(i / 2) + 1}.</span><span class="move-white">${moveWhite.san}</span><span class="move-black">${moveBlack ? moveBlack.san : ''}</span>`;
        moveHistoryElement.appendChild(row);
    }
    moveHistoryElement.scrollTop = moveHistoryElement.scrollHeight;
}

function undoMove() {
    game.undo();
    if (gameMode === 'ai') game.undo();
    renderBoard();
    updateStatus();
    updateHistoryUI();
}

function endGame(msg) {
    playTone('gameover');
    gameOverModal.classList.remove('hidden');
    if (msg) {
        gameOverTitle.innerText = "Game Over";
        gameOverMsg.innerText = msg;
    } else {
        if (game.in_checkmate()) {
            gameOverTitle.innerText = "Checkmate!";
            gameOverMsg.innerText = game.turn() === 'w' ? "Black Wins!" : "White Wins!";
        } else if (game.in_draw()) {
            gameOverTitle.innerText = "Draw!";
            gameOverMsg.innerText = "Stalemate.";
        }
    }
    clearInterval(timerInterval);
}

init();
