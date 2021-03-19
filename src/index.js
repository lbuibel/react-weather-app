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

       <div className="city-select">
        <h3>Select City</h3>
          <select onChange={(city) => changeCity(city)}>
            <option value='New York'>New York</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='London'>London</option>
          </select>
        </div>

       <div className="current-weather">
         <h1>{city[0].name}</h1>
         <p className="current-temp">{city[0].conditions.feels_like}<span>&#176;</span></p>
         <p>Current Conditions: {city[0].conditions.description}</p>
         <p>Wind Speed: {city[0].wind.speed} mph</p>
         <p>Humidity: {city[0].conditions.humidity} mph</p>
       </div>

        <div className="forcast">
         {/* Monday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Monday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[0].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[0].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
           <p>Conditions: {city[0].forcast[0].conditions}</p>
         </div>

         {/* Tuesday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Tuesday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[1].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[1].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
           <p>Conditions: {city[0].forcast[1].conditions}</p>
         </div>

         {/* Wednesday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Wednesday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[2].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[2].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
           <p>Conditions: {city[0].forcast[2].conditions}</p>
         </div>

         {/* Thursday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Thursday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[3].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[3].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
           <p>Conditions: {city[0].forcast[3].conditions}</p>
         </div>

         {/* Friday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Friday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[4].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[4].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
           <p>Conditions: {city[0].forcast[4].conditions}</p>
         </div>

         {/* Saturday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Saturday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[5].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[5].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
           <p>Conditions: {city[0].forcast[4].conditions}</p>
         </div>

         {/* Sunday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Sunday</h3>
            <div>
            <p>
              <span className="high">{city[0].forcast[6].high}<span>&#176;</span></span> / 
              <span className="low"> {city[0].forcast[6].low}<span>&#176;</span></span>
            </p>
            </div>
           </div>
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
        <h5>Day: {currentDay}</h5>
        <p>8am: {city[0][currentDay].eightAM}<span>&#176;</span></p>
        <p>9am: {city[0][currentDay].nineAM}<span>&#176;</span></p>
        <p>10am: {city[0][currentDay].tenAM}<span>&#176;</span></p>
        <p>11am: {city[0][currentDay].elevenAM}<span>&#176;</span></p>
        <p>12pm: {city[0][currentDay].twelvePM}<span>&#176;</span></p>
        <p>1pm: {city[0][currentDay].onePM}<span>&#176;</span></p>
        <p>2pm: {city[0][currentDay].twoPM}<span>&#176;</span></p>
        <p>3pm: {city[0][currentDay].threePM}<span>&#176;</span></p>
        <p>4pm: {city[0][currentDay].fourPM}<span>&#176;</span></p>
        <p>5pm: {city[0][currentDay].fivePM}<span>&#176;</span></p>
        <p>6pm: {city[0][currentDay].sixPM}<span>&#176;</span></p>
        <p>7pm: {city[0][currentDay].sevenPM}<span>&#176;</span></p>
        <p>8pm: {city[0][currentDay].eightPM}<span>&#176;</span></p>

       </div>
     </div>
    </div>
  );
}

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root')
);

