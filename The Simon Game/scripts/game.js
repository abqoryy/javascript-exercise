const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];

function nextSequence() {
    // debugging nextSequence if its really called
    console.log("Next Sequence Called");
    userPattern = [];
    //generate random number between 0 -3
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);
    // degubgging gamePattern
    console.log(gamePattern);

};

export { nextSequence};