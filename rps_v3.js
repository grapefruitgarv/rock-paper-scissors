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
    let clicked = false;
    const buttons = document.querySelectorAll('button');
    const buttonPressed = e => {
        const isButton = e.target.nodeName === 'BUTTON' && (e.target.className !== 'btn');
        if (!clicked && isButton) {
            clicked = true;
            if (!isButton) {
                return
            };
            playerSelection = e.target.id;
            console.log('e.target.id' + ' ' + e.target.id);
            console.log('e.target.parentElement.id' + ' ' + e.target.parentElement.id);
            console.log('Player selection: ' + playerSelection);
            return playerSelection;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', buttonPressed, {

        })
    });
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
console.log(makeSelection());
// console.log(game());
// console.log("Player's wins: " + playerCount);
// console.log("Computer's wins: " + cpuCount);