const weatherData = document.getElementById("weatherData");
function getWeatherByLocation(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d102ce6f8a7f8c61a416505fdeb98697`
  )
    .then((res) => res.json())
    .then((respData) => {
      if (respData.cod == 200) {
        addWeatherToPage(respData);
      } else {
        alert("The City Name You Have Entered Not Found. Please Try Again.");
      }
    });
}

function addWeatherToPage(data) {
  const temp = Math.floor(data.main.temp - 273.15);
  const cityName = data.name;
  const weather = document.createElement("div");
  weather.classList.add("weatherData");
  weather.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
  <p>${data.weather[0].main}</p>
  <h2 id="temp">${temp} °C</h2>
  <h2>${cityName}</h2>`;
  weatherData.innerHTML = "";
  weatherData.appendChild(weather);
}

function getValue() {
  const cityName = document.getElementById("cityName").value;
  getWeatherByLocation(cityName);
}
