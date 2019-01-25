class Synth {
  constructor(oscillator, filter, distortion, volume, delay, reverb) {
    //construct audio devices
    this.oscillator = oscillator;
    this.filter = filter;
    this.distortion = distortion;
    this.volume = volume;
    this.delay = delay;
    this.reverb = reverb;

    //set states
    this.oscState = false;
    this.filterState = true;
    this.distortion.distortion = 0.0;
    this.delay.wet.value = .5;
    this.reverb.wet.value = .5;

    //chain all devices
    this.oscillator.chain(
      this.filter,
      this.distortion,
      this.volume,
      this.delay,
      this.reverb,
      Tone.Master
    );
  }

 /**oscillator methods
  *@see this.oscillator
  *
  */

  power() {
    if(!this.oscState) {
      //if oscillator is off, start it
      this.oscillator.start();
    } else {
      //if oscillator is on, stop it
      this.oscillator.stop();
    }
    //update this.oscState for next interaction
    this.oscState = !this.oscState;
  }

  //oscillator getters
  getOscStatus() {
    return this.oscState;
  }

  getOscFreq() {
    return this.oscillator.frequency.value;
  }

  getOscWaveform() {
    return this.oscillator.type;
  }

  //oscillator setters
  setOscFreq(input) {
    this.oscillator.frequency.value = input.value;
  }

  setWaveform(input) {
    this.oscillator.type = input.value;
  }


 /**filter methods
  *@see this.filter
  */

  //filter getters
  filterOnOff() {
    if(this.filterState) {
      this.oscillator.disconnect(this.filter);
    } else {
      this.oscillator.connect(this.filter);
    }
    this.filterState = !this.filterState;
  }

  getFilterState() {
    return this.filterState;
  }

  getFilterType() {
    return this.filter.type;
  }

  getCutoffFreq() {
    return this.filter.frequency.value;
  }

  getQ() {
    return this.filter.Q.value;
  }

  //filter setters
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

 /**delay methods
  *@see this.delay
  */

  //delay getters
  getDelayTime(input) {
    return this.delay.delayTime.value;
  }

  getDelayFeedback(input) {
    return this.delay.feedback.value;
  }

  getDelayWet() {
    return this.delay.wet.value;
  }

  //delay setters
  setDelayTime(input) {
    this.delay.delayTime.value = input.value * .01;
  }

  setDelayFeedback(input) {
    this.delay.feedback.value = input.value * .1;
  }

  setDelayWet(input) {
    this.delay.wet.value = input.value * .1;
  }

 /**reverb methods
  *@see this.reverb
  */

  //reverb getters
  getReverbRoomSize(input) {
    return this.reverb.roomSize.value;
  }

  getReverbDampening(input) {
    return this.reverb.dampening.value;
  }

  getReverbWet() {
    return this.reverb.wet.value;
  }

  //reverb setters
  setReverbRoomSize(input) {
    this.reverb.roomSize.value = input.value * .001;
  }

  setReverbDampening(input) {
    this.reverb.dampening.value = input.value;
  }

  setReverbWet(input) {
    this.reverb.wet.value = input.value * .1;
  }

  /**amp methods
   *@see this.distortion, this.volume
   *
   */

   //amp getters
   getVolume(input) {
     return this.volume.volume.value;
   }

   getDistortion(input) {
     return this.distortion._distortion.value;
   }

   //amp setters
   setVolume(input) {
     this.volume.volume.value = input.value;
   }

   setDistortion(input) {
     this.distortion.distortion = input.value * .1;
   }
}
