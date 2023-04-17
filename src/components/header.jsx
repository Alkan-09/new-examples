import logo from "../logo.svg"
import '../App.css';

const Header = (props) => {

  return (
    <header style={{backgroundColor: props.data.backgroundColor}}>
      <h1 >Front End Technologies</h1>
      <img width="200px" src={logo} alt="React" />
      <img width="200px" src={logo} alt="React" />
      <img width="200px" src={logo} alt="React" />
      <img width="200px" src={logo} alt="React" />
    </header>
  )
}

export default Header;