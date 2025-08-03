console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;

function playGameViaConsole() {
    for (let i = 1; i <= 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let winner = playRound(humanChoice, computerChoice);
        console.log(`Computer's choice: ${computerChoice}`)
        if (winner === "human") {
            console.log(`Congratulations, human! You won round Nu.${i}`);
        } else if (winner === "computer") {
            console.log(`Oops, you've lost round Nu.${i}`)
        } else {
            console.log(`Seems like we got a draw on round Num.${i}!`)
        }
    }
    console.log(`Scores:\nHuman:\t${humanScore}\nComputer:\t${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    let winner;

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    winner = tie();
                    break;
                case "paper":
                    winner = computerWins();
                    break;
                case "scissors":
                    winner = humanWins();
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    winner = humanWins();
                    break;
                case "paper":
                    winner = tie();
                    break;
                case "scissors":
                    winner = computerWins();
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    winner = computerWins();
                    break;
                case "paper":
                    winner = humanWins();
                    break;
                case "scissors":
                    winner = tie();
                    break;
            }
            break;
    };

    return winner;
}

function computerWins() {
    computerScore++;
    return "computer";
}

function humanWins() {
    humanScore++;
    return "human";
}

function tie() {
    return "tie";
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

function getHumanChoiceViaConsole() {
    let humanInput = prompt("Please choose rock, paper or scissors:").toLowerCase();
    return humanInput;
}


// Code for the GUI
const playerSelection = document.querySelector(".player-selection");
const textOutput = document.querySelector(".game-text");
const computerChoiceDiv = document.querySelector(".computer-choice");

const humanScoreCounter = document.querySelector(".hscore-counter");
const computerScoreCounter = document.querySelector(".cscore-counter");

const successClass = "choice-success";
const failureClass = "choice-failure";
const tieClass = "choice-selected";

function playGame(e) {
    const computerChoice = getComputerChoice();
    const humanChoice = parseGuiInput(e);
    const winner = playRound(humanChoice, computerChoice);
    console.log(`winner = ${winner}`);
    clearStyles();
    revealResult(winner, humanChoice, computerChoice);
    updateCounter();
}

function parseGuiInput(e) {
    const selectedBtnId = e.target.classList[0];
    let parsedChoice;

    switch (selectedBtnId) {
        case ("rock-player-btn"):
            parsedChoice = "rock";
            break;
        case ("paper-player-btn"):
            parsedChoice = "paper";
            break;
        case ("scissors-player-btn"):
            parsedChoice = "scissors";
            break;
    }
    
    // console.log(`Player selected ${parsedChoice}`);
    return parsedChoice;
}

playerSelection.addEventListener('click', playGame);

function revealResult(winner, humanChoice, computerChoice) {
    const activeHumanBtn = document.querySelector(`.${humanChoice}-player-btn`);
    let activeComputerIndicator = document.querySelector(`.${computerChoice}-comp-indicator`);
    
    switch (winner) {
        case ("computer"):
            activeHumanBtn.classList.add(failureClass);
            activeComputerIndicator.classList.add(successClass);
            textOutput.textContent = "Oops, you've lost!";
            break;
        case ("human"):
            activeHumanBtn.classList.add(successClass);
            activeComputerIndicator.classList.add(failureClass);
            textOutput.textContent = "Congrats on the win!";
            break;
        case ("tie"):
            activeHumanBtn.classList.add(tieClass);
            activeComputerIndicator.classList.add(tieClass);
            textOutput.textContent = "It's a tie!";
            break;
    }

    computerChoiceDiv.style.display = "block";
}

function updateCounter() {
    humanScoreCounter.textContent = humanScore;
    computerScoreCounter.textContent = computerScore;
}

function clearStyles() {
    let buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((el) => {
        el.classList.remove(successClass);
        el.classList.remove(failureClass);
        el.classList.remove(tieClass);
    });
}