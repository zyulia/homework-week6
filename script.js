let dt = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[dt.getDay()];
let hours = dt.getHours();
let minutes = dt.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentTime = hours + ":" + minutes;
let currentDayTime = currentDay + " " + currentTime;
document.getElementById("date-time").innerHTML = currentDayTime;

function showTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  let weather = document.querySelector("#weather");
  weather.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}

function showCity(event) {
  event.preventDefault();
  let searchField = document.querySelector("#field");
  let city = searchField.value;
  let key = "b5b3a26b2b84af69bb9f76f3d9b2d652";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(showTemperature);
}

let action = document.querySelector("#button");
action.addEventListener("click", showCity);

function showCurrent(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  let weather = document.querySelector("#weather");
  weather.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}

function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = "b5b3a26b2b84af69bb9f76f3d9b2d652";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  axios.get(url).then(showCurrent);
}
function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let position = document.querySelector("#button-current");
position.addEventListener("click", showPosition);
