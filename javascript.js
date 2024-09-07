function getComputerChoice () {
  const num = Math.floor(Math.random() * 3) + 1;

  if (num == 1) {
    return "Rock";
  } else if (num == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

funcName = () => {

}

function playRound (event) {
  const humanChoice = event.currentTarget.textContent;
  const computerChoice = getComputerChoice();

  humanWins = (humanChoice == "Rock" && computerChoice == "Scissors") ||
              (humanChoice == "Paper" && computerChoice == "Rock") ||
              (humanChoice == "Scissors" && computerChoice == "Paper");

  computerWins = (computerChoice == "Rock" && humanChoice == "Scissors") ||
                (computerChoice == "Paper" && humanChoice == "Rock") ||
                (computerChoice == "Scissors" && humanChoice == "Paper");

  if (humanWins) {
    message.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    humanScore += 1;
  } else if (computerWins) {
    message.textContent = "You lose! " + humanChoice + " loses to " + computerChoice + ".";
    computerScore += 1;
  } else {
    message.textContent = "It's a tie! You both have " + humanChoice + ". Try again.";
  }

  score.textContent = "Your score: " + humanScore + ". Computer score: " + computerScore;

  if (humanScore == 5) {
    result.textContent = "You've won the game!";
  } else if (computerScore == 5) {
    result.textContent = "Sorry, you've lost the game...";
  }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", playRound);
}

message = document.querySelector("#message");
score = document.querySelector("#score");
result = document.querySelector("#result");
