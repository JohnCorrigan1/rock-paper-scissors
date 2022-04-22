//computer randomly chooses rock paper or scissors
function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors'];
    let computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
    
    return computerSelection;
}
let roundsWon = 0;
let roundsLost = 0;

// prompts user for input if user wins add 1 to rounds won if lose add 1 to rounds lost if tie do nothing
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Enter Rock, Paper, or Scissors to play: ");
    playerSelection.toLowerCase();
    computerSelection = computerPlay();
    
    if (computerSelection == playerSelection) {
        console.log("Tie game");
    }
    
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        roundsWon = roundsWon + 1;
        console.log("You win! Rock beats scissors");
    
        return roundsWon;
        
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        
        console.log("You lose! Paper beats rock");
        roundsLost = roundsLost + 1;
        return roundsLost;
    }
    
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        
        console.log("You lose! Rock beats scissors");
        roundsLost = roundsLost + 1;
        return roundsLost;
    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      
        console.log("You win! Scissors beats paper");
        roundsWon = roundsWon + 1;
        return roundsWon;
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        
        console.log("You lose! Scissors beats paper");
        roundsLost = roundsLost + 1;
        return roundsLost;
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        
        console.log("You win! Paper beats Rock");
        roundsWon = roundsWon + 1;
        return roundsWon;
    }
}

//run game 5 and give result
function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            playRound();
        }
    }
    console.log(roundsWon, roundsLost);
    if (roundsWon == roundsLost) {
        console.log("Tie game nobody wins");
    }
    else if (roundsWon > roundsLost) {
        console.log("You are the winner!");
    }
    else {
        console.log("You are the loser!");
    }
}

game();