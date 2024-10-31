function playerSystem (playerName,playerScore = 0,rounds = 0,wins = 0,turn = 0) {
    this.playerName = playerName;
    this.playerScore = playerScore;
    this.rounds = rounds;
    this.wins = wins;
    this.turn = turn;
}

let player1 = new playerSystem(prompt("Your Name"))
let player2 = new playerSystem(prompt("Your Name"))
console.log(player1.playerName)

let playerTurnSystem = () =>{
    if(player1.turn > player2.turn){
        player2.turn += 1;
        }else{
            player1.turn += 1;
        }
        console.log(player1.turn +" " + player2.turn)
    }


// let gameBoard = () => {
    let board = [1,2,3,4,5,6,7,8,9];

    for(let i = 0; i < 2; i++){
    let replacePosition = prompt("Position") -1;
    let newValue = prompt("X or O");
    board[replacePosition] = newValue;
    console.log(board);
    playerTurnSystem();

    }
// }



// gameBoard();