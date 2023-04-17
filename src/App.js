import './App.css';
import React, { useState } from 'react'
import ChangeSeason from "./components/changeSeason"
let number = 1;

async function App() {

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

  const [season, setSeason] = useState(seasons[0])

  function changeSeason(){

      if(number === 5) {
        number = 1
      }

      setSeason(seasons[number-1])

      console.log(season)

      number++;

  }

  changeSeason();

  return (
    <div className="App" style={{backgroundColor:season.backgroundColor}}>
      <ChangeSeason text={season.name} />
    </div>
  );
}

export default App;
