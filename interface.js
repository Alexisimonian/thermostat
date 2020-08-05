$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })
  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.powerSavingModeOn();
    updateTemperature();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.powerSavingModeOff();
    updateTemperature();
  })

  function updateTemperature() {
  $('#temperature').text(thermostat.temp);
  }
});