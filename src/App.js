import './App.css';
import React, { useState, useEffect } from 'react'
import Events from "./components/events"
let number = 1;

function App() {

  const seasons = [
    {
      name: "Yaz",
      backgroundColor: "#F4D03F",
    },
    {
      name: "İlkbahar",
      backgroundColor: "#1ABC9C",
    },
    {
      name: "Kış",
      backgroundColor: "#F0F3F4",

    },
    {
      name: "Sonbahar",
      backgroundColor: "#D98880",
    }
  ];

  const [name, setName] = useState(seasons[0].name)
  const [backgroundColor, setBackgroundColor] = useState(seasons[0].backgroundColor)

  const [x, setX] = useState(150)
  const [y, setY] = useState(500)

  const changeSeason = () => {

      if(number === 5) {
        number = 1
      }

      setName(seasons[number-1].name)
      setBackgroundColor(seasons[number-1].backgroundColor)
      number++;

  }

  useEffect(() => {
    setInterval(changeSeason, 3000);
  },[]);

  const mouseMove = (e) => {
    setX(Math.floor(Math.random() * 1200))
    setY(Math.floor(Math.random() * 900))
  }

  return (
    <div className="App" style={{position:"relative" ,backgroundColor:backgroundColor}}>
      <div style={{ position: "absolute", width: '300px', height: '60px', backgroundColor: 'blue', left: x, top: y}} onMouseMove={mouseMove}>
        <h1>30 Days Of React</h1>
      </div>
    </div>
  );
}

export default App;
