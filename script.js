const inputBox = document.querySelector('.input');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');


async function checkWeather(city) {
    const api_key = "17ac1276268b1b68eb56210c0a2fa742"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}℃`;

    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}km/h`;
    console.log(weather_data);


    switch (weather_data.weather[0].main) {

        case 'Clouds': weather_img.src = "images/cloud.png";
            break;
        case 'Clear': weather_img.src = "images/clear.png";
            break;
        case 'Rain': weather_img.src = "images/rain.png";
            break;
        case 'Mist': weather_img.src = "images/mist.png";
            break;
        case 'Snow': weather_img.src = "images/snow.png";
            break;
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
})
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
})
