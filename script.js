let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `It's a tie! ${humanChoice} VS ${computerChoice}`
    );
    return;
  }

  const pairs = [
    {
      pair: ["rock", "scissors"],
      winner: "rock",
    },
    {
      pair: ["scissors", "paper"],
      winner: "scissors",
    },
    {
      pair: ["paper", "rock"],
      winner: "paper",
    },
  ];

  const match = pairs.find((item) => {
    return item.pair.includes(humanChoice) && item.pair.includes(computerChoice);
  });

  if (match.winner === humanChoice) {
    humanScore ++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    console.log(`Your score: ${humanScore}. Computer's score: ${computerScore}`);
  } else {
    computerScore ++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    console.log(`Your score: ${humanScore}. Computer's score: ${computerScore}`);
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

