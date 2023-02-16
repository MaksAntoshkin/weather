const weatherBlock = document.querySelector(".weather");

async function loadWeather() {
    const server = "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data) {

    console.log(data)

    const temp = Math.round(data.main.temp)
    const pressure = Math.round(data.main.pressure)
    const description = Math.round(data.main.temp)
    const humidity = data.main.humidity
    const speed = data.wind.speed
    const deg = Math.round(data.main.deg)
    const icon = data.weather[0].icon
    const status = data.weather[0].main
    const feelsLike = Math.round(data.main.feels_like)

    const teamplate = `<div class="weather_head">
                <div class="weather_main">
                    <div class="city">Kyiv</div>
                    <div class="status">${status}</div>
                </div>
                <div class="weather_icon">
                    <img src="http://openweathermap.org/img/w/${icon}.png" alt="${status}">
                </div>
            </div>
            <div class="weather_body">
                <div class="temp_info">
                    <div class="weather_temp">${temp}</div>
                    <div class="feels_like">Feels like: ${feelsLike}</div>
                </div>
                <div class="info">
                    <div class="pressure">
                        Pressure: ${pressure} mmHg
                    </div>
                    <div class="humidity">
                        Humidity: ${humidity} %
                    </div>
                    <div class="wind">
                        Wind Speed: ${speed} KPH
                    </div>
                </div>
            </div>`;

    weatherBlock.innerHTML = teamplate;
}

if (weatherBlock) {
    loadWeather();
}