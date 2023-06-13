
const API_KEY = `01e45237087f82c738195e937bc138fc`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=`



export async function cityWeather(city, stateCode, countryCode){
    const response = await fetch(`${BASE_URL}${city},${stateCode},${countryCode}&appid=${API_KEY}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(city, stateCode, countryCode)
      })
      const data = await response.json()
      return data
}
