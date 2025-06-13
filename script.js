function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! ${humanChoice} VS ${computerChoice}`);
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
      return (
        item.pair.includes(humanChoice) && item.pair.includes(computerChoice)
      );
    });

    if (match.winner === humanChoice) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(
        `Your score: ${humanScore}. Computer's score: ${computerScore}`
      );
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      console.log(
        `Your score: ${humanScore}. Computer's score: ${computerScore}`
      );
    }
  }

  function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    return choice;
  }

  function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
  }

  function defineWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      return `You won.\n Your score: ${humanScore}. Computer's score: ${computerScore}`;
    } else if (humanScore === computerScore) {
      return `It's a tie.\n Your score: ${humanScore}. Computer's score: ${computerScore}`;
    } else {
      return `Computer won.\n Your score: ${humanScore}. Computer's score: ${computerScore}`;
    }
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  const result = defineWinner(humanScore, computerScore);

  alert(result);
  return result;
}

playGame();
