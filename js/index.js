// find your form by saving it as a variable
const form = document.querySelector(".form");

//waits for the user to submit it.
form.addEventListener("submit", onFormSubmit);

// Function that runs when the user submits the form
function onFormSubmit(event) {
  event.preventDefault(); //stop data refreshing

  // collects the form information.
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  // Save the user's choice in a variable
  const userChoice = dataObject.choice;

  // Call the function to get the computer's choice
  const computerChoice = getComputerChoice();

  // Call the function to find the winner
  const winner = findWinner(userChoice, computerChoice);

  // Display the user's choice in the console
  console.log("Your choice:", userChoice);

  // Display the computer's choice in the console
  console.log("Computer's choice:", computerChoice);

  // Display the winner in the console
  console.log("Winner:", winner);

  // Clear the form after playing
  form.reset();
}

// Arrow function that randomly chooses for the computer
const getComputerChoice = () => {
  // Store the three possible choices in an array
  const choices = ["rock", "paper", "scissors"];

  // Generate a random index: 0, 1, or 2
  const randomIndex = Math.floor(Math.random() * choices.length);

  // Return the computer's randomly selected choice
  return choices[randomIndex];
};

// Function that determines the winner
function findWinner(userChoice, computerChoice) {
  // Check if the user and computer chose the same thing
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check if the user's choice beats the computer's choice
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    // Return this message if the user wins
    return "You win!";
  }

  // If it is not a tie and the user does not win, the computer wins
  return "Computer wins!";
}
