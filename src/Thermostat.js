class Thermostat {
  constructor (temperature, minimumTemp, maximumTemp, powerSave) {
      this.temperature = 20;
      this.minimumTemp = 10;
      this.maximumTemp = 25;
  }

  increaseTemp(increase) {
    this.temperature += increase
  }

  decreaseTemp(decrease) {
    this.temperature -= decrease
  }

  powerSaveMode(value) {
    if (value) {
      this.maximumTemp = 25;
    }
    else {
      this.maximumTemp = 32;
    }

  }

};