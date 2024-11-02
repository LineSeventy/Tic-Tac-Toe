let player1 = new playerSystem("X")
let player2 = new playerSystem("O")



function playerSystem (playerName,playerScore = 0,rounds = 0,wins = 0,turn = 0) {
    this.playerName = playerName;
    this.playerScore = playerScore;
    this.rounds = rounds;
    this.wins = wins;
    this.turn = turn;
}


let playerTurnSystem = () =>{
    if(player1.turn > player2.turn){
        player2.turn += 1;
        }else{
            player1.turn += 1;
        }
        console.log(player1.turn +" " + player2.turn)
    }



 
    let gameDisplay = () => {
        let gameBoard = ["#","#","#","#","#","#","#","#","#"];
        
        for(let i = 0; i < 9; i++){
            let replacePosition = prompt("Position 1-9") - 1;
            let newValue = prompt("X or O");
            gameBoard[replacePosition] = newValue;
            console.log(gameBoard);
            
            if (checkWin(gameBoard)) {
                console.log("We have a winner!");
                return; 
            }
            
            playerTurnSystem();  
        }
        
        function checkWin(gameBoard,player1,player2) {
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
            
            for(const req of winReq){
                if(req.every(index => gameBoard[index] === 'X')){
                    return true;
                    console.log(player1.playerName)
                }
                if(req.every(index => gameBoard[index] === 'O')){
                    return true;
                    console.log(player2.playerName)
                }
            }
            return false;
        }
    };
    


gameDisplay();