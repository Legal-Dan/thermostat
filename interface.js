document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature;

const updateTemperature = () => {
  document.querySelector('#temperature').innerText = thermostat.temperature;
}

document.getElementById('temperature-up').addEventListener("click", () => {
    thermostat.increaseTemp(1);
    updateTemperature(); 
})

document.querySelector('#temperature-down').addEventListener('click', () => {
  thermostat.decreaseTemp(1);
  updateTemperature();
})

document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
})

fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp;
  });

document.querySelector('#current-city').addEventListener('change', (event) => {
  const city = event.target.value;
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp;
})
  });

document.querySelector('#powersaving-on').addEventListener('click', () => {
  thermostat.powerSaveMode(true);
  document.querySelector('#power-saving-status').innerText = 'on';
  updateTemperature();
})

document.querySelector('#powersaving-off').addEventListener('click', () => {
  thermostat.powerSaveMode(false);
  document.querySelector('#power-saving-status').innerText = 'off';
  updateTemperature();
})

})