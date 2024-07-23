import React from "react";
import "./Weather.css";
export default function Weather(){
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
    <h1>Southafrica</h1>
    
        <div className="row">
            <div className="col-4">
        <ul>
        <li>Wednesday 07:08</li>
        <li>Mostly cloudy</li>
    </ul>
    </div>
    <div className="col-4">
    <img src="#"  alt=""/>
     <span className="temperature"> 6</span>
     <span className="unit">℃</span>
    </div>
    <div className="col-4">
        <ul>
            <li> Precipitation: 15% </li>
            <li> Humidity: 72%</li>
            <li>Wind: 15km/h</li>
        </ul>
        </div>
    </div>
    </div>
    
    ) ; 
}