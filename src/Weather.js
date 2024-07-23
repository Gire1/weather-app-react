import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props){
     const[weatherData,setweatherData]=useState({ready:false});
     function handleResponse(response){
        setweatherData({
                         ready:true,
                         temperature: response.data.main.temp,
                         humidty: response.data.main.humidity,
                         date:"Wednesday 07:08",
                         description:response.data.weather[0].description,
                         iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
                         wind:response.data.wind.speed,
                         city:response.data.name
        });
        
        
    }
    if ( weatherData.ready){ 
    
  return (<div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        
        <input type="search" placeholder="Enter a City.." className="form-control" autoFocus="on"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-secondary w-100"/>
        </div>
        </div>
    </form>
    <h1>{ weatherData.City}</h1>
    
        <div className="row">
            <div className="col-4">
        <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    </div>
    <div className="col-4">
    <img src={weatherData.icon}  alt={weatherData.description}/>
     <span className="temperature"> {Math.round(weatherData.temperature)}</span>
     <span className="unit">℃</span>
    </div>
    <div className="col-4">
        <ul>
    
            <li> Humidity:{weatherData.humidity}</li>
            <li>Wind: {weatherData.wind}15km/h</li>
        </ul>
        </div>
    </div>
    </div>
    
    ) ; 

} else{  
    const apiKey="3f5te44f20dc10969a23fb1a9afo8c90";
    
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaulCity}&key=${apiKey}`;
     axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}