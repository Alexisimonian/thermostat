class Thermostat {
  constructor () {
    this.temp = 20;
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

  powerSavingMode(button) {
    if (button === 'off') {
      this.MAXIMUM_TEMP = 32;
    } else if (button === 'on') {
      this.MAXIMUM_TEMP = 25;
    }
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