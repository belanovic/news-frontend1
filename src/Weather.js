import React, {useState, useEffect} from 'react';
import {getWeather} from './getNews';


export default function Weather() {

    const [city, setCity] = useState('Belgrade');
    const [weather, setWeather] = useState('');


    useEffect(() => {
        async function f() {
            const weatherMsg = await getWeather(city);
            if(weatherMsg == null) return
            if(weatherMsg.isSuccess) {
                setWeather(weatherMsg.weatherData);
            } else {
                setWeather('');
            }  
        }
        f()
          
    }, [city])


    useEffect(() => {
            console.log(weather);
    }, [weather])

   
    return (
        <div className='weather'>

            <select className='city' value = {city} onChange={(e) => setCity(e.target.value)}>
                <option value = 'Belgrade'>Beograd</option>
                <option value = 'Novi Sad'>Novi Sad</option>
                <option value = 'Niš'>Niš</option>
            </select>
            <div className='weather-data'>
                <div className='temp'>{weather && weather.current && weather.current.temp_c && weather.current.temp_c}</div>
               {/*  <div className='temp'>{weather.current.condition.text && weather.current.condition.text}</div> */}
                <img className='icon' src={`https://${weather && weather.current && weather.current.condition && weather.current.condition.icon && weather.current.condition.icon}`}></img>

                {/* <div className='temp'>13 
                    <sup> 0<sub>C</sub></sup>
                </div>
                <img className='icon' src={`https://cdn.weatherapi.com/weather/64x64/day/113.png`}></img> */}
            </div>
        </div>
    )
}