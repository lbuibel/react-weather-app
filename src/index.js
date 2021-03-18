import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { weather } from './weather'

function GetCity({onChange}){
  return (
    <div>
      <p>Select City</p>

      <select onChange={onChange}>
        <option>New York</option>
        <option>Los Angeles</option>
        <option>London</option>
      </select>

    </div>
  )
}

  
function WeatherApp({value}) {

  let city = weather.filter(city => city.name === value)
  // console.log(city[0].forcast)

  return (
    <div className="App">
     <div className="weather-container">

       <GetCity onChange={() => console.log(value)} />

       <div className="current-weather">
         <h1>City Name: {city[0].name}</h1>
         <p>Current Conditions: {city[0].conditions.description}</p>
         <p>Feels Like: {city[0].conditions.feels_like}</p>
         <p>Wind Speed: {city[0].wind.speed} mph</p>
         <p>Humidity: {city[0].conditions.humidity} mph</p>
       </div>
        <div className="forcast">
         <div className="daily-weather">
           <p>Monday</p>
           <p>High: {city[0].forcast[0].high}</p>
           <p>Low: {city[0].forcast[0].low}</p>
           <p>Conditions: {city[0].forcast[0].conditions}</p>
         </div>

         <div className="daily-weather">
           <p>Tuesday</p>
           <p>High: {city[0].forcast[1].high}</p>
           <p>Low: {city[0].forcast[1].low} </p>
           <p>Conditions: {city[0].forcast[1].conditions}</p>
         </div>

         <div className="daily-weather">
           <p>Wednesday</p>
           <p>High: {city[0].forcast[2].high}</p>
           <p>Low: {city[0].forcast[2].low} </p>
           <p>Conditions: {city[0].forcast[2].conditions}</p>
         </div>

         <div className="daily-weather">
           <p>Thursday</p>
           <p>High: {city[0].forcast[3].high}</p>
           <p>Low: {city[0].forcast[3].low} </p>
           <p>Conditions: {city[0].forcast[3].conditions}</p>

         </div>

         <div className="daily-weather">
           <p>Friday</p>
           <p>High: {city[0].forcast[4].high}</p>
           <p>Low: {city[0].forcast[4].low} </p>
           <p>Conditions: {city[0].forcast[4].conditions}</p>
         </div>

         <div className="daily-weather">
           <p>Saturday</p>
           <p>High: {city[0].forcast[5].high}</p>
           <p>Low: {city[0].forcast[5].low} </p>
           <p>Conditions: {city[0].forcast[5].conditions}</p>
         </div>

         <div className="daily-weather">
           <p>Sunday</p>
           <p>High: {city[0].forcast[6].high}</p>
           <p>Low: {city[0].forcast[6].low} </p>
           <p>Conditions: {city[0].forcast[6].conditions}</p>
         </div>

       </div>
     </div>
    </div>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <WeatherApp value="New York" />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
