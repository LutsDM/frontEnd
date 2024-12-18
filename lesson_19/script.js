const weatherApi = document.querySelector("#weather");

async function myLocation() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();

  // const latitude = data.latitude;
  // const longitude = data.longitude;
  // const city = data.city;

  const { city, latitude, longitude } = data;

  console.log(latitude, longitude, city);

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();
  
    const { temperature, windspeed, weathercode} = weatherData.current_weather;
    const { temperature:temperatureUnit, windspeed:windspeedUnit} = weatherData.current_weather_units
  
    console.log(temperature, windspeed, weathercode, temperatureUnit, windspeedUnit);
    weatherApi.append (`${city}, Current temperature: ${temperature} ${temperatureUnit}, Windspeed: ${windspeed} ${windspeedUnit}`);
}

myLocation();
