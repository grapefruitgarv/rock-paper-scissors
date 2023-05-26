// variable to store computer's selection of rock, paper, or scissors (computerSelection)
const computerSelection = getComputerChoice();
// variable to store user's choice of rock, paper, or scissors (playerSelection)
const playerSelection = "rock";
// variables to store the winner of the round
// const compRock;
// const playerRock;
// const compPaper;
// const playerPaper;
// const compScissors;
// const playerScissors;
// computer selects from the options of rock, paper, or scissors and stores it computerSelection
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3 + 1);
  if (randNum == 1) {
    return "rock";
  } else if (randNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(computerSelection);
// if...else if statements comparing the two variables
function playRound(playerSelection, computerSelection) {
  // if comp computerSelection is rock and playerSelection is scissors you lose rock beats scissors keeping it case insensitive
  if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
    return "You Lose! Rock beats Scissors.";
  }
  // if comp computerSelection is rock and playerSelection is paper you win paper beats rock keeping it case insensitive
  if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
    return "You Win! Paper beats Rock.";
  }
  // if comp computerSelection is rock and playerSelection is rock you tie keeping it case insensitive
  if (computerSelection == "rock" && playerSelection.toLowerCase() == "rock") {
    return "You Tie.";
  }
  // if comp computerSelection is paper and playerSelection is paper you tie keeping it case insensitive
  if (computerSelection == "paper" && playerSelection.toLowerCase() == "paper") {
    return "You tie.";
  }
  // if comp computerSelection is paper and playerSelection is rock you lose paper beats rock keeping it case insensitive
  if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
    return "You Lose! Paper beats Rock.";
  }
  // if comp computerSelection is paper and playerSelection is scissors you win scissors beats paper keeping it case insensitive
  if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
    return "You Win! Scissors beats Paper.";
  }
  // if comp computerSelection is scissors and playerSelection is paper you lose scissors beats paper keeping it case insensitive
  if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
    return "You Lose! Scissors beats Paper.";
  }
  // if comp computerSelection is scissors and playerSelection is rock you win rock beats scissors keeping it case insensitive
  if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
    return "You Win! Rock beats Scissors.";
  }
  // if comp computerSelection is scissors and playerSelection is scissors you tie keeping it case insensitive
  if (computerSelection == "scissors" && playerSelection.toLowerCase() == "scissors") {
    return "You tie.";
  }
}
console.log(playRound(playerSelection, computerSelection));


