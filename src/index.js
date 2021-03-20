import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { weather } from './weather'

function Temp({value , unit}) {
  if (unit === 'celsius' ){
    value = ((value - 32) * (5/9)).toFixed(1)
  }
  return (
    <span>{value}</span>
  )
}

function UnitToggle({onClick, unit}) {
  return (
    <div className="unit-section">  
    <h4>Displaying: {unit}</h4>
    <button className="unit-button" onClick={onClick}>Chang Unit</button>
    </div>
  )
}

function WeatherApp() {
  const [currentCity, setCurrentCity] = useState('New York');
  const [ currentDay, setCurrentDay ] = useState('Monday')
  const [ tempUnit, setTempUnit ] = useState('fahrenheit')

  const changeCity = (city) =>{
    console.log(city.target.value)
    setCurrentCity(city.target.value)
  }

  const changeDay = (day) => {
    console.log(day.target.value)
    setCurrentDay(day.target.value)
  }

  const changeUnit = () => {
    if (tempUnit === 'fahrenheit') {
      setTempUnit('celsius')
    } else {
      setTempUnit('fahrenheit')
    }
  }


  let city = weather.filter(city => city.name === currentCity)

  return (
    <div className="App">

      <UnitToggle unit={tempUnit}onClick={()=> {
        changeUnit()
        console.log(tempUnit)
      }}/>

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
         <p className="current-temp"><Temp value={`${city[0].conditions.feels_like}`} unit={tempUnit}/><span>&#176;</span></p>
         <p>Current Conditions: {city[0].conditions.description}</p>
         <p>Wind Speed: {city[0].wind.speed} mph</p>
         <p>Humidity: {city[0].conditions.humidity}%</p>
       </div>

        <div className="forcast">
         {/* Monday  */}
         <div className="daily-weather">
           <div className="row">
            <h3>Monday</h3>
            <div>
            <p>
              <span className="high"><Temp value={`${city[0].forcast[0].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[0].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
            <span className="high"><Temp value={`${city[0].forcast[1].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[1].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
            <span className="high"><Temp value={`${city[0].forcast[2].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[2].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
            <span className="high"><Temp value={`${city[0].forcast[3].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[3].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
            <span className="high"><Temp value={`${city[0].forcast[4].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[4].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
            <span className="high"><Temp value={`${city[0].forcast[5].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[5].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
            <span className="high"><Temp value={`${city[0].forcast[6].high}`} unit={tempUnit}/><span>&#176;</span></span> / 
              <span className="low"> <Temp value={`${city[0].forcast[6].low}`} unit={tempUnit}/><span>&#176;</span></span>
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
        <p>8am: <Temp value={`${city[0][currentDay].eightAM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>9am: <Temp value={`${city[0][currentDay].nineAM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>10am: <Temp value={`${city[0][currentDay].tenAM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>11am: <Temp value={`${city[0][currentDay].elevenAM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>12pm: <Temp value={`${city[0][currentDay].twelvePM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>1pm: <Temp value={`${city[0][currentDay].onePM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>2pm: <Temp value={`${city[0][currentDay].twoPM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>3pm: <Temp value={`${city[0][currentDay].threePM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>4pm: <Temp value={`${city[0][currentDay].fourPM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>5pm: <Temp value={`${city[0][currentDay].fivePM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>6pm: <Temp value={`${city[0][currentDay].sixPM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>7pm: <Temp value={`${city[0][currentDay].sevenPM}`} unit={tempUnit}/><span>&#176;</span></p>
        <p>8pm: <Temp value={`${city[0][currentDay].eightPM}`} unit={tempUnit}/><span>&#176;</span></p>
       </div>
     </div>
    </div>
  );
}

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root')
);

