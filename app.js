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

setTimeout(() => {
  // if c4 piano is clicked, play c4 fretboard
  console.log('say hello');
}, '1000');

// on click show and hide keyboard innerText note names

// create variables for key-white and key-black
var whiteKey = document.getElementsByClassName('key-white');
var blackKey = document.getElementsByClassName('key-black');
const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');

function showNotes() {
  whiteKey.style.color = 'black';
  blackKey.style.color = 'white';
  hideBtn.style.display = 'flex';
}

showBtn.addEventListener('click', showNotes);
