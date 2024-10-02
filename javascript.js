const RockButton = document.querySelector("#rock")
const PaperButton = document.querySelector("#paper")
const ScissorsButton = document.querySelector("#scissors")
const instructionText = document.querySelector("#instructions")
const ButtonContainer = document.querySelector(".button-container")
const PlayerStatsText = document.querySelector("#player-stats")
const ComputerStatsText = document.querySelector("#computer-stats")

let humanScore = 0;
let computerScore = 0;

ButtonContainer.addEventListener("click", (event) => {
    let Target = event.target
    let ComputerChoice = getComputerChoice()

    playRound(Target.id, ComputerChoice)

    if (humanScore == 5 || computerScore == 5) {
        CheckGameWin()
        return
    }
})



// Returns the computer's choice for rock, paper, scissors
function getComputerChoice(){
    let randomNumber = (Math.floor(Math.random()*3)+1);
    let choice = "";

    if (randomNumber == 1) {
        choice = "rock";
    } else if (randomNumber == 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    console.log(choice);
    return choice;
}


// Returns the human's choice for rock, paper, scissors
function getHumanChoice(){
    let userChoice = prompt("Let's play rock, paper, scissors! Please make a choice.");
    console.log(userChoice);
    return userChoice;
}



function CheckGameWin(){
    if (humanScore>computerScore){
        ComputerStatsText.textContent = "Computer Wins: 0"
        PlayerStatsText.textContent = "Player Wins: 0"
        computerScore = 0
        humanScore = 0
        instructionText.textContent = "The player wins the game! Press any button to play again!"
    } else {
        ComputerStatsText.textContent = "Computer Wins: 0"
        PlayerStatsText.textContent = "Player Wins: 0"
        instructionText.textContent = "The computer wins the game! Press any button to play again!"
        computerScore = 0
        humanScore = 0
    }
}

function playRound(humanChoice, computerChoice){
    let humanFixedChoice = humanChoice.toLowerCase();

    if (humanFixedChoice == "rock" && computerChoice == "paper"){
        instructionText.textContent = "Computer wins! Paper beats Rock!";
        ComputerStatsText.textContent = "Computer Wins: " + ++computerScore;
    } else if (humanFixedChoice == "rock" && computerChoice == "scissors"){
        instructionText.textContent = "Player wins! Rock beats Scissors!";
        PlayerStatsText.textContent = "Player Wins: " + ++humanScore;
    } else if (humanFixedChoice == "paper" && computerChoice == "rock"){
        instructionText.textContent = "Player wins! Paper beats Rock!";
        PlayerStatsText.textContent = "Player Wins: " + ++humanScore;
    } else if (humanFixedChoice == "paper" && computerChoice == "scissors"){
        instructionText.textContent = "Computer wins! Scissors beats Paper!";
        ComputerStatsText.textContent = "Computer Wins: " + ++computerScore;
    } else if (humanFixedChoice == "scissors" && computerChoice == "rock"){
        instructionText.textContent = "Computer wins! Rock beats Scissors!";
        ComputerStatsText.textContent = "Computer Wins: " + ++computerScore;
    } else if (humanFixedChoice == "scissors" && computerChoice == "paper"){
       instructionText.textContent = "Player wins! Scissors beats Paper!";
       PlayerStatsText.textContent = "Player Wins: " + ++humanScore;
    } else {
        instructionText.textContent = "It's a draw! No one wins!";
    }
}