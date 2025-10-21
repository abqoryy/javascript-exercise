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

let userPattern = [];
// need to group this so the code only runs when the game starts
nextSequence();

// button click to verify userPattern to gamePattern
$(".btn").on("click", function() {
    let userClick = $(this).attr("id");
    userPattern.push(userClick); 
    console.log(userClick);

    let currentIndex = userPattern.length - 1;
    if (userPattern[currentIndex] === gamePattern[currentIndex]) {
        console.log("success");
    } else {
        console.log("wrong");
    }

    if (userPattern.length === gamePattern.length) {
        userPattern = [];
        
        setTimeout(() => {
            nextSequence();
        },1000);
    };
});


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);

    playSequence();

};

function playSequence() {
    for (let i = 0; i < gamePattern.length && i < 5; i++) {
        let color = gamePattern[i];
        setTimeout(() => {       
            $("#" + color).addClass("highlight");
            setTimeout(() => {
                $("#" + color).removeClass("highlight");
            },500);
        }, i * 1000);
    }
};
