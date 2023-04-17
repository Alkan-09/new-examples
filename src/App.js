import './App.css';
import React from 'react'
import Header from "./components/header"
import Subscribe from "./components/subscribe"
import Footer from "./components/footer"
import NumberGenerator from "./components/numbergenerator"
import HexadecimalColors from "./components/hexadecimalcolors"
import ChangeCycles from "./components/changecycles"
import Events from './components/events';


function App() {
  return (
    <div className="App">
      <Header/>
      <Subscribe/>
      <Footer/>
      <NumberGenerator/>
      <HexadecimalColors/>
      <ChangeCycles/>
      <Events/>
    </div>
  );
}

export default App;
