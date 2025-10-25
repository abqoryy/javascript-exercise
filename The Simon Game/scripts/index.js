// put all the button colors into an array
// make empty array for patterns
const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];


// adding sounds to variables
const greenSound = new Audio("sounds/green.mp3");
const redSound = new Audio("sounds/red.mp3");
const yellowSound = new Audio("sounds/yellow.mp3");
const blueSound = new Audio("sounds/blue.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

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
            }, 1000);
        };

    } else {
        // debuggin if the patterns are not matched
        console.log("wrong");
        $("body").addClass("game-over").on("click", function() {
            wrongSound.currentTime = 0;
            wrongSound.play();

            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 200);
        });
        // reset the game to level 1
        $("h1").text("You Noob! Click Here to Restart");
        // reset gamePatterns
        gamePattern = [];
    };

});

// function to create new sequence to start the game and play the next sequence
function nextSequence() {
    //reset userPattern
    userPattern = [];
    //generate random number between 0 -3
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);

    playSequence();
};

// function to add new color and playing all the colors from gamePattern array 
function playSequence() {
    // i for index, this to add color one by one to increase the level
    gamePattern.forEach((color, i) => {
        setTimeout(() => {
            // this will playing the sound based on the color in gamePattern
            playSound(color);
            // this will animate or flash the button color
            animateButton(color);
        }, i * 600);
    });
};

// function to play sound based on the color, using switch case logic
function playSound(color) {
    switch(color) {
        case "green":
            greenSound.currentTime = 0;
            greenSound.play();
            break;
        case "red":
            redSound.currentTime = 0;
            redSound.play();
            break;
        case "yellow":
            yellowSound.currentTime = 0;
            yellowSound.play();
            break
        case "blue":
            blueSound,currentTime = 0;
            blueSound.play();
            break
    };
};


// function to animate button, will add class and remove from the button
function animateButton(color) {
    $("#", + color).addClass("highlight");
    setTimeout(() => {
        $("#" + color).removeClass("highlight");
    }, 300);
};
