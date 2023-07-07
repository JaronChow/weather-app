const BASE_URL = `https://api.openweathermap.org/data/2.5/`
const apiKey = process.env.REACT_APP_API_KEY ;

console.log(apiKey)
export async function fetchWeather(city){
    const response = await fetch(`${BASE_URL}weather?q=${city}&units=imperial&appid=${apiKey}`, {
      })
      const data = await response.json()
      return data;

}

export async function fetchForecast(city){
  const response = await fetch(`${BASE_URL}forecast?q=${city}&units=imperial&appid=${apiKey}`, {
    })
    const data = await response.json()
    return data
}
