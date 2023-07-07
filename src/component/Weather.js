import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchWeather, fetchForecast } from '../api/API';

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

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
   
      // {weather && weather.name ? (
      //     <>
      //       <h1>City</h1>
      //       <p>{weather.name}</p>
      //       <h1>Current Weather</h1>
      //       <p>{weather.weather[0].main}</p>
      //       <h1>Wind Speed</h1>
      //       <p>{weather.wind.speed}</p>
      //       <h1>Current Temperature</h1>
      //       <p>{weather.main.temp}</p>
      //     </>
      //   ) : (
      //     <p>default: My Location</p>
      //   )}
      // </MDBContainer>
      

      // <Container fluid style={{ width: "90%", padding: 100, }} 
      //   className="fs-4 mt-3 p-3 mb-1 bg-info text-dark bg-opacity-50 rounded-3">
      //   {forecast && forecast.list ? (
      //     <Row>
      //       <Col>{forecast.list[0].weather[0].main}</Col>
      //       <Col>{forecast.list[7].weather[0].main}</Col>
      //       <Col>{forecast.list[15].weather[0].main}</Col>
      //       <Col>{forecast.list[23].weather[0].main}</Col>
      //       <Col>{forecast.list[31].weather[0].main}</Col>
      //       <Col>{forecast.list[39].weather[0].main}</Col>
      //     </Row>
      //   ) : (
      //     <p>Working on the forecast data right now</p>
      //   )}
      // </Container>


<section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
  <MDBContainer className="h-100%" >
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={searchCity} className="d-flex mb-5 pt-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: "25px 0 0 25px", borderRight: "none" }}
            />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "0 25px 25px 0" }}>
              Search
            </button>
          </div>
        </form>
      </div>
    <MDBRow
      className="justify-content-center align-items-center h-100"
      style={{ color: "#282828" }} 
    >
      <MDBCol md="9" lg="7" xl="5">
        <MDBCard
          className="mb-4 gradient-custom"
          style={{ borderRadius: "25px" }}
        >
          <MDBCardBody className="p-4">
            <div className="d-flex justify-content-between pb-2">

              <div>
                {weather && weather.name ? (
                <>
                  <h1>{weather.name} , {weather.sys.country}</h1>
                  <h2 className="display-2">
                    <p>{weather.weather[0].main}</p>
                    <p>{weather.main.temp} F</p>
                  </h2>
                  <p>Wind Speed</p>
                    <p>{weather.wind.speed}</p>
                </>
              ) : (
                <p className="text-muted mb-0">Current Location</p>
              )}
              </div>
              <div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                  width="150px"
                />
              </div>

            </div>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
          <MDBCardBody className="p-4">
            <div className="d-flex justify-content-around text-center pb-3 pt-2">
              <div className="flex-column">
                <p className="small">
                  <strong>21°C</strong>
                </p>
                <MDBIcon
                  fas
                  icon="sun"
                  size="2x"
                  className="mb-3"
                  style={{ color: "#ddd" }}
                />
                <p className="mb-0">
                  <strong>Mon</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>20°C</strong>
                </p>
                <MDBIcon
                  fas
                  icon="sun"
                  size="2x"
                  className="mb-3"
                  style={{ color: "#ddd" }}
                />
                <p className="mb-0">
                  <strong>Tue</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>16°C</strong>
                </p>
                <MDBIcon
                  fas
                  icon="cloud"
                  size="2x"
                  className="mb-3"
                  style={{ color: "#ddd" }}
                />
                <p className="mb-0">
                  <strong>Wed</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>17°C</strong>
                </p>
                <MDBIcon
                  fas
                  icon="cloud"
                  size="2x"
                  className="mb-3"
                  style={{ color: "#ddd" }}
                />
                <p className="mb-0">
                  <strong>Thu</strong>
                </p>
              </div>
              <div className="flex-column">
                <p className="small">
                  <strong>18°C</strong>
                </p>
                <MDBIcon
                  fas
                  icon="cloud-showers-heavy"
                  size="2x"
                  className="mb-3"
                  style={{ color: "#ddd" }}
                />
                <p className="mb-0">
                  <strong>Fri</strong>
                </p>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
  );
}

export default Weather;