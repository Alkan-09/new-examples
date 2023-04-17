import './App.css';
import React, { useState, useEffect } from 'react'
import ChangeSeason from "./components/changeSeason"
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

  return (
    <div className="App" style={{backgroundColor:backgroundColor}}>
      <ChangeSeason text={name} />
    </div>
  );
}

export default App;
