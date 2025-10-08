const drumButtons = document.querySelectorAll(".drum");

const soundPath = [
    "sounds/tom-1.mp3", // for letter 'w'
    "sounds/tom-2.mp3", // for letter 'a'
    "sounds/tom-3.mp3", // for letter 's'
    "sounds/tom-4.mp3", // for letter 'd'
    "sounds/snare.mp3", //for letter 'q'
    "sounds/kick-bass.mp3", // for letter 'e'
    "sounds/crash.mp3", // for letter 'r'
    "sounds/Recording.m4a", // for deafult
]

// play sound when the key in web is pressed based on the function already stated below --playSound(key)
for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function(){ 
        let key = this.innerHTML;
        playSound(key);
        buttonAnimation(key);
    });   
}

// play sound when key in keyboard is pressed based on the function already stated below --playSound(key)
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    // make if statement, so if is find the activeButton that not null,
    // will execute the command to add class pressed and remove it after 100ms
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
};


function playSound(key) {

    tom1Sound = new Audio (soundPath[0]);
    tom2Sound = new Audio (soundPath[1]);
    tom3Sound = new Audio (soundPath[2]);
    tom4Sound = new Audio (soundPath[3]);
    snareSound = new Audio (soundPath[4]);
    kickSound = new Audio (soundPath[5]);
    crashSound = new Audio (soundPath[6]);
    freakySound = new Audio (soundPath[7]);


    switch (key) {
        case "w":
            tom1Sound.currentTime = 0;
            tom1Sound.play();
            break;
        case "a":
            tom2Sound.currentTime = 0;
            tom2Sound.play();
            break;
        case "s":
            tom3Sound.currentTime = 0;
            tom3Sound.play();
            break;
        case "d":
            tom4Sound.currentTime = 0;
            tom4Sound.play();
            break;
        case "q":
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case "e":
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case "r":
            crashSound.currentTime = 0;
            crashSound.play();
            break;
        default:
            freakySound.currentTime = 1;
            freakySound.play();
            
            break;
    }
}
 

//commonly used capitalize - title case for the function name, 

class BellBoy {
    constructor(name, age, workPermit, languages) {
        this.name = name;
        this.age = age;
        this.workPermit = workPermit;
        this.languages = languages;
    }
}

const bellBoy1 = new BellBoy ("John", 25, true, ["English", "Spanish"]);
