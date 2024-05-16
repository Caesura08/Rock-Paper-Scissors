const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementsByClassName("result");

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        resultDiv.textContent = result;
    });
});

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection == "scissors" && computerSelection === "paper")
    ){
        return "you win!"
    } else {
        return "computer wins!";
    }
}