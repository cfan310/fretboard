// workspace to show piano note names on click (then settimeout so they disappear)

// on click show and hide keyboard innerText note names
const showBtn = document.querySelector('.showBtn');
const hideBtn = document.querySelector('.hideBtn');
// piano container div
const piano = document.querySelector('.piano');

// add harcoded css

// get root element
//var root = document.querySelector('.root'); 
const root = document.documentElement;

// set variable in css piano
// setProperty(propertyName, value) 
//root.style.setProperty('--number-of-octaves', numberOfOctaves);
//root.style.setProperty('--number-of-strings', numberOfStrings);

//let numberOfOctaves = 7; 
//let numberOfStrings = 6; 

// fretboard3 build with css 

// also will create loop to automatically create more octaves depending on our input for the css variable numberOfOctaves 
// 






// show notes on click
/* function showNotesOnClick() {
    showBtn.addEventListener('click', function() {
        css root variable selecting all buttons (or use the div?)
        hideBtn.style.visibility = 'visible';
        C4key.innerText = 'C';
        hideBtn.addEventListener('click', function() {
            C4key.innerText = ''; none
        })
    })
}
*/
// show notes on click; later let's add this with a dynamic js loop like with the fretboard note names
function showNotesOnClick() {
  showBtn.addEventListener('click', function () {
    // make them bolder
    hideBtn.style.visibility = 'visible';
    C4key.innerText = 'C';
    Db4key.innerText = 'C#/Db';
    Db4key.style.color = 'white';
    D4key.innerText = 'D';
    Eb4key.innerText = 'D#/Eb';
    Eb4key.style.color = 'white';
    E4key.innerText = 'E';
    F4key.innerText = 'F';
    Gb4key.innerText = 'F#/Gb';
    Gb4key.style.color = 'white';
    G4key.innerText = 'G';
    Ab4key.innerText = 'G#/Ab';
    Ab4key.style.color = 'white';
    A4key.innerText = 'A';
    Bb4key.innerText = 'A#/Bb';
    Bb4key.style.color = 'white';
    B4key.innerText = 'B';
    C5key.innerText = 'C';
    Db5key.innerText = 'C#/Db';
    Db5key.style.color = 'white';
    D5key.innerText = 'D';
    Eb5key.innerText = 'D#/Eb';
    Eb5key.style.color = 'white';
    E5key.innerText = 'E';
    F5key.innerText = 'F';
    Gb5key.innerText = 'F#/Gb';
    Gb5key.style.color = 'white';
    G5key.innerText = 'G';
    Ab5key.innerText = 'G#/Ab';
    Ab5key.style.color = 'white';
    A5key.innerText = 'A';
    Bb5key.innerText = 'A#/Bb';
    Bb5key.style.color = 'white';
    B5key.innerText = 'B';
  });
}

showNotesOnClick();

hideBtn.addEventListener('click', function () {
  C4key.innerText = '';
  Db4key.innerText = '';
  D4key.innerText = '';
  Eb4key.innerText = '';
  E4key.innerText = '';
  F4key.innerText = '';
  Gb4key.innerText = '';
  G4key.innerText = '';
  Ab4key.innerText = '';
  A4key.innerText = '';
  Bb4key.innerText = '';
  B4key.innerText = '';
  C5key.innerText = '';
  Db5key.innerText = '';
  D5key.innerText = '';
  Eb5key.innerText = '';
  E5key.innerText = '';
  F5key.innerText = '';
  Gb5key.innerText = '';
  G5key.innerText = '';
  Ab5key.innerText = '';
  A5key.innerText = '';
  Bb5key.innerText = '';
  B5key.innerText = '';

  hideBtn.style.visibility = 'hidden';
});

//^after this let's add mouseover / hover / active and show the ntoe names that way (similar to fretboard)

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
// const C4key = document.querySelector('.C4-key');
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
// C5
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

// D5
const D5key = document.querySelector('.D5-key');
const playD5 = () => {
  playKeySound(D5PianoAudio);
  D5key.classList.add('active');
  setTimeout(() => D5key.classList.remove('active'), 200);
};
D5key.addEventListener('click', playD5);
// Eb5
const Eb5key = document.querySelector('.Eb5-key');
const playEb5 = () => {
  playKeySound(Eb5PianoAudio);
  Eb5key.classList.add('active');
  setTimeout(() => Eb5key.classList.remove('active'), 200);
};
Eb5key.addEventListener('click', playEb5);
// E5
const E5key = document.querySelector('.E5-key');
const playE5 = () => {
  playKeySound(E5PianoAudio);
  E5key.classList.add('active');
  setTimeout(() => E5key.classList.remove('active'), 200);
};
E5key.addEventListener('click', playE5);
// F5
const F5key = document.querySelector('.F5-key');
const playF5 = () => {
  playKeySound(F5PianoAudio);
  F5key.classList.add('active');
  setTimeout(() => F5key.classList.remove('active'), 200);
};
F5key.addEventListener('click', playF5);
// Gb5
const Gb5key = document.querySelector('.Gb5-key');
const playGb5 = () => {
  playKeySound(Gb5PianoAudio);
  Gb5key.classList.add('active');
  setTimeout(() => Gb5key.classList.remove('active'), 200);
};
Gb5key.addEventListener('click', playGb5);
// G5
const G5key = document.querySelector('.G5-key');
const playG5 = () => {
  playKeySound(G5PianoAudio);
  G5key.classList.add('active');
  setTimeout(() => G5key.classList.remove('active'), 200);
};
G5key.addEventListener('click', playG5);
// Ab5
const Ab5key = document.querySelector('.Ab5-key');
const playAb5 = () => {
  playKeySound(Ab5PianoAudio);
  Ab5key.classList.add('active');
  setTimeout(() => Ab5key.classList.remove('active'), 200);
};
Ab5key.addEventListener('click', playAb5);
// A5
const A5key = document.querySelector('.A5-key');
const playA5 = () => {
  playKeySound(A5PianoAudio);
  A5key.classList.add('active');
  setTimeout(() => A5key.classList.remove('active'), 200);
};
A5key.addEventListener('click', playA5);
// Bb5
const Bb5key = document.querySelector('.Bb5-key');
const playBb5 = () => {
  playKeySound(Bb5PianoAudio);
  Bb5key.classList.add('active');
  setTimeout(() => Bb5key.classList.remove('active'), 200);
};
Bb5key.addEventListener('click', playBb5);
// B5
const B5key = document.querySelector('.B5-key');
const playB5 = () => {
  playKeySound(B5PianoAudio);
  B5key.classList.add('active');
  setTimeout(() => B5key.classList.remove('active'), 200);
};
B5key.addEventListener('click', playB5);

/*
if earTrainerMode() is turned on, then 
const F4TrainMode = const playF4 = () => {
  playKeySound(F4);
  F4key.classList.add('active');
  setTimeout(() => F4.classList.remove('active'), 200);
};  


*/


// On hover, light up the note names in green 




