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
 
function getHumanChoice () {
  let input = "";
  let keepAsking = true; 

  const validChoices = ["Rock", "Paper", "Scissors"];

  while (keepAsking) {
    input = prompt("Choose rock, paper or scissors").toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);

    if (validChoices.includes(input)) {
      keepAsking = false;
    };
  }

  return input
}

function playRound (humanChoice, computerChoice) {
  humanWins = (humanChoice == "Rock" && computerChoice == "Scissors") ||
              (humanChoice == "Paper" && computerChoice == "Rock") ||
              (humanChoice == "Scissors" && computerChoice == "Paper")

  computerWins = (computerChoice == "Rock" && humanChoice == "Scissors") ||
                (computerChoice == "Paper" && humanChoice == "Rock") ||
                (computerChoice == "Scissors" && humanChoice == "Paper")

  if (humanWins) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    humanScore += 1;
  } else if (computerWins) {
    console.log("You lose! " + humanChoice + " loses to " + computerChoice + ".")
    computerScore += 1;
  } else {
    console.log("It's a tie! You both have " + humanChoice + ". Try again.")
  }
}


function playGame () {
  for (let round = 1; round <= 5; round ++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("Your score: " + humanScore + ". Computer score: " + computerScore)
}

let humanScore = 0;
let computerScore = 0;

playGame();
