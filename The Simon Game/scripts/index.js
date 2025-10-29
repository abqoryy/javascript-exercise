import { nextSequence } from "./game.js";

// put all the button colors into an array
// make empty array for patterns
// adding sounds to variables
const greenSound = new Audio("sounds/green.mp3");
const redSound = new Audio("sounds/red.mp3");
const yellowSound = new Audio("sounds/yellow.mp3");
const blueSound = new Audio("sounds/blue.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

$(".title h1").on("click", function() {
    // debug that really can be clicked
    console.log("Game Started");
    nextSequence();
});