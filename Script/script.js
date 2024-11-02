class PlayerSystem {
    constructor(playerName, playerScore = 0, rounds = 0, wins = 0) {
        this.playerName = playerName;
        this.playerScore = playerScore;
        this.rounds = rounds;
        this.wins = wins;
        this.turn = 0; 
    }

    turnPlus() {
        this.turn += 1;
    }

    checkWin(gameBoard) {
        const winReq = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const req of winReq) {
            if (req.every(index => gameBoard[index] === this.playerName)) {
                return true;
            }
        }
        return false;
    }
}

let player1 = new PlayerSystem("X");
let player2 = new PlayerSystem("O");

let gameStart = () => {
    let gameBoard = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    let currentPlayer = player1; 

    const buttons = document.querySelectorAll('.buttonContainer button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (gameBoard[index] === '#') {
                gameBoard[index] = currentPlayer.playerName; 
                button.textContent = currentPlayer.playerName; 
                if (currentPlayer.checkWin(gameBoard)) { 
                    alert(`${currentPlayer.playerName} wins!`);
                    resetGame(); 
                } else {
                    playerTurnSystem(); 
                    currentPlayer = currentPlayer === player1 ? player2 : player1; 
                }
            }
        });
    });


    const playerTurnSystem = () => {
        currentPlayer.turnPlus(); 
    }

    // Function to reset the game
    function resetGame() {
        gameBoard = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
        buttons.forEach(button => {
            button.textContent = '#'; 
        });
        player1.turn = 0; 
        player2.turn = 0;
        currentPlayer = player1; 
    }
}

gameStart();
