//The 3 playable buttons for the keyboard

const pianoKey1 = document.querySelector(".piano-btn1");
const pianoKey2 = document.querySelector(".piano-btn2");
const pianoKey3 = document.querySelector(".piano-btn3");

//Event listeners for keydown press and mouse button click
addEventListener("keydown", playSoundPiano);
addEventListener("click", m1SoundPiano);

//Plays a music note assigned to a key on the keyboard to play when the assigned key is pressed
function playSoundPiano(keypress) {
  if (keypress.key === "1") {
    let mySound = new Audio("./sounds/piano1.mp3");
    mySound.play();
  } else if (keypress.key === "2") {
    let mySound = new Audio("./sounds/piano2.mp3");
    mySound.play();
  } else if (keypress.key === "3") {
    let mySound = new Audio("./sounds/piano3.mp3");
    mySound.play();
  }
}
//Plays a music note when mouse is clicked on the individual button in the piano image
function m1SoundPiano(mPress) {
  if (mPress.target === pianoKey1) {
    let mySound = new Audio("./sounds/piano1.mp3");
    mySound.play();
  } else if (mPress.target === pianoKey2) {
    let mySound = new Audio("./sounds/piano2.mp3");
    mySound.play();
  } else if (mPress.target === pianoKey3) {
    let mySound = new Audio("./sounds/piano3.mp3");
    mySound.play();
  }
}
