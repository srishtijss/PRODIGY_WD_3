let gameBoard = [];
let currentPlayer = 'X';
let gameOver = false;

for (let i = 0; i < 9; i++) {
    gameBoard.push('');
}

const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

resetButton.addEventListener('click', () => {
    gameBoard = [];
    for (let i = 0; i < 9; i++) {
        gameBoard.push('');
    }
    cells.forEach((cell) => {
        cell.textContent = '';
    });
    gameOver = false;
    currentPlayer = 'X';
    gameStatus.textContent = 'Game in progress...';
});

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        if (
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]] &&
            gameBoard[condition[0]] !== ''
        ) {
            gameOver = true;
            gameStatus.textContent = Player ${gameBoard[condition[0]]} wins!;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameOver = true;
        gameStatus.textContent = 'It\'s a draw!';
    }
}