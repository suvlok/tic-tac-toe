//Create the game normally then push to git, then try to add everything into functions


gameBoardArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let isPlayerOne = true;

const player = (name, symbol) => {
    return {name, symbol}
}

const player1 = player("Player 1", "X")
const player2 = player("Player 2", "O")

 
function createBoard(){
    let slots = document.getElementsByClassName("slot")
    
    for(x in gameBoardArray){
        slots[x].innerHTML = ""
    }

    for(let i = 0; i < slots.length; i++){
        slots[i].addEventListener("click", function() {
            game(slots[i], i)
        })
    }
} 

function game(slot, number){
    if(isPlayerOne && slot.innerHTML == ""){
        slot.innerHTML = player1.symbol
        isPlayerOne = false;

        gameBoardArray[number] = player1.symbol
    }
    else if (!isPlayerOne && slot.innerHTML == ""){
        slot.innerHTML = player2.symbol
        isPlayerOne = true

        gameBoardArray[number] = player2.symbol
    } 
    //console.log(slot.innerHTML)
    checkWinner(slot.innerHTML)

}

function checkWinner(lastPlacedSymbol){
    //getting the winner text
    winnerText = document.getElementById("game-outcome")

    if (gameBoardArray[0] == gameBoardArray[1] && gameBoardArray[0] == gameBoardArray[2] || gameBoardArray[3] == gameBoardArray[4] && gameBoardArray[3] == gameBoardArray[5] 
        || gameBoardArray[6] == gameBoardArray[7] && gameBoardArray[6] == gameBoardArray[8] || gameBoardArray[0] == gameBoardArray[4] && gameBoardArray[0] == gameBoardArray[8]
        || gameBoardArray[2] == gameBoardArray[4] && gameBoardArray[2] == gameBoardArray[6] || gameBoardArray[0] == gameBoardArray[3] && gameBoardArray[0] == gameBoardArray[6]
        || gameBoardArray[1] == gameBoardArray[4] && gameBoardArray[1] == gameBoardArray[7] || gameBoardArray[2] == gameBoardArray[5] && gameBoardArray[2] == gameBoardArray[8]){
        
        //Check the last placed marker. 
        if(lastPlacedSymbol == player1.symbol){
            winnerText.innerHTML = player1.name + " is the winner"
        }   
        else{
            winnerText.innerHTML = player2.name + " is the winner"
        }
        
    }

}

function restart(){
    let slots = document.getElementsByClassName("slot")
    winnerText = document.getElementById("game-outcome")

    for(x in gameBoardArray){
        slots[x].innerHTML = ""
    }
    gameBoardArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    winnerText.innerHTML = ""
}

createBoard()
