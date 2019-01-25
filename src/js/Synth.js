class Synth {
  constructor(oscillator, envelope, filter, distortion, volume, delay, reverb) {
    //construct devices
    this.oscillator = oscillator;
    this.envelope = envelope;
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

    //chain devices
    this.oscillator.chain(
      this.envelope,
      this.filter,
      this.distortion,
      this.volume,
      this.delay,
      this.reverb,
      Tone.Master
    );
  }

  //oscillator methods

  /**
   *power on oscillator
   *@function starts and stops the oscillator/sound source
   *@return none
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

  /**
   *get the current oscillator state
   *@function gets the current oscillator state (whether it's off or on)
   *@return true or false
   */
  getOscStatus() {
    return this.oscState;
  }

  /**
   *get the current oscillator frequency
   *@function gets the current oscillator frequency
   *@return float
   */
  getOscFreq() {
    return this.oscillator.frequency.value;
  }

  /**
   *get the current oscillator waveform
   *@function gets the current oscillator waveform
   *@return string
   */
  getOscWaveform() {
    return this.oscillator.type;
  }

  //oscillator setters

  /**
   *set the oscillator frequency
   *@function sets the oscillator frequency
   *@return none
   */
  setOscFreq(input) {
    this.oscillator.frequency.value = input.value;
  }

  /**
   *set the oscillator waveform
   *@function sets the oscillator waveform
   *@return none
   */
  setWaveform(input) {
    this.oscillator.type = input.value;
  }

 /**envelope methods
  *@see this.filter
  */

  //envelope getters

  /**
   *get the attack value
   *@function gets the current attack value
   *@return float
   */
  getAttack(input) {
    return this.envelope.attack;
  }

  /**
   *get the decay value
   *@function gets the current decay value
   *@return float
   */
  getDecay(input) {
    return this.envelope.decay;
  }

  /**
   *get the sustain value
   *@function gets the current sustain value
   *@return float
   */
  getSustain(input) {
    return this.envelope.sustain;
  }

  /**
   *get the release value
   *@function gets the current release value
   *@return float
   */
  getRelease(input) {
    return this.envelope.release;
  }

  //envelope setters

  /**
   *set the attack value
   *@function sets the attack value
   *@return none
   */
  setAttack(input) {
    this.envelope.attack = input.value;
  }

  /**
   *set the decay value
   *@function sets the decay value
   *@return none
   */
  setDecay(input) {
    this.envelope.decay = input.value;
  }

  /**
   *set the sustain value
   *@function sets the sustain value
   *@return none
   */
  setSustain(input) {
    this.envelope.sustain = input.value;
  }

  /**
   *set the release value
   *@function sets the release value
   *@return none
   */
  setRelease(input) {
    this.envelope.release = input.value;
  }

  /**
   *triggers the envelope to make a sound
   *@function triggers the envelope to make a sound
   *@return none
   */
  triggerEnvelope() {
    this.envelope.triggerAttackRelease(this.envelope.release);
  }

  //filter methods

  /**
   *turns filter on/off, sets the state accordingly
   *@function turns filter on/off
   *@todo: fix connect/disconnect bug
   *@return none
   */
  filterOnOff() {
    if(this.filterState) {
      this.oscillator.disconnect(this.filter);
    } else {
      this.oscillator.connect(this.filter);
    }
    this.filterState = !this.filterState;
  }

  //filter getters

  /**
   *get the current filter state
   *@function returns the current filter state
   *@return true/false
   */
  getFilterState() {
    return this.filterState;
  }

  /**
   *get the current filter type
   *@function returns the current filter type
   *@return string
   */
  getFilterType() {
    return this.filter.type;
  }

  /**
   *get the current filter cutoff frequency
   *@function returns the current filter cutoff frequency
   *@return float
   */
  getCutoffFreq() {
    return this.filter.frequency.value;
  }

  /**
   *get the current filter cutoff Q/Resonance
   *@function returns the current filter cutoff Q/Resonance
   *@return float
   */
  getQ() {
    return this.filter.Q.value;
  }

  //filter setters

  /**
   *sets the filter type
   *@function sets the filter type
   *@return none
   */
  setFilterType(input) {
    this.filter.type = input.value;
  }

  /**
   *sets the filter cutoff frequency
   *@function sets the filter cutoff frequency
   *@return none
   */
  setCutoffFreq(input) {
    this.filter.frequency.value = input.value;
  }

  /**
   *sets the filter Q/Resonance
   *@function sets the filter Q/Resonance
   *@return none
   */
  setQ(input) {
    this.filter.Q.value = input.value;
    this.filter.gain.value = Math.sqrt(input.value); //gain is set in relation to Q
  }

  //delay methods

  //delay getters

  /**
   *get the delay time
   *@function get the delay time
   *@return float
   */
  getDelayTime(input) {
    return this.delay.delayTime.value;
  }

  /**
   *get the delay feedback
   *@function get the delay feedback
   *@return float
   */
  getDelayFeedback(input) {
    return this.delay.feedback.value;
  }

  /**
   *get the delay wet value
   *@function get the delay wet value
   *@return float
   */
  getDelayWet() {
    return this.delay.wet.value;
  }

  //delay setters

  /**
   *set the delay wet value
   *@function set the delay wet value
   *@return float
   */
  setDelayTime(input) {
    this.delay.delayTime.value = input.value * .01;
  }

  /**
   *set the delay feedback value
   *@function set the delay feedback value
   *@return float
   */
  setDelayFeedback(input) {
    this.delay.feedback.value = input.value * .1;
  }

  /**
   *set the delay wet value
   *@function set the delay wet value
   *@return float
   */
  setDelayWet(input) {
    this.delay.wet.value = input.value * .1;
  }

  //reverb methods

  //reverb getters

 /**
  *get reverb room size
  *@function returns current reverb room size
  *@return float
  */
  getReverbRoomSize(input) {
    return this.reverb.roomSize.value;
  }

  /**
   *get reverb dampening
   *@function returns current reverb dampening
   *@return float
   */
  getReverbDampening(input) {
    return this.reverb.dampening.value;
  }

  /**
   *get reverb wet value
   *@function returns current wet value
   *@return float
   */
  getReverbWet() {
    return this.reverb.wet.value;
  }

  //reverb setters

  /**
   *set reverb room size
   *@function sets reverb room size
   */
  setReverbRoomSize(input) {
    this.reverb.roomSize.value = input.value * .001;
  }

  /**
   *set reverb dampening
   *@function sets reverb dampening
   */
  setReverbDampening(input) {
    this.reverb.dampening.value = input.value;
  }

  /**
   *set reverb wet value
   *@function sets wet value
   */
  setReverbWet(input) {
    this.reverb.wet.value = input.value * .1;
  }

   //amp methods

   //amp getters

   /**
    *get volume value
    *@function gets volume value
    */
   getVolume(input) {
     return this.volume.volume.value;
   }

   /**
    *get distortion value
    *@function gets distortion value
    */
   getDistortion(input) {
     return this.distortion._distortion.value;
   }

   //amp setters

   /**
    *sets volume value
    *@function sets volume value
    */
   setVolume(input) {
     this.volume.volume.value = input.value;
   }

   /**
    *sets distortion value
    *@function sets distortion value
    */
   setDistortion(input) {
     this.distortion.distortion = input.value * .1;
   }
}
