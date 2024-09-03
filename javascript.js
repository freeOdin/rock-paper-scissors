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
    input = prompt("Choose rock, paper or scissors");

    if (validChoices.includes(input)) {
      keepAsking = false;
    };
  }

  return input
}

console.log(getHumanChoice())