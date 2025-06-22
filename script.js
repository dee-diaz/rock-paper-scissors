function playGame() {
  const GAME_CONFIG = {
    WINNING_SCORE: 5,
    RESET_DELAY: 2000,
  };

  const choiceButtons = document.querySelectorAll(".user-choices button");
  const resultEl = document.querySelector(".result");
  const humanChoiceEl = document.querySelector("#human-choice");
  const computerChoiceEl = document.querySelector("#computer-choice");
  const humanScoreEl = document.querySelector(".human-score .number");
  const computerScoreEl = document.querySelector(".computer-score .number");

  let humanScore = 0;
  let computerScore = 0;

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

  choiceButtons.forEach((button) =>
    button.addEventListener("click", playRound)
  );

  function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
  }

  function getHumanChoice(e) {
    const choice =
      e.currentTarget.dataset.choice ||
      e.currentTarget.className ||
      e.currentTarget.children[1].textContent.toLowerCase();
    return choice;
  }

  function playRound(e) {
    const outcomes = {
      win: "🎉 You win!",
      tie: "🤝 It's a tie",
      loss: "😔 You lose!",
    };
    const humanChoice = getHumanChoice(e);
    const computerChoice = getComputerChoice();

    const match = pairs.find((item) => {
      return (
        item.pair.includes(humanChoice) && item.pair.includes(computerChoice)
      );
    });

    if (humanChoice === computerChoice) {
      displayRoundResults(outcomes.tie);
    } else if (match.winner === humanChoice) {
      humanScore++;
      displayRoundResults(outcomes.win);
    } else if (match.winner === computerChoice) {
      computerScore++;
      displayRoundResults(outcomes.loss);
    }

    function displayRoundResults(result) {
      humanChoiceEl.textContent = humanChoice;
      computerChoiceEl.textContent = computerChoice;
      resultEl.textContent = result;
      toggleButtonsInteractivity();

      switch (result) {
        case "🤝 It's a tie":
          resultEl.classList.add("tie");
          break;

        case "🎉 You win!":
          resultEl.classList.add("win");
          break;

        case "😔 You lose!":
          resultEl.classList.add("loss");
          break;
      }
    }

    function updateScore() {
      humanScoreEl.textContent = humanScore;
      computerScoreEl.textContent = computerScore;
    }

    function resetRoundResults() {
      resultEl.innerText = "😈 Pick again";
      resultEl.classList.remove("win", "tie", "loss");

      humanChoiceEl.innerText = "?";
      computerChoiceEl.innerText = "?";
      toggleButtonsInteractivity();
    }

    function toggleButtonsInteractivity() {
      choiceButtons.forEach((button) => {
        if (button.disabled) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      });
    }

    function resetScore() {
      humanScore = 0;
      computerScore = 0;
      resultEl.innerText = "😈 Let's play?";
    }

    function defineWinner(humanScore, computerScore) {
      const overlay = document.querySelector(".overlay");
      const h3 = document.querySelector(".modal h3");
      const para = document.querySelector(".modal p");
      const newGameBtn = document.querySelector(".modal button");
      overlay.classList.remove("hidden");

      if (humanScore > computerScore) {
        h3.innerText = "🎉 You won the game! 🎉";
        para.innerText = `Your score: ${humanScore}\n Computer's score: ${computerScore}`;
      } else {
        h3.innerText = "😔 You lost the game 😔";
        para.innerText = `Your score: ${humanScore}\n Computer's score: ${computerScore}`;
      }

      newGameBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
        h3.innerText = "";
        para.innerText = "";
        resetScore();
        updateScore();
      });
    }

    updateScore();

    if (humanScore === GAME_CONFIG.WINNING_SCORE || computerScore === GAME_CONFIG.WINNING_SCORE) {
      defineWinner(humanScore, computerScore);
    }

    setTimeout(resetRoundResults, GAME_CONFIG.RESET_DELAY);
  }
}

playGame();
