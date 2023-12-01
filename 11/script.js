let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            highlightWinnerCells();
            gameActive = false;
        } else if (!gameBoard.includes('')) {
            document.getElementById('message').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function highlightWinnerCells() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.querySelectorAll('.cell')[a].classList.add('winner');
            document.querySelectorAll('.cell')[b].classList.add('winner');
            document.querySelectorAll('.cell')[c].classList.add('winner');
        }
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';

    document.getElementById('message').textContent = "Player X's turn";

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
}
1