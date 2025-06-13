let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let isTie = humanChoice === computerChoice;

  if (isTie) {
    console.log(`It's a tie! You picked ${humanChoice}, the computer picked ${computerChoice} as well.`);
    return;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors?").toLowerCase();
  return choice;
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}

playRound(humanSelection, computerSelection);

console.log(humanSelection);
