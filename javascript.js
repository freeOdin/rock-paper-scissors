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

console.log(getComputerChoice())