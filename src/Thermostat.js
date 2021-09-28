class Thermostat {
  constructor (temperature) {
      this.temperature = 20;
  }

  increaseTemp(increase) {
    this.temperature += increase
  }

  decreaseTemp(decrease) {
    this.temperature -= decrease
  }
};