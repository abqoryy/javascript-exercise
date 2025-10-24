// put all the button colors into an array
// make empty array for patterns
const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];


// adding sounds to variables
const greenSounds = new Audio("sounds/green.mp3");
const redSounds = new Audio("sounds/red.mp3");
const yellowSounds = new Audio("sounds/yellow.mp3");
const blueSounds = new Audio("sounds/blue.mp3");

// start the game by clicking h1
$(".title h1").on("click", function() {
    nextSequence();
});

// function to make action when user click the buttons
$(".btn").on("click", function() {
    let userClick = $(this).attr("id");
    userPattern.push(userClick);

    playSound(userClick);
    // debuggin the click
    console.log(userClick);

    let currentIndex = userPattern.length - 1;
    // matching both index patterns
    if (userPattern[currentIndex] === gamePattern[currentIndex]) {
        // debuggin if the patterns are matched
        console.log("success");

        // check if user already finished the sequence
        if (userPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            },1000);
        };
    } else {
        // debuggin if the patterns are not matched
        // MAKE NEW CLASS FOR WRONG ANSWER IN CSS
        console.log("wrong");
    };

});

// 