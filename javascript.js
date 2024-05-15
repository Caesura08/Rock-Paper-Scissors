let humanScore = 0;
        let computerScore = 0;
        let roundWinner = ''
            for (let i=0; i < 5; i++) {
            }
        
        function playRound (humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                roundWinner = 'tie'
                }
            if (
                (humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper') 
                ){
                    roundWinner = 'You win!'
                    humanScore++
            }
            if (
                (computerChoice === 'rock' && humanChoice === 'scissors') ||
                (computerChoice === 'paper' && humanChoice === 'rock') ||
                (computerChoice === 'scissors' && humanChoice === 'paper') 
                ){
                    roundWinner = 'Computer wins!'
                    computerScore++
                }
                console.log(playRound(humanChoice));
                console.log(playRound(computerChoice));
        }   

            function getHumanChoice () {
                let answer = prompt("Choose rock, paper or scissors");
                    let lowerCaseAnswer = answer.toLowerCase();
                    if (answer != null) {
                        document.getElementById("text").innerHTML = "You have chosen " + answer            
                }
                    console.log(lowerCaseAnswer);
            }

            function getComputerChoice () {
                let getComputerChoice = Math.floor(Math.random() * 3);
                    if (getComputerChoice <= 0) {
                        return "rock"
                    } else if (getComputerChoice <= 1) {
                        return "paper"
                    } else if (getComputerChoice <= 2) {
                        return "scissors"
                    }
            }
                console.log(getComputerChoice());
            