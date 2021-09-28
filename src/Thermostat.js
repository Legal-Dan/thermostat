class Thermostat {
  constructor (temperature, minimumTemp, maximumTemp, powerSave) {
      this.temperature = 20;
      this.minimumTemp = 10;
      this.maximumTemp = 25;
  }

  increaseTemp(increase) {
    this.temperature += increase;
  }

  decreaseTemp(decrease) {
    this.temperature -= decrease;
  }

  powerSaveMode(value) {
    if (value) {
      this.maximumTemp = 25;
    }
    else {
      this.maximumTemp = 32;
    }
  }

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if ( this.temperature < 18){
      return "low-usage";
    }
    else if ( this.temperature <= 25){
      return ("medium-usage");
    }
    else {
      return "high-usage";
    }

  }
};