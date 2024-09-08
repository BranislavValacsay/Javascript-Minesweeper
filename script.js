const boardSize = 10;
const mineCount = 15;
let score = 0;

const board = [];
const gameBoardElement = document.getElementById('game-board');
const scoreElement = document.getElementById('score');

function initBoard() {
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = { mine: false, revealed: false };
        }
    }

    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
        const row = Math.floor(Math.random() * boardSize);
        const col = Math.floor(Math.random() * boardSize);
        if (!board[row][col].mine) {
            board[row][col].mine = true;
            minesPlaced++;
        }
    }
}

function renderBoard() {
    gameBoardElement.innerHTML = '';
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.row = i;
            cellElement.dataset.col = j;
            cellElement.addEventListener('click', onCellClick);
            gameBoardElement.appendChild(cellElement);
        }
    }
}

function countAdjacentMines(row, col) {
    let mineCount = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = parseInt(row) + i;
            const newCol = parseInt(col) + j;
            if (
                newRow >= 0 && newRow < boardSize &&
                newCol >= 0 && newCol < boardSize &&
                board[newRow][newCol].mine
            ) {
                mineCount++;
            }
        }
    }
    return mineCount;
}

function onCellClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    if (board[row][col].revealed) return;

    board[row][col].revealed = true;
    if (board[row][col].mine) {
        event.target.classList.add('mine');
        alert('Game Over!');
        resetGame();
    } else {
        event.target.classList.add('revealed');
        const mineCount = countAdjacentMines(row, col);
        event.target.textContent = mineCount;
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
}

function resetGame() {
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    initBoard();
    renderBoard();
}

initBoard();
renderBoard();
