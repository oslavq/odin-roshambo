console.log("Hello World!");

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