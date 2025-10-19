// assign sound to each button when clicked

const greenSounds = new Audio("sounds/green.mp3");
const redSounds = new Audio("sounds/red.mp3");
const yellowSounds = new Audio("sounds/yellow.mp3");
const blueSounds = new Audio("sounds/blue.mp3");

$(".bg-green").on("click", function() {
    greenSounds.currentTime = 0;
    greenSounds.play();
});

$(".bg-red").on("click", function() {
    redSounds.currentTime = 0;
    redSounds.play();
});

$(".bg-yellow").on("click", function() {
    yellowSounds.currentTime = 0;
    yellowSounds.play();
});

$(".bg-blue").on("click", function() {
    blueSounds.currentTime = 0;
    blueSounds.play();
});

// make pattern
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random()* 4);
    let buttonColors = ["green", "red", "yellow", "blue"];
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);

    $(".bg-" + randomChosen).addClass("highlight", function() {
        if (randomChosen === "green") {
            greenSounds.currentTime = 0;
            greenSounds.play();
        } else if (randomChosen === "red") {
            redSounds.currentTime = 0
            redSounds.play();    
        } else if (randomChosen === "yellow") {
            yellowSounds.currentTime = 0;
            yellowSounds.play();
        } else {
            blueSounds.currentTime = 0;
            blueSounds.play();
        }
    });
    setTimeout(() => {
        $(".bg-" + randomChosen).removeClass("highlight");
    },500);
};
// using switch to play sound based on color
nextSequence();

