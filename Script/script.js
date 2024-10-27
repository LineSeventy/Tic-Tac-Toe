let gameBoard = function() {
    let userClick = document.querySelector("button")
    let rounds = 0;
    
    while (rounds > 9) {
        userClick.addEventListener("click", () => {
            userClick.textContent ="X"
        })
        rounds++;
    }
}

gameBoard();