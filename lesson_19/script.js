const weatherApi = document.querySelector("#weather");
const wrapper = document.createElement("div")
wrapper.className = 'img-wrapper';
const img = document.createElement("img");
img.id = "cityPhoto"

const cityBlock = document.createElement("div");
cityBlock.id = "city";
const temperatureBlock = document.createElement("div");
temperatureBlock.id = "temperature";
const windspeedBlock = document.createElement("div");
windspeedBlock.id = "windspeed";
const weatherDiscr = document.createElement("div");
weatherDiscr.id = "weatherDiscr";

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
        weatherDescription = "Mainly clear"
        break; 
    case 2:
        weatherDescription = "Partly cloudy"
        break;
    case 3:
      weatherDescription = "Overcast";
      break;
    case 45:
        weatherDescription = "Fog"
        break; 
    case 48:
      weatherDescription = "Depositing rime fog";
      break;
    case 51:
        weatherDescription = "Drizzle: Light"
        break; 
    case 53:
        weatherDescription = "Drizzle: Moderate"
        break; 
    case 55:
      weatherDescription = "Drizzle: Intensity";
      break;
    case 56:
        weatherDescription = "Mainly clear, partly cloudy" 
        break;
    case 57:
      weatherDescription = "Overcast";
      break;
    case 61:
        weatherDescription = "Rain: slight" 
        break;
    case 63:
        weatherDescription = "Rain: moderate"
        break;
    case 65:
      weatherDescription = "Rain: heavy intensity";
      break;
    case 66:
        weatherDescription = "Freezing Rain: light"
        break; 
    case 67:
      weatherDescription = "Freezing Rain: heavy intensity";
      break;
    case 71:
        weatherDescription = "Snow fall: slight"
        break; 
    case 73:
        weatherDescription = "Snow fall: moderate" 
        break;
    case 75:
      weatherDescription = "Snow fall: heavy intensity";
      break;
    case 77:
      weatherDescription = "Snow grains";
      break;
    case 80:
        weatherDescription = "Rain showers: slight"
        break; 
    case 81:
        weatherDescription = "Rain showers: moderate"
        break; 
    case 82:
      weatherDescription = "Rain showers: violent";
      break;
    case 85:
        weatherDescription = "Snow showers slight"
        break; 
    case 86:
      weatherDescription = "Snow showers heavy";
      break;
    case 95:
      weatherDescription = "Thunderstorm: Slight or moderate";
      break;
    case 96:
        weatherDescription = "Thunderstorm with slight"
        break;
    case 99:
      weatherDescription = "Thunderstorm with  heavy hail";
      break;
    default:
      weatherDescription = "Weather condition not available";
      break;
  }

  const cityPhotoRes = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}&client_id=PA_h-Zbz2NNDwh-IZf8sX77X6tKCqlhqn-UHKcMUtk0`
  );
  const cityPhotoData = await cityPhotoRes.json();
  const imgUrl = cityPhotoData.results[1]?.urls?.regular;

  if (imgUrl) {
    img.src = imgUrl;  
    img.alt = 'City Photo: ${city}';
  }

  wrapper.append(img);
  
  cityBlock.textContent = `${city}`;
  temperatureBlock.textContent = `Current temperature: ${temperature} ${temperatureUnit}`;
  windspeedBlock.textContent = ` Windspeed: ${windspeed} ${windspeedUnit}`;
  weatherDiscr.textContent = `Weather description: ${weatherDescription}`;
  
  weatherApi.append(wrapper, cityBlock, temperatureBlock, windspeedBlock,weatherDiscr);
  

}
myLocation();

const loader = document.getElementById('loader');
  const weatherContainer = document.getElementById('weather');
  
  // Показать лоадер
  function showLoader() {
    loader.classList.toggle('hidden'); // Убираем класс 'hidden', чтобы показать лоадер
    weatherContainer.classList.toggle('hidden'); // Скрываем контейнер с погодой
  }
  
  // Скрыть лоадер
  function hideLoader() {
    loader.classList.toggle('hidden'); // Добавляем класс 'hidden', чтобы скрыть лоадер
    weatherContainer.classList.toggle('hidden'); // Показываем контейнер с погодой
  }
  
  // Имитация загрузки данных
  showLoader(); // Показываем лоадер
  
  setTimeout(() => {
    hideLoader(); // Скрываем лоадер через 3 секунды
  }, 1500);
