import React,{useState} from "react";

import WeatherInfor from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
export default function Weather(props){

     const[weatherData,setweatherData]=useState({ready:false});
     const[city,setCity]=useState(props.defaultcity);
     function handleResponse(response){
        console.log(response.data);
    
        setweatherData({
            ready:true,
            temperature: response.data.temperature.current,
            humidty: response.data.temperature.humidity,
            date:new Date(response.data.time * 1000),
            description:response.data.condition.description,
            icon: response.data.condition.icon,
            wind:response.data.wind.speed,
            city:response.data.city
        });
        
        
    }
    function handleSubmit(event){
    event.preventDefault();
    search(city);
    }

    function search(){  
     const apiKey = "3f5te44f20dc10969a23fb1a9afo8c90";

     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);

    }

    function handleCityChange(event){
        setCity(event.target.value);

    }
    if ( weatherData.ready){ 
    
  return (<div className="Weather">
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
        
        <input type="search" placeholder="Enter a City.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-secondary w-100"/>
        </div>
        </div>
    </form>
    <WeatherInfor infor={weatherData} />
    </div>
   );
   

} else{  
    search();
   
    return "Loading...";
}
}