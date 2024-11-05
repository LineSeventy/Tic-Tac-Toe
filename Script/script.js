"use strict";

class PlayerSystem {
    constructor(playerName, playerScore = 0, rounds = 0, wins = 0, nickname) {
        this.playerName = playerName;
        this.playerScore = playerScore;
        this.rounds = rounds;
        this.wins = wins;
        this.turn = 0; 
        this.nickname = nickname;
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
let gameBoard = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
let currentPlayer = player1; 
const buttons = document.querySelectorAll('.buttonContainer button');
const modelStart = document.querySelector("#startPopUp");
const closeModalStart = document.querySelector(".submitBtn");
const playerName1 = document.querySelector("#playerX");
const playerName2 = document.querySelector("#playerO");
player1.nickname = playerName1.value;
player2.nickname = playerName2.value;
const displayName1 = document.querySelector(".displayName1");
const displayName2 = document.querySelector(".displayName2");
closeModalStart.addEventListener("click", () => {
    if(!playerName1.value || !playerName2.value){
        alert("Add Names");
        Event.stopPropagation();
    }else{
    displayName1.textContent = `${playerName1.value}`;
    displayName2.textContent = `${playerName2.value}`;
    modelStart.style.display = "none"
}
})
let winnerModal = document.querySelector(".popUpEnd");
let winnerModalContent = document.querySelector(".contentWinner");
let winnerCloseBtn = document.querySelector(".winnerCloseBtn");
let winnerName = document.querySelector(".replace")
let winnerModalSys = () =>{
    if (currentPlayer.checkWin(gameBoard)){
        winnerModal.style.display = "block";
        winnerName.textContent = `You Win!   ${currentPlayer.nickname}`
        winnerModalContent.appendChild(winnerName);
    }
     winnerCloseBtn.addEventListener('click', () => {
        winnerModal.style.display = "none"
        winnerName.textContent = ""
    })
}

let gameStart = () => {
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (gameBoard[index] === '#') {
                gameBoard[index] = currentPlayer.playerName; 
                button.textContent = currentPlayer.playerName; 
                if (currentPlayer.checkWin(gameBoard)) { 
                    winnerModalSys();
                    resetGame(); 
                } else {
                    playerTurnSystem(); 
                    currentPlayer = currentPlayer === player1 ? player2 : player1; 
                }
            }
        });
    });
};

const playerTurnSystem = () => {
    currentPlayer.turnPlus(); 
}

let resetGame = () => {
    gameBoard = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    buttons.forEach(button => {
        button.textContent = '#'; 
    });
    player1.turn = 0; 
    player2.turn = 0;
    currentPlayer = player1; 
}

gameStart();
