const container = document.querySelector('#container');


const title = document.createElement('h1');
title.textContent = 'Rock Paper Scissors';
title.classList.add('title');
container.appendChild(title);

const subTitle = document.createElement('h3');
subTitle.textContent = 'Click an option to start a round';
container.appendChild(subTitle);


const btnr = document.createElement('button');
btnr.classList.add('btn', 'btnr');
container.appendChild(btnr);
btnr.id = btnr;

btnr.addEventListener('click', function () {
    playerSelection = 'rock';
    playRound(playerSelection);
});

const btnp = document.createElement('button');
btnp.classList.add('btn', 'btnp');
container.appendChild(btnp);

btnp.addEventListener('click', function () {
    playerSelection = 'paper';
    playRound(playerSelection);
});

const btns = document.createElement('button');
btns.classList.add('btn', 'btns');
container.appendChild(btns);

btns.addEventListener('click', function () {
    playerSelection = 'scissors';
    playRound(playerSelection);
});


//computer randomly chooses rock paper or scissors
function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors'];
    let computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
    
    return computerSelection;
}
let roundsWon = 0;
let roundsLost = 0;


function playRound (playerSelection, computerSelection) {
    
    
    computerSelection = computerPlay();
    if (roundsWon == 5 || roundsLost == 5) {
        return;
    }


    else if (computerSelection == playerSelection) {
        document.getElementById('currentRound').innerHTML = "Tie Game"
        console.log("Tie game");
        getResults(roundsWon, roundsLost);
        return;
    }
    
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        roundsWon = roundsWon + 1;
        document.getElementById('currentRound').innerHTML = "You win " + playerSelection + " beats " + computerSelection + "!";
        document.getElementById('wins').innerHTML = "Player rounds won: " + roundsWon;
        getResults(roundsWon, roundsLost);
        return;
    }

    else {
        roundsLost = roundsLost + 1;
        document.getElementById('currentRound').innerHTML = "You lose " + computerSelection + " beats " + playerSelection;
        document.getElementById('losses').innerHTML = "Computer rounds won: " + roundsLost;
        getResults(roundsWon, roundsLost);
        return;
    }

}
    function getResults(roundsWon, roundsLost) {
    if (roundsWon == 5) {
        document.getElementById('message').innerHTML = "You win! Refresh to play again.";
        return;
    }

    else if (roundsLost == 5) {
        document.getElementById('message').innerHTML = "You lost! Refresh to play again.";
        return;
    }
}



