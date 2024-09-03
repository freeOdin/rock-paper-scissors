function getComputerChoice () {
  const num = Math.floor(Math.random() * 3) + 1;

  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
 
function getHumanChoice () {
  let input = "";
  let keepAsking = true; 

  const validChoices = ["rock", "paper", "scissors"];

  while (keepAsking) {
    input = prompt("Choose rock, paper or scissors").toLowerCase();

    if (validChoices.includes(input)) {
      keepAsking = false;
    };
  }

  return input
}

function playRound (humanChoice, computerChoice) {
  humanWins = (humanChoice == "rock" && computerChoice == "scissors") ||
              (humanChoice == "paper" && computerChoice == "rock") ||
              (humanChoice == "scissors" && computerChoice == "paper")

  if (humanWins) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore += 1;
  } else {
    console.log("You lose! " + humanChoice + " loses to " + computerChoice + ".")
    computerScore += 1;
  }
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());


