import React from "react";
import "./Weather.css";
export default function Weather(){
  return (<div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        
        <input type="search" placeholder="Enter a City.." className="form-control"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
    </form>
    <h1>Lisbon</h1>
    <ul>
        <li>Wednesday 07:08</li>
        <li>Mostly cloudy</li>
    </ul>
    <div className="row">
    <div className="col-6">
    <img src="#"alt="Mostlty cloudy" />
    6℃
    </div>
    <div className="col-6">
        <ul>
            <li>
             Precipitation: 15%   
            </li>
            <li> Humidity: 72%</li>
            <li>Wind: 15km/h</li>
        </ul>
    </div>
    </div>
    </div>
    ) ; 
}