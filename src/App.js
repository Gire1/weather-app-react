import React from "react";
import Weather from "./Weather";


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultcity="Lisbon"/>
        <footer>
          This project was coded by{""}
          <a href="https://github.com/Gire1/weather-app-react" target="_blank" rel="noreferrer">
            Grace Chifamba
          </a>{" "}
          and is{""}
          <a href="https://github.com/Gire1/weather-app-react" target="_blank" rel="noreferrer">
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
