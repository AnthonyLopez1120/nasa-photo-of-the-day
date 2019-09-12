import React, { useState, useEffect } from "react";
import axios from 'axios';
import NASA from "./Components/Nasa";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=liqMJSUCWyl9A5Cng3kCdxm8veal0g2FogdsrF88')
    .then(res =>{
      console.log(res.data);
       setData(res.data)
    })
  },[]);
  console.log(data);
  return (
    <div className="App">
      <h1>NaSa</h1>
      <NASA nasaData={data}/>
    </div>
  );
}

export default App;
