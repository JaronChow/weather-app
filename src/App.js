import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchForecast } from './api/API';


function App() {
  const [city, setCity] = useState('');
  // const [weather, setWeather] = useState ([]);
  const [forecast, setForecast] = useState ([]);

  // const getWeather = async () => {
  //   const response = await fetchWeather(city);
  //   setWeather(response); 
  //   console.log(response, 'weather response');
  // }

  const getForecast = async () => {
    const response = await fetchForecast(city);
    setForecast(response); 
    console.log(response, 'weather response');
  }
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };


  return (
    <>
      <h1>WEATHER</h1>
      <form onSubmit={getForecast}>
        <input type='text' placeholder="City" value={city} onChange={handleInputChange}></input>
        <button type="submit">
          Go
        </button>
      </form>
      {/* <div>
            <h1>City</h1>
                <p>{weather.name}</p>
            <h1>Current Weather</h1>
                <p>{weather.main.temp}</p>
            <h1>Wind Speed</h1>
                <p>{weather.wind.speed} mph</p>
            <h1>Current Weather</h1>
                <p>{weather.main.temp}</p>    
      </div> */}

      <Container fluid style={{ width: "90%", padding: 100, }} 
        className="mt-3 p-5 mb-2 bg-info text-white bg-opacity-50 rounded-3">
          <div>
            {forecast.list.weather.main}
          </div>
            <Row>
                <Col>Sat</Col>
                <Col>Sun</Col>
                <Col>Mon</Col>
                <Col>Tue</Col>
                <Col>Wed</Col>
                <Col>Thu</Col>
                <Col>Fri</Col>
            </Row>
        </Container>
    </>
  )
}

export default App;