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
        document.getElementById("feedback").textContent = "Tolong masukkan angka antara 1 dan 100!";
        return;
    }

    attempts++;
    document.getElementById("attemptsCount").textContent = attempts;

    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = `Selamat! Kamu menebak dengan benar dalam ${attempts} percobaan.`;
        document.getElementById("submitGuess").style.display = "none";
        document.getElementById("restartButton").classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        document.getElementById("feedback").textContent = "Tebakanmu terlalu rendah! Coba lagi.";
    } else {
        document.getElementById("feedback").textContent = "Tebakanmu terlalu tinggi! Coba lagi.";
    }
}
