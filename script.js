function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
function showTemp(event) {
  event.preventDefault();
  let key = "4at0eb64a44133d38bobabb147b38f4d";
  let city = document.querySelector("#search-input").value;
  let api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(api).then(showCity);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", showTemp);
function showCity(response) {
  let temp = response.data.temperature.current;
  let currentCity = response.data.city;
  let city = document.querySelector("#current-city");
  city.innerHTML = currentCity;
  let currentTemp = document.querySelector(".current-temperature-value");
  currentTemp.innerHTML = temp;
}
