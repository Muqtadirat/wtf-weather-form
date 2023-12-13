const apiKey = "711e8fcc9cac40e70f4f6ea8ed5a0a74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("city");
const searchButton = document.getElementById("get-weather");
const currentLocation = document.getElementById("location");
const currentTemperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  console.log(location);

//   location.reset();

  if (location) {
    getWeather(location);
  }
});

const getWeather = (location) => {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      currentLocation.textContent = data.name;
      currentTemperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;

      //   console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};
