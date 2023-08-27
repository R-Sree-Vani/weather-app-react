import React from "react";
import './displayweather.css';


function DisplayWeather(props){
    const {data} = props;

const iconurl = "https://openweathermap.org/img/wn/" + `${data.code !== 404 ? data.weather[0].icon : null}` + ".png"
    return( <div className="displayweather">
        <div className="maincard">
            <span className="cardtitle">
                {data.name}, {data.sys.country}. Weather
            </span>
            <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
            </span>
            <h1>
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
            </h1>
            <span className="weather-main">
                {data.weather[0].main}
            </span>
            <img src= {iconurl} className="weather-icon" alt=""/>
            <span className="weather-description">
                {data.weather[0].description}
            </span><br/>
            <div className="weatherdetails">
            <div className="section1">
            Max-{Math.floor(data.main.temp_max - 273.15)}
            <sup>o</sup>
            </div>
            <div className="section1">
            Min-{Math.floor(data.main.temp_min - 273.15)}
            <sup>o</sup>
            </div>
        </div>
        </div>
        

    </div>
    );
    
}

export default DisplayWeather;