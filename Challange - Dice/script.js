
function randomNumber() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;

    return diceNumber;
}

function rollDice() {
    // enter the number of dice from function
    const number1 = randomNumber();
    const number2 = randomNumber();

    const diceImageSource1 = "images/dice" + number1 + ".png";
    const diceImageSource2 = "images/dice" + number2 + ".png";

    const diceRoll1 = document.querySelectorAll("img")[0];
    const diceRoll2 = document.querySelectorAll("img")[1];

    diceRoll1.setAttribute("src", diceImageSource1);
    diceRoll2.setAttribute("src", diceImageSource2);

    // use the number from const to compare the two numbers
    if (number1 > number2) {
        document.querySelector("h1").innerHTML = "Zeus Wins!";
    } else if (number1 < number2) {       
        document.querySelector("h1").innerHTML = "You Wins!";
    } else {    
        document.querySelector("h1").innerHTML = "Draw!";
    } 
}





