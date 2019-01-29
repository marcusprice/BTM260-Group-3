//musical typing
let octave = 3;//global variable to keep track of octave

document.body.onkeydown = (key) => {
  //octave key control
  const octaveKeys = [90, 88]; //keys to change octave down & up
  if(octaveKeys.includes(key.keyCode)) {
    switch(key.keyCode) {
      case 90:
        //user pressed the octave down key
        octave--;
        break;
      case 88:
        //user pressed the octave up key
        octave++;
        break;
      default:
        octave = octave;
        break;
    }
  }

  //musical key control
  const musicalKeys = [65, 83, 68, 70, 71, 72, 74, 75, 87, 69, 84, 89, 85, 79];
  if(musicalKeys.includes(key.keyCode)) {
    let octaveShift = 0; //shifts octave up if higher key is pressed
    let notes = {
      //major notes
      '65': 'c', //c note
      '83': 'd', //d note
      '68': 'e', //e note
      '70': 'f', //f note
      '71': 'g', //g note
      '72': 'a', //a note
      '74': 'b', //b note
      '75': 'c', //c note (higher octave)
      //minor notes
      '87': 'c#', //c# note
      '69': 'd#', //d# note
      '84': 'f#', //f# note
      '89': 'g#', //g# note
      '85': 'a#', //a# note
      '79': 'c#' //c# note (higher octave)
    };
    if(key.keyCode == 75 || key.keyCode == 79) {
      //user pressed a higher octave key
      octaveShift++;
    }
    //determines what note and octave to play and then triggers the synth
    synthesizer.triggerEnvelope(notes[key.keyCode.toString()] + (octave + octaveShift).toString());
  }
};
