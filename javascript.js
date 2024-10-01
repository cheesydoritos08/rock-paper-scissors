
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


/*
PSUEDO CODE
Declare the score variables
Make a for loop with i=0, i<4, i++ that calls the playRound
function
After calling the playRound function, set the variables
humanSelection and computerSelection to the functions 
getHumanChoice and getComputerChoice respectively
When the for loop is done, compare the values of the
variables humanScore and computerScore
If humanScore is greater than computerScore then output
in the console "Human wins the game!"
If computerScore is greater than humanScore then output
in the console "Computer wins the game!"
*/ 

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let humanFixedChoice = humanChoice.toLowerCase();

        if (humanFixedChoice == "rock" && computerChoice == "paper"){
            console.log("Computer wins! Paper beats Rock!");
            computerScore++;
        } else if (humanFixedChoice == "rock" && computerChoice == "scissors"){
            console.log("Human wins! Rock beats Scissors!");
            humanScore++;
        } else if (humanFixedChoice == "paper" && computerChoice == "rock"){
            console.log("Human wins! Paper beats Rock!");
            humanScore++;
        } else if (humanFixedChoice == "paper" && computerChoice == "scissors"){
            console.log("Computer wins! Scissors beats Paper!");
            computerScore++;
        } else if (humanFixedChoice == "scissors" && computerChoice == "rock"){
            console.log("Computer wins! Rock beats Scissors!");
            computerScore++;
        } else if (humanFixedChoice == "scissors" && computerChoice == "paper"){
            console.log("Human wins! Scissors beats Paper!");
            humanScore++;
        } else {
            console.log("It's a draw! No one wins!");
        }
    }

 /*   for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }
*/
    if (humanScore>computerScore){
        console.log("Human wins the game!")
    } else if (computerScore>humanScore){
        console.log("Computer wins the game!")
    } else {
        console.log("It's a tie! No one wins!")
    }
}

playGame()
