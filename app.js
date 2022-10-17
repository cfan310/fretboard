// dynamic js to create html strings and frets

// create dynamic js functions for fretboard and piano
// add variables for string locations
// if mouseover, show piano note and string note (for each particular note location)
// look into music apis for sound
// add sound to html file
// <audio> embed; on click, play sound of piano note, setTimeout js, then play corresponding note on guitar. And vice versa.
// default mode is the mousing over of notes and standard playing of notes
// ear training mode plays the correspoinding piano/fretboard note after one is clicked
// also fretboard learning mdoe, where it keeps track of your right and wrong answers and reports back to you which ones you need to work on
// ^research best algorithm for keeping track of right and wrong data

// continue ading sounds, then finish the fretboard mouseover, then add fretboard sound, then add sound-for-sound logic, then add fretboard game logic

/*

function showNotes() {
  whiteKey.style.color = 'black';
  blackKey.style.color = 'white';
  hideBtn.style.display = 'flex';
}

showBtn.addEventListener('click', showNotes);
*/

// on click show and hide keyboard innerText note names
const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');

// add sound file for each key; play on click
// then add sound files for every fret (hard-code at first, then use a loop)
// then add asynch await so one plays after another (if the user is in that particular mode of play)

// hard code at first; loop next?

// audio variables
// C4 octave
const C4 = new Audio('sound files/C4.mp3');
const Db4 = new Audio('sound files/Db4.mp3');
const D4 = new Audio('sound files/D4.mp3');
const Eb4 = new Audio('sound files/Eb4.mp3');
const E4 = new Audio('sound files/E4.mp3');
const F4 = new Audio('sound files/F4.mp3');
const Gb4 = new Audio('sound files/Gb4.mp3');
const G4 = new Audio('sound files/G4.mp3');
const Ab4 = new Audio('sound files/Ab4.mp3');
const A4 = new Audio('sound files/A4.mp3');
const Bb4 = new Audio('sound files/Bb4.mp3');
const B4 = new Audio('sound files/B4.mp3');
// C5 octave
const C5 = new Audio('sound files/C5.mp3');
const Db5 = new Audio('sound files/Db5.mp3');
const D5 = new Audio('sound files/D5.mp3');
const Eb5 = new Audio('sound files/Eb5.mp3');
const E5 = new Audio('sound files/E5.mp3');
const F5 = new Audio('sound files/F5.mp3');
const Gb5 = new Audio('sound files/Gb5.mp3');
const G5 = new Audio('sound files/G5.mp3');
const Ab5 = new Audio('sound files/Ab5.mp3');
const A5 = new Audio('sound files/A5.mp3');
const Bb5 = new Audio('sound files/Bb5.mp3');
const B5 = new Audio('sound files/B5.mp3');

// key variables
const Db4key = document.querySelector('.Db4-key');
const D4key = document.querySelector('.D4-key');
const Eb4key = document.querySelector('.Eb4-key');
const E4key = document.querySelector('.E4-key');
const F4key = document.querySelector('.F4-key');
const Gb4key = document.querySelector('.Gb4-key');
const G4key = document.querySelector('.G4-key');
const Ab4key = document.querySelector('.Ab4-key');
const A4key = document.querySelector('.A4-key');
const Bb4key = document.querySelector('.Bb4-key');
const B4key = document.querySelector('.B4-key');
const C5key = document.querySelector('.C5-key');
const Db5key = document.querySelector('.Db5-key');
const D5key = document.querySelector('.D5-key');
const Eb5key = document.querySelector('.Eb5-key');
const E5key = document.querySelector('.E5-key');
const F5key = document.querySelector('.F5-key');
const Gb5key = document.querySelector('.Gb5-key');
const G5key = document.querySelector('.G5-key');
const Ab5key = document.querySelector('.Ab5-key');
const A5key = document.querySelector('.A5-key');
const Bb5key = document.querySelector('.Bb5-key');
const B5key = document.querySelector('.B5-key');

// function to set timeout when key sound is played; parameter of audio depending on key
const playKeySound = (audio) => {
  // return the audio node (e.g. return C4 into the clone variable)
  const clone = audio.cloneNode();
  // call play function on audio parameter
  clone.play(); // e.g. C4.play();
  // volume controls (make the key volume fad out after being pressed)
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000); // sound complete after 20000 ms
};

// C4
const C4key = document.querySelector('.C4-key');
const playC4 = () => {
  // play the sound (stored in variable) of selected variable when called
  playSound(C4);
  // add 'active' to the class of the C4 key when function is called (tied to css since we will make it darker color when key is pressed)
  C4key.classList.add('active');
};
