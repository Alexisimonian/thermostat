describe('Thermostat', function() {
  var thermostat;
  
  beforeEach(function () {
    thermostat = new Thermostat;
  })

  it ('starts at 20 degrees', function () {
    expect(thermostat.temp).toEqual(20);
  })

  it ('can increase temp', function() {
    thermostat.up()
    expect(thermostat.temp).toEqual(21);
  })

  it ('can decrease the temp', function() {
    thermostat.down()
    expect(thermostat.temp).toEqual(19)
  })
 
  it ('has a minimum temperature of 10', function() {
    for(i=0; i<10; i++) {
      thermostat.down();
    }
    expect(function (){thermostat.down()}).toThrowError('Minimum temperature reached!')
  })

  it ('has a maximum temperature of 25 when powersaving is on', function() {
    thermostat.powerSavingModeOn();
    for(i=0; i<5; i++) {
      thermostat.up()
    }
    expect(function() {thermostat.up()}).toThrowError('Maximum temperature reached!')
  })

  it ('has not a maximum temperature of 25 when the powersaving mode is off', function() {
    thermostat.powerSavingModeOff();
    for(i=0; i<6; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(26)
  })

  it ('has a maximum temperature of 32 when powersaving is off', function() {
    thermostat.powerSavingModeOff();
    for(i=0; i<12; i++) {
      thermostat.up();
    }
    expect(function() {thermostat.up()}).toThrowError('Maximum temperature reached!');
  })

  it ('resets the temperature when asked for', function() {
    thermostat.powerSavingModeOff();
    for(i=0; i<11; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(31);
    thermostat.resetTemp();
    expect(thermostat.temp).toEqual(20);
  })

  it ('mesures the energy usage', function() {
    thermostat.powerSavingModeOff();
    for(i=0; i<3; i++) {
      thermostat.down()
    }
    expect(thermostat.energyUsage()).toEqual('low-usage')
    for(i=0; i<8; i++) {
      thermostat.up()
    }
    expect(thermostat.energyUsage()).toEqual('medium-usage')
    thermostat.up()
    expect(thermostat.energyUsage()).toEqual('high-usage')
  })
});