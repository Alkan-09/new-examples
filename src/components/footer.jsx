import logo from "../logo.svg";
import "../App.css";



const Footer = (props) => {

    const User = (user) => {
        return (
            <div>
                <p>
                    {user.firstName} {user.lastName}
                </p>
                <small>Junior Developer, {user.country}</small>
            </div>
        )
    }

    const Skills = (
        <div className="skills">
            <h3 style={{color: props.data.textColor}}>SKILLS</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>C#</li>
                <li>REACT</li>
            </ul>
        </div>
    )

    let currentDate = new Date();
    let seasons = {
        summer: ["May", "June", "July"],
        winter: ["November", "December", "January"],
        spring: ["February", "March", "April"],
        autumn: ["August", "September", "October"]
    };

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let curWeekDay = days[currentDate.getDay()];
    let curDay = currentDate.getDate();
    let curMonth = "";
    for (let season in seasons) {
        if (seasons[season].includes(currentDate.toLocaleString("default", { month: "long" }))) {
            curMonth = season;
        }
    }
    let curYear = currentDate.getFullYear();

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    let h = addZero(currentDate.getHours());
    let m = addZero(currentDate.getMinutes());

    currentDate = curWeekDay+", "+curDay+" "+curMonth+" "+curYear + " " + h + ":" + m;

    console.log(props.data)


    return (
        <footer className="footer" style={{backgroundColor: props.data.backgroundColor}}>
            <div>
                <img width="200px" src={logo} alt="React" />
                <User firstName="Alkan" lastName="Çimen" country="Türkiye" />
                <button className="dark-light-mode-button" onClick={props.data.changeMode}>{props.data.themeText}</button>
                {Skills}
                <h2 className="dateTime">{currentDate}</h2>
            </div>
        </footer>
    )
}

export default Footer;
