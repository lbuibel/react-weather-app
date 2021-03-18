import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { weather } from './weather'

function WeatherApp() {
  const [currentCity, setCurrentCity] = useState('New York');
  const [ currentDay, setCurrentDay ] = useState('Monday')

  const changeCity = (city) =>{
    console.log(city.target.value)
    setCurrentCity(city.target.value)
  }

  const changeDay = (day) => {
    console.log(day.target.value)
    setCurrentDay(day.target.value)
  }

  let city = weather.filter(city => city.name === currentCity)

  console.log(city[0].Monday.eightAM)

  return (
    <div className="App">
     <div className="weather-container">

       <div>
        <p>Select City</p>
          <select onChange={(city) => changeCity(city)}>
            <option value='New York'>New York</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='London'>London</option>
          </select>
        </div>

       <div className="current-weather">
         <h1>City Name: {city[0].name}</h1>
         <p>Current Conditions: {city[0].conditions.description}</p>
         <p>Feels Like: {city[0].conditions.feels_like}</p>
         <p>Wind Speed: {city[0].wind.speed} mph</p>
         <p>Humidity: {city[0].conditions.humidity} mph</p>
       </div>

        <div className="forcast">
         <div className="daily-weather">
           <h3>Monday</h3>
           <p>High: {city[0].forcast[0].high}</p>
           <p>Low: {city[0].forcast[0].low}</p>
           <p>Conditions: {city[0].forcast[0].conditions}</p>
         </div>

         <div className="daily-weather">
           <h3>Tuesday</h3>
           <p>High: {city[0].forcast[1].high}</p>
           <p>Low: {city[0].forcast[1].low} </p>
           <p>Conditions: {city[0].forcast[1].conditions}</p>
         </div>

         <div className="daily-weather">
           <h3>Wednesday</h3>
           <p>High: {city[0].forcast[2].high}</p>
           <p>Low: {city[0].forcast[2].low} </p>
           <p>Conditions: {city[0].forcast[2].conditions}</p>
         </div>

         <div className="daily-weather">
           <h3>Thursday</h3>
           <p>High: {city[0].forcast[3].high}</p>
           <p>Low: {city[0].forcast[3].low} </p>
           <p>Conditions: {city[0].forcast[3].conditions}</p>

         </div>

         <div className="daily-weather">
           <h3>Friday</h3>
           <p>High: {city[0].forcast[4].high}</p>
           <p>Low: {city[0].forcast[4].low} </p>
           <p>Conditions: {city[0].forcast[4].conditions}</p>
         </div>

         <div className="daily-weather">
           <h3>Saturday</h3>
           <p>High: {city[0].forcast[5].high}</p>
           <p>Low: {city[0].forcast[5].low} </p>
           <p>Conditions: {city[0].forcast[5].conditions}</p>
         </div>

         <div className="daily-weather">
           <h3>Sunday</h3>
           <p>High: {city[0].forcast[6].high}</p>
           <p>Low: {city[0].forcast[6].low} </p>
           <p>Conditions: {city[0].forcast[6].conditions}</p>
         </div>

       </div>
     </div>

     <div className="hour-forcast">
       <h2>Hourly Forcast</h2>
       <select onChange={(day) => changeDay(day)}>
         <option value="Monday">Monday</option>
         <option value="Tuesday">Tuesday</option>
         <option value="Wednesday">Wednesday</option>
         <option value="Thursday">Thursday</option>
         <option value="Friday">Friday</option>
         <option value="Saturday">Saturday</option>
         <option value="Sunday">Sunday</option>
       </select>

       <div className = "hour-report">
        <p>Day: {currentDay}</p>
        <p>8 AM: {city[0][currentDay].eightAM}</p>
        <p>9 AM: {city[0][currentDay].nineAM}</p>
        <p>10 AM: {city[0][currentDay].tenAM}</p>
        <p>11 AM: {city[0][currentDay].elevenAM}</p>
        <p>12 AM: {city[0][currentDay].twelvePM}</p>
        <p>1 PM: {city[0][currentDay].onePM}</p>
        <p>2 PM: {city[0][currentDay].twoPM}</p>
        <p>3 AM: {city[0][currentDay].threePM}</p>
        <p>4 AM: {city[0][currentDay].fourPM}</p>
        <p>5 AM: {city[0][currentDay].fivePM}</p>
        <p>6 AM: {city[0][currentDay].sixPM}</p>
        <p>7 AM: {city[0][currentDay].sevenPM}</p>
        <p>8 AM: {city[0][currentDay].eightPM}</p>

       </div>
     </div>
    </div>
  );
}

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root')
);

