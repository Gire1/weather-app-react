import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    if (props.code==="Clear-sky"){

    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={64}
        animate={true}
      />
    );
    }else{
    return( 
      <ReactAnimatedWeather
        icon="CLEAR_NIGHT"
        color="goldenrod"
        size={64}
        animate={true}
      /> 
    );  
    }
 }   

