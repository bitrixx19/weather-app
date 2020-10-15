let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let calendar = `${day} ${month} ${date}, ${year}`;

let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
} else {
  minutes = minutes + "";
}
let time = `${hour}:${minutes}`;

//innerHTML
let currentDate = document.querySelector("h4");
currentDate.innerHTML = `${calendar}`;

let currentTime = document.querySelector("h5");
currentTime.innerHTML = `${time}`;
//Search Bar - function: user submits input with event listener, input value is read, city HTML changed to new city
function displayWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temp-currently").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let units = "metric";
  let apiKey = "c8332ab2f0bb0374891b6f5c1090be25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);

function searchLocation(position) {
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "08055b42352faa5e0aeff40ba5a95cdb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#button-current-geo");
currentLocation.addEventListener("click", getCurrentLocation);

//🕵️‍♀️Feature #2

//TEMPERATURE TO FARENHEIT

/*
let temperature = document.querySelector("#temp-currently");
temperature.innerHTML = "17º";

function showCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp-currently");
  temperature.innerHTML = "17º";
}

function showFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp-currently");
  let toFarenheit = Math.round(17 * (9 / 5) + 32);
  temperature.innerHTML = `${toFarenheit}º`;
}

//let Celsius = document.querySelector("#celsius-a1");
Celsius.addEventListener("click", showCelsius);

let Fahrenheit = document.querySelector("#farhen-a2");
Fahrenheit.addEventListener("click", showFahrenheit); */
