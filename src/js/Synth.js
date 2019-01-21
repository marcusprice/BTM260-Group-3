class Synth {
  constructor(oscillator, delay, filter) {
    this.oscillator = oscillator;
    this.delay = delay;
    this.filter = filter;
    this.state = false;

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
  changeOscFreq(input) {
    this.oscillator.frequency.value = input.value;
  }

  changeWaveform(input) {
    this.oscillator.type = input.value;
  }

  //filter methods
  changeFilterType(input) {
    this.filter.type = input.value;
  }

  changeCutoffFreq(input) {
    this.filter.frequency.value = input.value;
  }

  changeQ(input) {
    this.filter.Q.value = input.value;
    this.filter.gain.value = Math.sqrt(input.value);
  }

  //delay methods
  changeDelayTime(input) {
    this.delay.delayTime.value = input.value * .01;
  }

  changeDelayFeedback(input) {
    this.delay.feedback.value = input.value * .1;
  }
}
