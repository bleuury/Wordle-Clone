const targetWord = "APPLE"; // You can change this to any 5-letter word
let currentRow = 0;

function submitGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toUpperCase();

    if (guess.length !== 5) {
        displayMessage("Please enter a 5-letter word.");
        return;
    }

    const rowTiles = document.querySelectorAll(`#game-board .row:nth-child(${currentRow + 1}) .tile`);

    for (let i = 0; i < 5; i++) {
        rowTiles[i].textContent = guess[i];

        if (guess[i] === targetWord[i]) {
            rowTiles[i].classList.add("correct");
        } else if (targetWord.includes(guess[i])) {
            rowTiles[i].classList.add("present");
        } else {
            rowTiles[i].classList.add("absent");
        }
    }

    if (guess === targetWord) {
        displayMessage("Congratulations! You've guessed the word!");
    } else if (currentRow === 5) {
        displayMessage(`Game over! The correct word was ${targetWord}.`);
    } else {
        currentRow++;
        guessInput.value = "";
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        submitGuess();
    }
}
