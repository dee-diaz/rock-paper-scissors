function playGame() {
  const choiceButtons = document.querySelectorAll('.user-choices button');
  let humanScore = 0;
  let computerScore = 0;
  const pairs = [
    {
      pair: ['rock', 'scissors'],
      winner: 'rock',
    },
    {
      pair: ['scissors', 'paper'],
      winner: 'scissors',
    },
    {
      pair: ['paper', 'rock'],
      winner: 'paper',
    },
  ];

  choiceButtons.forEach((button) =>
    button.addEventListener('click', playRound)
  );

  function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
  }

  function getHumanChoice(e) {
    const choice =
      e.currentTarget.className ||
      e.currentTarget.children[1].textContent.toLowerCase();
    return choice;
  }

  function playRound(e) {
    const outcomes = {
      win: '🎉 You win!',
      tie: "🤝 It's a tie",
      loss: '😔 You lose!',
    };
    const humanChoice = getHumanChoice(e);
    const computerChoice = getComputerChoice();
    const resultEl = document.querySelector('.result');
    const humanChoiceEl = document.querySelector('#human-choice');
    const computerChoiceEl = document.querySelector('#computer-choice');

    if (humanChoice === computerChoice) {
      displayRoundResults(outcomes.tie);
    }

    const match = pairs.find((item) => {
      return (
        item.pair.includes(humanChoice) && item.pair.includes(computerChoice)
      );
    });

    if (match.winner === humanChoice) {
      humanScore++;
      displayRoundResults(outcomes.win);
    } else {
      computerScore++;
      displayRoundResults(outcomes.loss);
    }

    function displayRoundResults(result) {
      humanChoiceEl.textContent = humanChoice;
      computerChoiceEl.textContent = computerChoice;
      resultEl.textContent = result;

      switch (result) {
        case "🤝 It's a tie": 
          resultEl.classList.add("tie")
          break;
        
        case "🎉 You win!":
          resultEl.classList.add("win")
          break;
        
        case "😔 You lose!":
          resultEl.classList.add("loss")
          break;
      }
    }
  }
}

playGame();
