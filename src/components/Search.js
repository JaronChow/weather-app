import { useState } from "react";
import { fetchWeather } from "../api/API";

const Search = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    // useEffect(()=>{
    //     try {
    //         getWeather();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])
    async function getWeather(event) {
        const response = await fetchWeather(city);
        setWeather(Object.values(response)); 
        console.log(response, 'weather response');
    }

    const handleInputChange = (e) => {
        setCity(e.target.value);
      };
    
    const searchCity = (e) => {
        getWeather();
        setCity(e.target.value);
    };

    return (
        <>
            <h1> WEATHER </h1>
                <input type='text' placeholder="City" value={city} onChange={handleInputChange}></input>
                <button className='' onClick={searchCity}>
                  Go
                </button>
            <div>
                {weather.coord}
            </div>
        </>
    )

}

export default Search;
 