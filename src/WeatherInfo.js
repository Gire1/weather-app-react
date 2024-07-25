import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfor(props){
    return(
<div className="WeatherInfor">
<h1>{props.data.city}</h1>
    
        <div className="row">
            <div className="col-4">
        <ul>
        <li>
            <FormattedDate date={props.data.date }/>
             </li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    </div>
    <div className="col-4">
    <img src={props.data.icon}  alt={props.data.description}/>
     <span className="temperature"> {Math.round(props.data.temperature)}</span>
     <span className="unit">℃</span>
    </div>
    <div className="col-4">
        <ul>
    
            <li> Humidity:{props.data.humidity}</li>
            <li>Wind: {props.data.wind}15km/h</li>
        </ul>
        </div>
     </div>
    </div>
    
    );
    
}