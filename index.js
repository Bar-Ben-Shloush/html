const crashSound = new Audio('./sounds/crash.mp3');
const kickSound = new Audio('./sounds/kick-bass.mp3');
const shareSound = new Audio('./sounds/snare.mp3');
const tom1hSound = new Audio('./sounds/tom-1.mp3');
const tom2hSound = new Audio('./sounds/tom-2.mp3');
const tom3hSound = new Audio('./sounds/tom-3.mp3');
const tom4hSound = new Audio('./sounds/tom-4.mp3');
const images = document.querySelectorAll('.image');

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function(event) {
    const buttonId = this.id; // מזהים את ה-ID של הכפתור שנלחץ
    switch(buttonId){
      case "wButton":
        tom1hSound.play();
        break;
      case "aButton":
        tom2hSound.play();
        break;
      case "sButton":
        tom3hSound.play();
        break;
      case "dButton":
        tom4hSound.play();
        break;
      case "jButton":
        crashSound.play();
        break;
      case "kButton":
        kickSound.play();
        break;
      case "lButton":
        shareSound.play();
        break;
      default:
        console.log("Unknown button clicked: " + buttonId);
    }
  });
});




document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "w":
        tom1hSound.play();
        console.log("You pressed W");
        break;
      case "a":
        tom2hSound.play();
        console.log("You pressed A");
        break;
      case "s":
        tom3hSound.play();
        console.log("You pressed S");
        break;
      case "d":
        tom4hSound.play();
        console.log("You pressed D");
        break;
    case "j":
        crashSound.play();
        break;
    case "k":
        kickSound.play();
        console.log("You pressed S");
        break;
    case "l":
        console.log("You pressed D");
        shareSound.play();
        break;
    default:
        console.log(`You pressed: ${event.key}`);
    }
  });
  