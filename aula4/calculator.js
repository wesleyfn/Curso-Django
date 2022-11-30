const tryButton = document.querySelector("#btn-try");
const shot = document.querySelector("#txt-shot");
const lastShots = document.querySelector("#lbl-shots");
const inputShot = document.querySelector("#txt-shot");

var randomNumber = Math.floor(Math.random() * (100+1)) + 1;
var tries = 0;

function verifyShot() {
    if (shot.value < randomNumber)
        lastShots.innerHTML += " >";
    else if (shot.value > randomNumber)
        lastShots.innerHTML += " <";
    else {
        lastShots.innerHTML += " =";
        console.log("Parabêns, você conseguiu! " + randomNumber);
        resetGame(true);
    }
}

function resetGame(win=false) {
    tryButton.innerHTML = "Reiniciar"
    lastShots.innerHTML = "";
    randomNumber = Math.floor(Math.random() * (100+1)) + 1;
    console.log("Novo número gerado!");
    tries = 0;
}

tryButton.addEventListener("click", function() {
    verifyShot();
    lastShots.innerHTML += shot.value;
    inputShot.value = "";
    tries++;

    if(tries == 10)
        resetGame();
    console.log(tryButton.innerHTML);
    console.log(tries);
});

