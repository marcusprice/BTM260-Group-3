//oscillator & effect initialization
let oscState = false;
let oscillator = new Tone.Oscillator(440, 'sine').toMaster().stop();
var pingPong = new Tone.PingPongDelay('4n', 0.2).toMaster();
oscillator.connect(pingPong);

//turns on/off oscillator
let oscClick = (oscState, oscillator) => {
  let newOscState = !oscState;

  if(!oscState) {
    //if oscillator is off, turn it on
    oscillator.start();
  } else {
    //if oscillator is on, turn it off
    oscillator.stop();
  }

  return newOscState;
}

//updates frequency of oscillator & UI
let updateFreq = (value, oscillator) => {
  //update oscillator frequency
  oscillator.frequency.value = value;

  //update frequency display
  let div = document.getElementById('frequency-display');
  div.innerHTML = value + 'hz';
}
