import React from "react";
import Weather from "./Weather";


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{""}
          <a href="https://earnest-haupia-0d9b3d.netlify.app/" target="_blank">
            Grace Chifamba
          </a>{" "}
          {""}and is{""}
          <a href="#" target="_blank">
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
