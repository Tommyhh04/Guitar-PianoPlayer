//The 6 playable buttons for the guitar player for when a keyboard key is pressed
const button1 = document.querySelector(".guitar-btn1");
const button2 = document.querySelector(".guitar-btn2");
const button3 = document.querySelector(".guitar-btn3");
const button4 = document.querySelector(".guitar-btn4");
const button5 = document.querySelector(".guitar-btn5");
const button6 = document.querySelector(".guitar-btn6");

//Event listeners for keydown press and mouse button click
addEventListener("keydown", playSoundGuitar);
addEventListener("click", m1SoundGuitar);

//Plays a music note assigned to a key on the keyboard to play when the assigned key is pressed
function playSoundGuitar(event) {
  if (event.key === "1") {
    let mySound = new Audio(".sounds/chord-E.wav");
    mySound.play();
  } else if (event.key === "2") {
    let mySound = new Audio(".sounds/chord-A.wav");
    mySound.play();
  } else if (event.key === "3") {
    let mySound = new Audio(".sounds/chord-D.wav");
    mySound.play();
  } else if (event.key === "4") {
    let mySound = new Audio(".sounds/chord-G.wav");
    mySound.play();
  } else if (event.key === "5") {
    let mySound = new Audio(".sounds/chord-A.wav");
    mySound.play();
  } else if (event.key === "6") {
    let mySound = new Audio(".sounds/chord-E.wav");
    mySound.play();
  }
}
//Plays a music note when mouse is clicked on the individual button in the guitar image
function m1SoundGuitar(mPress) {
  if (mPress.target === button1) {
    let mySound = new Audio(".sounds/chord-E.wav");
    mySound.play();
  } else if (mPress.target === button2) {
    let mySound = new Audio(".sounds/chord-A.wav");
    mySound.play();
  } else if (mPress.target === button3) {
    let mySound = new Audio(".sounds/chord-D.wav");
    mySound.play();
  } else if (mPress.target === button4) {
    let mySound = new Audio(".sounds/chord-G.wav");
    mySound.play();
  } else if (mPress.target === button5) {
    let mySound = new Audio(".sounds/chord-A.wav");
    mySound.play();
  } else if (mPress.target === button6) {
    let mySound = new Audio(".sounds/chord-E.wav");
    mySound.play();
  }
}
