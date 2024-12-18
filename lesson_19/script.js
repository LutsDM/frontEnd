const weatherApi = document.querySelector("#weather");

async function myLocation() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();

  // const latitude = data.latitude;
  // const longitude = data.longitude;
  // const city = data.city;

  const { city, latitude, longitude } = data;

  console.log(latitude, longitude, city);

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const weatherData = await weatherRes.json();

  const { temperature, windspeed, weathercode } = weatherData.current_weather;
  const { temperature: temperatureUnit, windspeed: windspeedUnit } =
    weatherData.current_weather_units;

  console.log(temperature, windspeed, temperatureUnit, windspeedUnit, weathercode);

  let weatherDescription = "";
  switch (weathercode) {
    case 0:
      weatherDescription = "Clear sky";
      break;
    case 1:
    case 2:
    case 3:
      weatherDescription = "Mainly clear, partly cloudy, and overcast";
      break;
    case 45:
    case 48:
      weatherDescription = "Fog and depositing rime fog";
      break;
    case 51:
    case 53:
    case 55:
      weatherDescription = "Drizzle: Light, moderate, and dense intensity";
      break;
    case 56:
    case 57:
      weatherDescription = "Mainly clear, partly cloudy, and overcast";
      break;
    case 61:
    case 63:
    case 65:
      weatherDescription = "Rain: Slight, moderate and heavy intensity";
      break;
    case 66:
    case 67:
      weatherDescription = "Freezing Rain: Light and heavy intensity";
      break;
    case 71:
    case 73:
    case 75:
      weatherDescription = "Snow fall: Slight, moderate, and heavy intensity";
      break;
    case 77:
      weatherDescription = "Snow grains";
      break;
    case 80:
    case 81:
    case 82:
      weatherDescription = "Rain showers: Slight, moderate, and violent";
      break;
    case 85:
    case 86:
      weatherDescription = "Snow showers slight and heavy";
      break;
    case 95:
      weatherDescription = "Thunderstorm: Slight or moderate";
      break;
    case 96:
    case 99:
      weatherDescription = "Thunderstorm with slight and heavy hail";
      break;
    default:
      weatherDescription = "Weather condition not available";
      break;
  }
  weatherApi.append(
    `${city}, Current temperature: ${temperature} ${temperatureUnit}, Windspeed: ${windspeed} ${windspeedUnit}, Weather: ${weatherDescription} `
  );
}
myLocation();
