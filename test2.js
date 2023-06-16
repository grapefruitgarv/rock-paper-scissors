let playerCount = 0;
let cpuCount = 0;
let addPlayerScore = 0;
let addCpuScore = 0;
const playerScore = document.querySelector('#playerScore');
const cpuScore = document.querySelector('#cpuScore');
addPlayerScore = document.createTextNode(playerCount);
playerScore.appendChild(addPlayerScore);
addCpuScore = document.createTextNode(cpuCount);
cpuScore.appendChild(addCpuScore);

// function to get computer choice
function getComputerChoice() {
    // getting a random number between 1 and 3
    let randNum = Math.floor(Math.random() * 3 + 1);
    const buttonOne = document.getElementById('1');
    const buttonTwo = document.getElementById('2');
    const buttonThree = document.getElementById('3');

    if (randNum === 1) {
        buttonOne.setAttribute('id', 'active');
        return 'rock';
    } else if (randNum === 2) {
        buttonTwo.setAttribute('id', 'active');
        return 'paper';
    } else {
        buttonThree.setAttribute('id', 'active');
        return 'scissors';
    }
}

// function to play a round
function playRound(playerSelection, computerSelection) {
    // if...if else statements to test variables against one another
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        cpuCount++; // Add 1 to computer's win count
        addCpuScore = document.createTextNode(cpuCount);
        cpuScore.appendChild(addCpuScore);
        return "You lose Paper beats Rock";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerCount++; // Add 1 to player's win count
        addPlayerScore = document.createTextNode(playerCount);
        playerScore.appendChild(addPlayerScore);
        return "You win Rock beats Scissors";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerCount++; // Add 1 to player's win count
        addPlayerScore = document.createTextNode(playerCount);
        playerScore.appendChild(addPlayerScore);
        return "You win Paper beats Rock";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        cpuCount++; // Add 1 to computer's win count
        addCpuScore = document.createTextNode(cpuCount);
        cpuScore.appendChild(addCpuScore);
        return "You lose Scissors beats Paper";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerCount++; // Add 1 to player's win count
        addPlayerScore = document.createTextNode(playerCount);
        playerScore.appendChild(addPlayerScore);
        return "You win Scissors beats Paper";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        cpuCount++; // Add 1 to computer's win count
        addCpuScore = document.createTextNode(cpuCount);
        cpuScore.appendChild(addCpuScore);
        return "You lose Rock beats Scissors";
    } else {
        return "It's a tie"
    }
}

function startGame() {
    let playerSelection;
    let clicked = false;
    const buttons = document.querySelectorAll('button');
    const buttonPressed = e => {
        const isButton = e.target.nodeName === 'BUTTON' && (e.target.className !== 'btn');
        if (!clicked && isButton) {
            // clicked = true;
            if (!isButton) {
                return
            };
            playerSelection = e.target.id;
            return playRound(playerSelection, computerSelection);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', buttonPressed, {

        })
    });
    let computerSelection = getComputerChoice();

    clicked = false;
}
console.log(startGame());