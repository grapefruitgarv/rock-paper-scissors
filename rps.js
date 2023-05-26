// variable to store computer's selection of rock, paper, or scissors (computerSelection)
const computerSelection = getComputerChoice();
// variable to store user's choice of rock, paper, or scissors (playerSelection)
const playerSelection = "rock";
// variables to store the winner of the round
let playerCount = 0;
let cpuCount = 0;
// computer selects from the options of rock, paper, or scissors and stores it computerSelection
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);
  if (randNum == 1) {
    // computerSelection = "rock";
    return "rock";
  } else if (randNum == 2) {
    // computerSelection = "paper";
    return "paper";
  } else {
    // computerSelection = "scissors";
    return "scissors";
  }
}

// if...else if statements comparing the two choices
function playRound(playerSelection, computerSelection) {
  // get the computer choice at the start of the round
  getComputerChoice();
  // get user input that is correct
  playerSelection = prompt("Rock, paper, or scissors?");
  // if  computerSelection is rock and playerSelection is scissors you lose rock beats scissors keeping it case insensitive
  if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
    cpuCount++;
    //return "You Lose! Rock beats Scissors.";
  }
  // if computerSelection is rock and playerSelection is paper you win paper beats rock keeping it case insensitive
  else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
    playerCount++;
    //return "You Win! Paper beats Rock.";
  }
  // if computerSelection is rock and playerSelection is rock you tie keeping it case insensitive
  else if (computerSelection == "rock" && playerSelection.toLowerCase() == "rock") {
    //return "You Tie.";
  }
  // if computerSelection is paper and playerSelection is paper you tie keeping it case insensitive
  else if (computerSelection == "paper" && playerSelection.toLowerCase() == "paper") {
    // return "You tie.";
  }
  // if computerSelection is paper and playerSelection is rock you lose paper beats rock keeping it case insensitive
  else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
    cpuCount++;
    // return "You Lose! Paper beats Rock.";
  }
  // if computerSelection is paper and playerSelection is scissors you win scissors beats paper keeping it case insensitive
  else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
    playerCount++;
    // return "You Win! Scissors beats Paper.";
  }
  // if computerSelection is scissors and playerSelection is paper you lose scissors beats paper keeping it case insensitive
  else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
    cpuCount++;
    // return "You Lose! Scissors beats Paper.";
  }
  // if computerSelection is scissors and playerSelection is rock you win rock beats scissors keeping it case insensitive
  else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
    playerCount++;
    // return "You Win! Rock beats Scissors.";
  }
  // if computerSelection is scissors and playerSelection is scissors you tie keeping it case insensitive
  else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "scissors") {
    // return "You tie.";
  }
}
//console.log(playRound(playerSelection, computerSelection));


function game() {
  for (i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log("P: " + playerCount + ", C: " + cpuCount + ", " + computerSelection);
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