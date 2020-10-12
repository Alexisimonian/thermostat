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
  $('#temperature').text(thermostat.temp + '°C');
  $('#power-saving-status').text(thermostat.powerSavingStatus)
  $('.right').attr('id', thermostat.energyUsage());
  }
  
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp + '°C');
      })
    })
 
});