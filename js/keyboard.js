// create sequencer note function and loop over sounds
const triggerSynthesizer = (synthesizer, note) => {
  synthesizer.triggerEnvelope(note);
}
const rows = document.body.querySelectorAll('#keyboard-sequencer > div'),
      notes = ['B3', 'A#3', 'A3', 'G#3', 'G3', 'F#3', 'F3', 'E3', 'D#3', 'D3', 'C#3', 'C3'];
let index = 0;
function runKeyboardSequencer() {
  let step = index % 16;
  for(let i = 0; i < rows.length; i++) {
    let note = notes[i],
        row = rows[i],
        input = row.querySelector(`input:nth-child(${step + 1})`);
    if(input.checked) triggerSynthesizer(synthesizer, note);
  }
  index++;
}
Tone.Transport.scheduleRepeat(runKeyboardSequencer, '8n');

// start keyboard
document.getElementById("music-button-play").onclick = function() {startKeyboard()};
function startKeyboard(){
    Tone.Transport.start();
}

// stop keyboard
document.getElementById("music-button-stop").onclick = function() {stopKeyboard()};
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        stopKeyboard();   // stops at end of loop
    }
}
function stopKeyboard(){
    Tone.Transport.stop();
}