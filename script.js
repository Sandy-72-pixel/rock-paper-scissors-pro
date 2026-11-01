let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function choose(playerChoice) {

    if (gameOver) {
        return;
    }

    let choices = ["Rock", "Paper", "Scissors"];

    let computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {

        result = "🤝 It's a Draw!";

    } else if (

        (playerChoice === "Rock" &&
        computerChoice === "Scissors") ||

        (playerChoice === "Paper" &&
        computerChoice === "Rock") ||

        (playerChoice === "Scissors" &&
        computerChoice === "Paper")

    ) {

        result = "🎉 You Win!";
        playerScore++;

    } else {

        result = "😢 Computer Wins!";
        computerScore++;
    }

    document.getElementById("message").textContent =
        "You chose " + playerChoice +
        " | Computer chose " + computerChoice +
        " | " + result;

    document.getElementById("playerScore").textContent =
        playerScore;

    document.getElementById("computerScore").textContent =
        computerScore;

    if (playerScore === 5) {

        document.getElementById("message").textContent =
            "🏆 YOU ARE THE CHAMPION! 🏆";

        gameOver = true;
    }

    if (computerScore === 5) {

        document.getElementById("message").textContent =
            "💻 COMPUTER IS THE CHAMPION! 💻";

        gameOver = true;
    }
}

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    document.getElementById("playerScore").textContent = 0;

    document.getElementById("computerScore").textContent = 0;

    document.getElementById("message").textContent =
        "Choose your move!";
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}