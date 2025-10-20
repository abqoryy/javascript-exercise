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
const buttonColors = ["green", "red", "yellow", "blue"];

nextSequence();
setTimeout(() => {
    nextSequence();
},1000);

// button to answer the pattern
// make pattern user to verify
let userPattern = [];

$(".btn").on("click", function() {
   let userClick = $(".btn").attr("id");
   userPattern.push(userClick); 
})

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);

    // flash animation
    $("#" + randomChosen).addClass("highlight");
    setTimeout(() => {
        $("#" + randomChosen).removeClass("highlight");
    },500);
};
