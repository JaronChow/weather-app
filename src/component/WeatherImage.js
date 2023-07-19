import stormImage from '../images/storm.png';
import showerImage from '../images/shower.png';
import rainImage from '../images/rain.png';
import snowImage from '../images/snow.png';
import fogImage from '../images/fog.png';
import sunImage from '../images/sun.png';
import cloudsImage from '../images/clouds.png';

function WeatherImage({ weather }) {

    return (
      <>
        {weather && weather.weather[0].main === 'Thunderstorm' && (
          <img src={stormImage} alt="Thunderstorm" className="img-fluid" style={{ width: '180px', height: '180px' }}/>
        )}

        {weather && weather.weather[0].main === 'Drizzle' && (
          <img src={showerImage} alt="Shower Rain" className="img-fluid" style={{ width: '200px', height: '200px' }}/>
        )}

        {weather && weather.weather[0].main === 'Rain' && (
          <img src={rainImage} alt="Rain" className="img-fluid" style={{ width: '180px', height: '180px' }}/>
        )}

        {weather && weather.weather[0].main === 'Snow' && (
          <img src={snowImage} alt="Snow" className="img-fluid" style={{ width: '180px', height: '180px' }}/>
        )}
        
        {weather && weather.weather[0].main === 'Atmosphere' && (
          <img src={fogImage} alt="Severe Weather" className="img-fluid" style={{ width: '180px', height: '180px' }}/>
        )}

        {weather && weather.weather[0].main === 'Clear' && (
          <img src={sunImage} alt="Clear Sky" className="img-fluid" style={{ width: '180px', height: '180px' }}/>
        )}
  
        {weather && weather.weather[0].main === 'Clouds' && (
          <img src={cloudsImage} alt="Clouds" className="img-fluid" style={{ width: '180px', height: '180px' }}/>
        )}
      </>
    )
}

export default WeatherImage