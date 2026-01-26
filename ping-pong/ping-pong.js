console.log("Ping Pong Game Initialized");
let p1= 0;
let p2= 0;
let max;

const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");
const button1 = document.getElementById("p1Button");
const button2 = document.getElementById("p2Button");
const resetButton = document.getElementById("reset");
const winner = document.getElementById("winner");


function disableButtons() {
    button1.disabled = true;
    button2.disabled = true;

    button1.id += "disabled";
    button2.id += "disabled";
}

function checkWinner() {
    max = parseInt(document.getElementById("winScore").value)
    if (p1 === max) {
        // alert("Player 1 Wins!");
        winner.innerHTML = `Player 1 Wins! (${p1} - ${p2})`;
        setTimeout(() => {
            winner.innerHTML = "";
        }, 3000);
        disableButtons();
    } else if (p2 === max) {
        // alert("Player 2 Wins!");
        winner.innerHTML = `Player 2 Wins! (${p2} - ${p1})`;
        setTimeout(() => {
            winner.innerHTML = "";
        }, 3000);
        disableButtons();
    }
}

function incrementScore(player) {
    if (player === 1) {
        p1++;
        p1Display.innerHTML = p1;
    } else if (player === 2) {
        p2++;
        p2Display.innerHTML = p2;
    }
    checkWinner();
}

function resetGame() {
    p1 = 0;
    p2 = 0;
    p1Display.innerHTML = p1;
    p2Display.innerHTML = p2;
    button1.disabled = false;
    button2.disabled = false;
    button1.id = "p1Button";
    button2.id = "p2Button";
}


button1.addEventListener("click", function() {
    incrementScore(1);
});

button2.addEventListener("click", function() {
    incrementScore(2);
});

resetButton.addEventListener("click", resetGame);



