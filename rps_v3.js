// variables to store wins
let playerCount = 0;
let cpuCount = 0;

// function to get computer choice
function getComputerChoice() {
    // getting a random number between 1 and 3
    let randNum = Math.floor(Math.random() * 3 + 1);
    if (randNum === 1) {
        return 'rock';
    } else if (randNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function to play a round
function playRound(playerSelection, computerSelection) {
    // make sure it's one of the options
    // validateEntry(playerSelection);
    // if...if else statements to test variables against one another
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        cpuCount++; // Add 1 to computer's win count
        return "You lose Paper beats Rock";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerCount++; // Add 1 to player's win count
        return "You win Rock beats Scissors";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerCount++; // Add 1 to player's win count
        return "You win Paper beats Rock";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        cpuCount++; // Add 1 to computer's win count
        return "You lose Scissors beats Paper";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerCount++; // Add 1 to player's win count
        return "You win Scissors beats Paper";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        cpuCount++; // Add 1 to computer's win count
        return "You lose Rock beats Scissors";
    } else {
        return "It's a tie"
    }
}

function makeSelection() {
    let playerSelection;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', {
            if(button.id == 'rock')
        playerSelection = 'rock';
            else if (button.id == 'paper')
            playerSelection = 'paper';
        else if (button.id == 'scissors')
            playerSelection = 'scissors';
    }, {
        once: true
    })
});
return playerSelection;
}



function game() {
    // const playerSelection = prompt("Rock, paper, or scissors?");
    const playerSelection = makeSelection();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    // console.log("P: " + playerCount + ", " + playerSelection + ", C: " + cpuCount + ", " + computerSelection);

    if (playerCount > cpuCount) {
        return "You win!";
    } else if (playerCount < cpuCount) {
        return "You lose!";
    } else {
        return "It's a tie."
    }
}
console.log(game());
console.log("Player's wins: " + playerCount);
console.log("Computer's wins: " + cpuCount);