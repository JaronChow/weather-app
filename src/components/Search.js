import { useState } from "react";
import { fetchWeather } from "../api/API";

const Search = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);

  const getWeather = async () => {
    const response = await fetchWeather(city);
    setWeather(response); 
    console.log(response, 'weather response');
  }

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const searchCity = (e) => {
    e.preventDefault();
    getWeather();
    setCity('');
  };

  return (
    <>
      <h1>WEATHER</h1>
      <form onSubmit={searchCity}>
        <input type='text' placeholder="City" value={city} onChange={handleInputChange}></input>
        <button type="submit">
          Go
        </button>
      </form>
      <div>
            <h1>City</h1>
                <p>{weather.name}</p>
            <h1>Current Weather</h1>
                <p>{weather.main.temp}</p>
            <h1>Wind Speed</h1>
                <p>{weather.wind.speed} mph</p>
            <h1>Current Weather</h1>
                <p>{weather.main.temp}</p>    
      </div>
    </>
  )
} 

export default Search;
