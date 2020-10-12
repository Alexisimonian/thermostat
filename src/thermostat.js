class Thermostat {
  constructor () {
    this.temp = 20;
    this.powerSavingStatus = "on";
    this.MINIMUM_TEMP = 10;
    this.MAXIMUM_TEMP = 25;
  }

  up() {
    if(this.temp >= this.MAXIMUM_TEMP) {
      throw new Error('Maximum temperature reached!');
    }
    this.temp += 1;
  }

  down() {
    if (this.temp <= this.MINIMUM_TEMP) {
      throw new Error('Minimum temperature reached!');
    } 
    this.temp -= 1;
  }

  powerSavingModeOn() {
    this.MAXIMUM_TEMP = 25;
    this.powerSavingStatus = "on"
  }

  powerSavingModeOff() {
    this.MAXIMUM_TEMP = 32;
    this.powerSavingStatus = "off"
  }

  resetTemp() {
    this.temp = 20;
  }

  energyUsage() {
    if (this.temp < 18) {
      return 'low-usage'
    } else if (this.temp > 25) {
      return 'high-usage'
    }
    return 'medium-usage'
  }
};