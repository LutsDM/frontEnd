const weatherApi = document.querySelector('#weather') 

async function weatherForecast() {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await res.json();
   
    // const latitude = data.latitude;
    // const longitude = data.longitude;
    // const city = data.city;

    const {city, latitude, longitude} = data 
   
    console.log(latitude, longitude, city)
}

weatherForecast()