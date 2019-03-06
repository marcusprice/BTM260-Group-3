/*  MUSI app
    sequencer.js -- 03-05-05 work
    
    To-do:
        - build Drum sequencer
        - build Drum effects section
        - toggle between Keyboard and Drum
        - graphic elements for:
                - global transport (BPM, time signature)
                - some default effects (e.g., specific genres)
                - octave up or down
        - canvas for envelope
        - error-check filter type section
        - flash sequencer keys when playing
        - sync musical typing with keyboard sequencer
        - allow user to 'play around' w/ notes before looping
        ✔ loop ONLY when 'play' button triggered 
*/

// prepare DOM
console.clear();
document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

// set up note array
const keyboardSynths = [
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster(),
  new Tone.Synth().toMaster()
];

keyboardSynths.forEach(synth => synth);

const rows = document.body.querySelectorAll('#keyboard-sequencer > div'),
      notes = ['B3', 'A#3', 'A3', 'G#3', 'G3', 'F#3', 'F3', 'E3', 'D#3', 'D3', 'C#3', 'C3'];
let index = 0;

function runKeyboardSequencer(time) {
  let step = index % 16;
  for (let i = 0; i < rows.length; i++) {
    let synth = keyboardSynths[i],
        note = notes[i],
        row = rows[i],
        input = row.querySelector(`input:nth-child(${step + 1})`);
    if (input.checked) synth.triggerAttackRelease(note, '16n', time);
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

function stopKeyboard(){
    Tone.Transport.stop();
}
