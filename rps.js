// variable to store computer's selection of rock, paper, or scissors (computerSelection)
const computerSelection = getComputerChoice();
// variable to store user's choice of rock, paper, or scissors (playerSelection)
const playerSelection = "";
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
  // if comp computerSelection is rock and playerSelection is paper you win paper beats rock keeping it case insensitive
  // if comp computerSelection is rock and playerSelection is rock you tie keeping it case insensitive
  // if comp computerSelection is paper and playerSelection is paper you tie keeping it case insensitive
  // if comp computerSelection is paper and playerSelection is rock you lose paper beats rock keeping it case insensitive
  // if comp computerSelection is paper and playerSelection is scissors you win scissors beats paper keeping it case insensitive
  // if comp computerSelection is scissors and playerSelection is paper you lose scissors beats paper keeping it case insensitive
  // if comp computerSelection is scissors and playerSelection is rock you win rock beats scissors keeping it case insensitive
  // if comp computerSelection is scissors and playerSelection is scissors you tie keeping it case insensitive
  // if comp computerSelection is scissors and playerSelection is paper computer wins scissors beats paper keeping it case insensitive
}
