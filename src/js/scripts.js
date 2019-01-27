//musical typing
let octave = 3;

document.body.onkeydown = (key) => {
  const octaveKeys = [90, 88];
  if(octaveKeys.includes(key.keyCode)) {
    switch(key.keyCode) {
      case 90:
        octave--;
        break;
      case 88:
        octave++;
        break;
      default:
        octave = octave;
        break;
    }
  }

  const musicalKeys = [65, 83, 68, 70, 71, 72, 74, 75, 87, 69, 84, 89, 85, 79];
  if(musicalKeys.includes(key.keyCode)) {
    let notes = {
      //major notes
      '65': 'c', //c note
      '83': 'd', //d note
      '68': 'e', //e note
      '70': 'f', //f note
      '71': 'g', //g note
      '72': 'a', //a note
      '74': 'b', //b note
      '75': 'c', //c note
      //minor notes
      '87': 'c#', //c# note
      '69': 'd#', //d# note
      '84': 'f#', //f# note
      '89': 'g#', //g# note
      '85': 'a#', //a# note
      '79': 'c#' //c# note (higher octave)
    };
    synthesizer.triggerEnvelope(notes[key.keyCode.toString()] + octave.toString());
  }
};
