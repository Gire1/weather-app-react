import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfor(props){
    return(
<div className="WeatherInfor">
<h1>{props.info.city}</h1>
    
        <div className="row">
            <div className="col-4">
        <ul>
        <li>
            <FormattedDate date={props.infor.date }/>
             </li>
        <li className="text-capitalize">{props.infor.description}</li>
    </ul>
    </div>
    <div className="col-4">
        <div className="float-left">
        <WeatherIcon code={props.infor.icon}alt={props.infor.icon}/>
    
     <span className="temperature"> {Math.round(props.infor.WeatherInfortemperature)}</span>
     <span className="unit">℃</span>
    </div>
    </div>
    <div className="col-4">
        <ul>
    
            <li> Humidity:{props.infor.humidity}</li>
            <li>Wind: {props.infor.wind}15km/h</li>
        </ul>
        </div>
     </div>
    </div>
    
    );
    
}