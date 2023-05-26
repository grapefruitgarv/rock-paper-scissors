// create variables to store the words
// let computerSelection = getComputerChoice();
// let playerSelection = "";
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

// function validateEntry(playerSelection) {
//     const playerLower = playerSelection.toLowerCase();
//     if (playerLower == 'rock' || playerLower == 'paper' || playerLower == 'scissors') {
//         return playerSelection;
//     }
//     else if (playerLower != 'rock') {
//         playerSelection = prompt('You must enter "rock", "paper", or "scissors".')
//     } else if (playerLower != 'paper') {
//         playerSelection = prompt('You must enter "rock", "paper", or "scissors".')
//     } else if (playerLower != 'scissors') {
//         playerSelection = prompt('You must enter "rock", "paper", or "scissors".')
//     } else
//         validateEntry(playerSelection);
// }

// function to play a round
function playRound(playerSelection, computerSelection) {
    // make sure it's one of the options
    // validateEntry(playerSelection);
    // if...if else statements to test variables against one another
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        cpuCount++; // Add 1 to computer's win count
        return "You lose Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerCount++; // Add 1 to player's win count
        return "You win Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerCount++; // Add 1 to player's win count
        return "You win Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        cpuCount++; // Add 1 to computer's win count
        return "You lose Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        playerCount++; // Add 1 to player's win count
        return "You win Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        cpuCount++; // Add 1 to computer's win count
        return "You lose Rock beats Scissors";
    } else {
        return "It's a tie"
    }
}

// console.log(playRound(playerSelection, computerSelection) + " P: " + playerCount + ", C: " + cpuCount);

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("P: " + playerCount + ", " + playerSelection + ", C: " + cpuCount + ", " + computerSelection);
    }
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