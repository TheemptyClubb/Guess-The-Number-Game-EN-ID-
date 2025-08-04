let randomNumber;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    resetGame();
    document.getElementById("submitGuess").addEventListener("click", handleGuess);
    document.getElementById("restartButton").addEventListener("click", resetGame);
});

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("attemptsCount").textContent = attempts;
    document.getElementById("feedback").textContent = "";
    document.getElementById("submitGuess").style.display = "inline-block";
    document.getElementById("restartButton").classList.add("hidden");
    document.getElementById("guessInput").value = "";
}

function handleGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Please enter a number between 1 and 100!";
        return;
    }

    attempts++;
    document.getElementById("attemptsCount").textContent = attempts;

    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = `Congratulations! You guessed correctly in ${attempts} attempts.`;
        document.getElementById("submitGuess").style.display = "none";
        document.getElementById("restartButton").classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        document.getElementById("feedback").textContent = "Your guess is too low! Try again.";
    } else {
        document.getElementById("feedback").textContent = "Your guess is too high! Try again.";
    }
}
