import './App.css';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';

function App() {
  return (
    <div className="App">
      <Search />
      <WeatherCard />
      <ForecastCard />
    </div>
  );
}

export default App;