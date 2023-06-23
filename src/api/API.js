const API_KEY = `c072ebee80b5be5742303123edcbe14e`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=`



export async function fetchWeather(city){
    const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`, {
      })
      const data = await response.json()
      return data
}
