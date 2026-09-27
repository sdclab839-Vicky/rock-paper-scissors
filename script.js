const choices = ["rock", "paper", "scissors"];

const choiceButtons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#resultText");
const roundDetails = document.querySelector("#roundDetails");
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const resetButton = document.querySelector("#resetButton");

let playerScore = 0;
let computerScore = 0;

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.dataset.choice));
});

resetButton.addEventListener("click", resetGame);

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getRoundResult(playerChoice, computerChoice);

    if (result === "win") {
        playerScore++;
        resultText.textContent = "You Win!";
    } else if (result === "lose") {
        computerScore++;
        resultText.textContent = "Computer Wins";
    } else {
        resultText.textContent = "It's a Draw";
    }

    roundDetails.textContent =
        `You chose ${formatChoice(playerChoice)} | Computer chose ${formatChoice(computerChoice)}`;

    updateScore();
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getRoundResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }

    const playerWins =
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper");

    return playerWins ? "win" : "lose";
}

function formatChoice(choice) {
    const labels = {
        rock: "🪨 Rock",
        paper: "📄 Paper",
        scissors: "✂️ Scissors"
    };
    return labels[choice];
}

function updateScore() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    resultText.textContent = "Make your move";
    roundDetails.textContent = "Your result will appear here.";
}
