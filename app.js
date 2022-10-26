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
const C4PianoAudio = new Audio('piano sound files/C4.mp3');
const Db4PianoAudio = new Audio('piano sound files/Db4.mp3');
const D4PianoAudio = new Audio('piano sound files/D4.mp3');
const Eb4PianoAudio = new Audio('piano sound files/Eb4.mp3');
const E4PianoAudio = new Audio('piano sound files/E4.mp3');
const F4PianoAudio = new Audio('piano sound files/F4.mp3');
const Gb4PianoAudio = new Audio('piano sound files/Gb4.mp3');
const G4PianoAudio = new Audio('piano sound files/G4.mp3');
const Ab4PianoAudio = new Audio('piano sound files/Ab4.mp3');
const A4PianoAudio = new Audio('piano sound files/A4.mp3');
const Bb4PianoAudio = new Audio('piano sound files/Bb4.mp3');
const B4PianoAudio = new Audio('piano sound files/B4.mp3');
// C5 octave

const C5PianoAudio = new Audio('piano sound files/C5.mp3');
const Db5PianoAudio = new Audio('piano sound files/Db5.wav');
const D5PianoAudio = new Audio('piano sound files/D5.mp3');
const Eb5PianoAudio = new Audio('piano sound files/Eb5.mp3');
const E5PianoAudio = new Audio('piano sound files/E5.mp3');
const F5PianoAudio = new Audio('piano sound files/F5.mp3');
const Gb5PianoAudio = new Audio('piano sound files/Gb5.mp3');
const G5PianoAudio = new Audio('piano sound files/G5.mp3');
const Ab5PianoAudio = new Audio('piano sound files/Ab5.mp3');
const A5PianoAudio = new Audio('piano sound files/A5.mp3');
const Bb5PianoAudio = new Audio('piano sound files/Bb5.mp3');
const B5PianoAudio = new Audio('piano sound files/B5.mp3');

// GUITAR
// const C4GuitarAudio = new Audio('guitar sound files/C4.mp3');

// key variables
//const Db4key = document.querySelector('.Db4-key');
//const D4key = document.querySelector('.D4-key');
//const Eb4key = document.querySelector('.Eb4-key');
//const E4key = document.querySelector('.E4-key');
//const F4key = document.querySelector('.F4-key');
//const Gb4key = document.querySelector('.Gb4-key');
//const G4key = document.querySelector('.G4-key');
//const Ab4key = document.querySelector('.Ab4-key');
//const A4key = document.querySelector('.A4-key');
//const Bb4key = document.querySelector('.Bb4-key');
//const B4key = document.querySelector('.B4-key');
/*
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
const B5key = document.querySelector('.B5-key');*/

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

// SHOW THE NOTE THAT IS CLICKED 

const C4PianoLight = document.getElementsByClassName('C4-key');
console.log(C4PianoLight.innerText); // should be C4 

/* in css .white-key:before {
  content: 'C'; // we will dynamically code w/ loop later 
  height: 30px;
  width: 30px;
  background-color: green; 
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  z-index: 2;  
  opacity: 0;
  
  onclick, the C4 immediately changes css opacity to 1, and sets timeout to end same time as note finishes playing 
}*/ 


// C4 OCTAVE AUDIO TIME CONTROLS
// C4
const C4key = document.querySelector('.C4-key');
const playC4 = () => {
  // play the sound (stored in variable) of selected variable when called
  playKeySound(C4PianoAudio);
  // TO ILLUMINATE THE NOTE AND OCTAVE NAME: display the note and octave name when pressed; add async
  // add 'active' to the class of the C4 key when function is called (tied to css since we will make it darker color when key is pressed)
  C4key.classList.add('active');
  // remove active so it resets after a few miliseconds
  setTimeout(() => C4key.classList.remove('active'), 200);
  // LIGHT UP THE C4 KEY WHEN IT IS PLAYED FOR THE ENTIRETY OF THE NOTE SOUND
  //setTimeout(() => C4key.style.opacity = '0', 2000); 
  // Play the note sound on the guitar
  setTimeout(() => playKeySound(C4GuitarAudio), 1500);

};
// pass C4 into playC4 function (which in turn triggers the playKeySound function with C4 as the audio parameter)
C4key.addEventListener('click', playC4);
// Db4
const Db4key = document.querySelector('.Db4-key');
const playDb4 = () => {
  playKeySound(Db4PianoAudio);
  // here we will display the note name when we press and set a similar timeout for 200
  Db4key.style.color = 'white';
  Db4key.classList.add('active');
  setTimeout(() => Db4key.classList.remove('active'), 200);
};
Db4key.addEventListener('click', playDb4);
// D4
const D4key = document.querySelector('.D4-key');
const playD4 = () => {
  playKeySound(D4PianoAudio);
  D4key.classList.add('active');
  setTimeout(() => D4key.classList.remove('active'), 200);
};
D4key.addEventListener('click', playD4);
// Eb4
const Eb4key = document.querySelector('.Eb4-key');
const playEb4 = () => {
  playKeySound(Eb4PianoAudio);
  Eb4key.classList.add('active');
  setTimeout(() => Eb4key.classList.remove('active'), 200);
};
Eb4key.addEventListener('click', playEb4);
// E4
const E4key = document.querySelector('.E4-key');
const playE4 = () => {
  playKeySound(E4PianoAudio);
  E4key.classList.add('active');
  setTimeout(() => E4key.classList.remove('active'), 200);
};
E4key.addEventListener('click', playE4);
// F4
const F4key = document.querySelector('.F4-key');
const playF4 = () => {
  playKeySound(F4PianoAudio);
  F4key.classList.add('active');
  setTimeout(() => F4key.classList.remove('active'), 200);
};
F4key.addEventListener('click', playF4);
// Gb4
const Gb4key = document.querySelector('.Gb4-key');
const playGb4 = () => {
  playKeySound(Gb4PianoAudio);
  Gb4key.classList.add('active');
  setTimeout(() => Gb4key.classList.remove('active'), 200);
};
Gb4key.addEventListener('click', playGb4);
// G4
const G4key = document.querySelector('.G4-key');
const playG4 = () => {
  playKeySound(G4PianoAudio);
  G4key.classList.add('active');
  setTimeout(() => G4key.classList.remove('active'), 200);
};
G4key.addEventListener('click', playG4);
// Ab4
const Ab4key = document.querySelector('.Ab4-key');
const playAb4 = () => {
  playKeySound(Ab4PianoAudio);
  Ab4key.classList.add('active');
  setTimeout(() => Ab4key.classList.remove('active'), 200);
};
Ab4key.addEventListener('click', playAb4);
// A4
const A4key = document.querySelector('.A4-key');
const playA4 = () => {
  playKeySound(A4PianoAudio);
  A4key.classList.add('active');
  setTimeout(() => A4key.classList.remove('active'), 200);
};
A4key.addEventListener('click', playA4);
// Bb4
const Bb4key = document.querySelector('.Bb4-key');
const playBb4 = () => {
  playKeySound(Bb4PianoAudio);
  Bb4key.classList.add('active');
  setTimeout(() => Bb4key.classList.remove('active'), 200);
};
Bb4key.addEventListener('click', playBb4);
// B4
const B4key = document.querySelector('.B4-key');
const playB4 = () => {
  playKeySound(B4PianoAudio);
  B4key.classList.add('active');
  setTimeout(() => B4key.classList.remove('active'), 200);
};
B4key.addEventListener('click', playB4);

// need to import C5 sound files into piano sound files folder
// C5 OCTAVE AUDIO TIME CONTROLS
// C4
const C5key = document.querySelector('.C5-key');
const playC5 = () => {
  // play the sound (stored in variable) of selected variable when called
  playKeySound(C5PianoAudio);
  // TO ILLUMINATE THE NOTE AND OCTAVE NAME: display the note and octave name when pressed; add async
  // add 'active' to the class of the C4 key when function is called (tied to css since we will make it darker color when key is pressed)
  C5key.classList.add('active');
  // remove active so it resets after a few miliseconds
  setTimeout(() => C5key.classList.remove('active'), 200);
};
C5key.addEventListener('click', playC5);

// Db5 need cleaner audio
const Db5key = document.querySelector('.Db5-key');
const playDb5 = () => {
  playKeySound(Db5PianoAudio);
  Db5key.classList.add('active');
  setTimeout(() => Db5key.classList.remove('active'), 200);
};
Db5key.addEventListener('click', playDb5);

// rename to not confuse with guitar fretboard notes.
/*
// D4
const D4key = document.querySelector('.D4-key');
const playD4 = () => {
  playKeySound(D4PianoAudio);
  D4key.classList.add('active');
  setTimeout(() => D4key.classList.remove('active'), 200);
};
D4key.addEventListener('click', playD4);
// Eb4
const Eb4key = document.querySelector('.Eb4-key');
const playEb4 = () => {
  playKeySound(Eb4PianoAudio);
  Eb4key.classList.add('active');
  setTimeout(() => Eb4key.classList.remove('active'), 200);
};
Eb4key.addEventListener('click', playEb4);
// E4
const E4key = document.querySelector('.E4-key');
const playE4 = () => {
  playKeySound(E4PianoAudio);
  E4key.classList.add('active');
  setTimeout(() => E4key.classList.remove('active'), 200);
};
E4key.addEventListener('click', playE4);
// F4
const F4key = document.querySelector('.F4-key');
const playF4 = () => {
  playKeySound(F4PianoAudio);
  F4key.classList.add('active');
  setTimeout(() => F4.classList.remove('active'), 200);
};
F4key.addEventListener('click', playF4);
// Gb4
const Gb4key = document.querySelector('.Gb4-key');
const playGb4 = () => {
  playKeySound(Gb4PianoAudio);
  Gb4key.classList.add('active');
  setTimeout(() => Gb4key.classList.remove('active'), 200);
};
Gb4key.addEventListener('click', playGb4);
// G4
const G4key = document.querySelector('.G4-key');
const playG4 = () => {
  playKeySound(G4PianoAudio);
  G4key.classList.add('active');
  setTimeout(() => G4key.classList.remove('active'), 200);
};
G4key.addEventListener('click', playG4);
// Ab4
const Ab4key = document.querySelector('.Ab4-key');
const playAb4 = () => {
  playKeySound(Ab4PianoAudio);
  Ab4key.classList.add('active');
  setTimeout(() => Ab4key.classList.remove('active'), 200);
};
Ab4key.addEventListener('click', playAb4);
// A4
const A4key = document.querySelector('.A4-key');
const playA4 = () => {
  playKeySound(A4PianoAudio);
  A4key.classList.add('active');
  setTimeout(() => A4key.classList.remove('active'), 200);
};
A4key.addEventListener('click', playA4);
// Bb4
const Bb4key = document.querySelector('.Bb4-key');
const playBb4 = () => {
  playKeySound(Bb4PianoAudio);
  Bb4key.classList.add('active');
  setTimeout(() => Bb4key.classList.remove('active'), 200);
};
Bb4key.addEventListener('click', playBb4);
// B4
const B4key = document.querySelector('.B4-key');
const playB4 = () => {
  playKeySound(B4PianoAudio);
  B4key.classList.add('active');
  setTimeout(() => B4key.classList.remove('active'), 200);
};
B4key.addEventListener('click', playBb4);
*/

/*
if earTrainerMode() is turned on, then 
const F4TrainMode = const playF4 = () => {
  playKeySound(F4);
  F4key.classList.add('active');
  setTimeout(() => F4.classList.remove('active'), 200);
};  


*/

// PLAY GUITAR ON MOUSEOVER

const C4GuitarNote = document.getElementById('C4GuitarNote');
const C4GuitarAudio = new Audio('guitar sound files/C4Guitar.mp3');

const playC4Guitar = () => {
  // play the sound (stored in variable) of selected variable when called
  playKeySound(C4GuitarAudio);
  // TO ILLUMINATE THE NOTE AND OCTAVE NAME: display the note and octave name when pressed; add async
  // add 'active' to the class of the C4 key when function is called (tied to css since we will make it darker color when key is pressed)
  C4GuitarNote.classList.add('active');
  // remove active so it resets after a few miliseconds
  setTimeout(() => C4GuitarNote.classList.remove('active'), 200);
};
C4GuitarNote.addEventListener('mouseover', playC4Guitar);

// ^not playing atm on mouseover

// import rest of gutiar files and add asynch sound


// DYNAMIC FRETBOARD 
// Create element dynamically with javascript
// Begin with div 
