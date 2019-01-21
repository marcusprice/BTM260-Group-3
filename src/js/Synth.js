class Synth {
  constructor(oscillator, filter, delay) {
    this.oscillator = oscillator;
    this.delay = delay;
    this.filter = filter;
    this.state = false;

    //chain all devices
    this.oscillator.chain(filter, delay, Tone.Master);
  }

  power() {
    if(!this.state) {
      this.oscillator.start();
      this.state = true;
    } else {
      this.oscillator.stop();
      this.state = false;
    }
  }

  //oscillator methods
  //getters
  getOscFreq() {
    return this.oscillator.frequency.value;
  }

  getOscWaveform() {
    return this.oscillator.type;
  }

  //setters
  setOscFreq(input) {
    this.oscillator.frequency.value = input.value;
  }

  setWaveform(input) {
    this.oscillator.type = input.value;
  }


  //filter methods
  //getters
  getFilterType() {
    return this.filter.type;
  }

  getCutoffFreq() {
    return this.filter.frequency.value;
  }

  getQ() {
    return this.filter.Q.value;
  }

  //setters
  setFilterType(input) {
    this.filter.type = input.value;
  }

  setCutoffFreq(input) {
    this.filter.frequency.value = input.value;
  }

  setQ(input) {
    this.filter.Q.value = input.value;
    this.filter.gain.value = Math.sqrt(input.value);
  }


  //delay methods
  setDelayTime(input) {
    this.delay.delayTime.value = input.value * .01;
  }

  setDelayFeedback(input) {
    this.delay.feedback.value = input.value * .1;
  }
}
