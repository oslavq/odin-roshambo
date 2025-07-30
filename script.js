console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    break;
                case "paper":
                    computerScore++;
                    break;
                case "scissors":
                    humanScore++
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    break;
                case "paper":
                    break;
                case "scissors":
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    break;
                case "paper":
                    humanScore++;
                    break;
                case "scissors":
                    break;
            }
            break;
    };
}


// returns "rock", "paper" or "scissors" randomly
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result;
    switch (randomNumber) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    };

    return result;
}

// test the randomness
function testComputerChoice() {
    let var1 = 0;
    let var2 = 0;
    let var3 = 0;

    for (let i = 0; i < 300; i++) {
        switch (getComputerChoice()) {
            case "rock":
                var1++;
                break;
            case "paper":
                var2++;
                break;
            case "scissors":
                var3++;
                break;
        }
    };

    console.log(`We got rock ${var1} times, paper ${var2} times and scissors ${var3} times!`);
}

function getHumanChoice() {
    let humanInput = prompt("Please choose rock, paper or scissors:").toLowerCase();
    return humanInput;
}