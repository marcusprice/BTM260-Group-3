class Synth {
  constructor(oscillator, delay) {
    this.oscillator = oscillator;
    this.state = false;
    this.delay = delay;

    this.oscillator.chain(this.delay, Tone.Master).toMaster().stop();
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
}
