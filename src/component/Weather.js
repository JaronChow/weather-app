import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchWeather, fetchForecast } from '../api/API';


function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState ([]);
  const [forecast, setForecast] = useState ([]);

  const getWeather = async () => {
    const response = await fetchWeather(city);
    setWeather(response);
    console.log('weather response', response);
  };

  const getForecast = async () => {
    const response = await fetchForecast(city);
    setForecast(response);
    console.log('forecast response', response);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const searchCity = (e) => {
    e.preventDefault();
    getWeather();
    getForecast();
    setCity('');
  };

  return (
    <>
      <h1>WEATHER</h1>
      <form onSubmit={searchCity}>
        <input type='text' placeholder="City" value={city} onChange={handleInputChange} />
        <button type="submit">
          Go
        </button>
      </form>
      <Container fluid style={{ width: "90%", padding: 100 }} 
        className="fs-4 mt-3 p-3 mb-1 bg-info text-dark bg-opacity-50 rounded-3">
        {/* <h1>City</h1>
        {weather && weather.name && <p>{weather.name}</p>}
        <h1>Current Weather</h1>
        {weather && weather.weather[0].main && <p>{weather.weather[0].main}</p>}
        <h1>Wind Speed</h1>
        {weather && weather.wind.speed && <p>{weather.wind.speed}</p>}
        <h1>Current Temperature</h1>
        {weather && weather.main.temp && <p>{weather.main.temp}</p>} */}
      </Container>

      <Container fluid style={{ width: "90%", padding: 100, }} 
        className="fs-4 mt-3 p-3 mb-1 bg-info text-dark bg-opacity-50 rounded-3">
            <Row>
                {/* <Col>{forecast.list[0].weather[0].main}</Col>
                <Col>{forecast.list[7].weather[0].main}</Col>
                <Col>{forecast.list[15].weather[0].main}</Col>
                <Col>{forecast.list[23].weather[0].main}</Col>
                <Col>{forecast.list[31].weather[0].main}</Col>
                <Col>{forecast.list[39].weather[0].main}</Col> */}
            </Row>
        </Container>
    </>
  )
}

export default Weather;