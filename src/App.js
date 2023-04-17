import './App.css';
import React from 'react'
import Header from "./components/header"
import Subscribe from "./components/subscribe"
import Footer from "./components/footer"
import NumberGenerator from "./components/numbergenerator"
import HexadecimalColors from "./components/hexadecimalcolors"
import ChangeCycles from "./components/changecycles"
import Events from './components/events';
import { useState } from "react";


function App() {

  const [theme, setTheme] = useState(false)
  const [themeText, setThemeText] = useState('Light')
  const [textColor, setTextColor] = useState('#000')
  const [backgroundColor, setBackgroundColor] = useState('#fff')

  const changeMode = () => {
    if (!theme) {
      setTheme(true);
      setBackgroundColor('#000')
      setTextColor('#fff')
      setThemeText('Dark')
    } else {
      setTheme(false);
      setBackgroundColor('#fff')
      setTextColor('#000')
      setThemeText('Light')
    }

    data.backgroundColor = backgroundColor;
    data.textColor = textColor;
    data.theme = theme;
    data.themeText = themeText;


  }

  let data = {
    theme,
    themeText,
    textColor,
    backgroundColor,
    changeMode
  }

  return (
    <div className="App">
      <Header data={data} />
      <Subscribe />
      <Footer data={data} />
      <NumberGenerator />
      <HexadecimalColors />
      <ChangeCycles />
      <Events />
    </div>
  );
}

export default App;
