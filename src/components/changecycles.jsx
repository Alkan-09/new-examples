import { useState } from 'react';
import CBR from "../assets/CBR-250RR.jpeg"
import R25 from "../assets/YZF-R25.jpeg"
import GSX from "../assets/GSX-250R.jpeg"
import V4 from "../assets/Panigale-V4.jpeg"
import '../App.css';

const ChangeCycles = () => {

    const cycles = [
        {
            name: "HONDA CBR-250RR",
            topSpeed: "174 km/h",
            year: "2016",
            country: "Japan",
            engine: "249.7 cc",
            fuelTankCapacity: "14.5 L",
            image: CBR
        },
        {
            name: "YAMAHA YZF-R25",
            topSpeed: "180 km/h",
            year: "2014",
            country: "Japan",
            engine: "249 cc",
            fuelTankCapacity: "14.3 L",
            image: R25
        },
        {
            name: "SUZUKI GSX-250R",
            topSpeed: "142 km/h",
            year: "2017",
            country: "Japan",
            engine: "248 cc",
            fuelTankCapacity: "15 L",
            image: GSX
        },
        {
            name: "DUCATI Panigale-V4",
            topSpeed: "305 km/h",
            year: "2018",
            country: "Italy",
            engine: "1103 cc",
            fuelTankCapacity: "16 L",
            image: V4
        }
    ];

    const [currentCycle, setCurrentCycle] = useState(cycles[0]);

    const changeCycle = () => {
        const randomIndex = Math.floor(Math.random() * cycles.length);
        setCurrentCycle(cycles[randomIndex]);
    }

    return (
        <div className="changeCycles">
            <div className="NumberGenerator-titles">
                <h1>30 Days of React</h1>
                <h3>Change Cycles Randomly</h3>
            </div>
            <div className="cycleCard">
                <img src={currentCycle.image} alt={currentCycle.name} />
                <div className="cycleInfo">
                    <h3>{currentCycle.name}</h3>
                    <ul>
                        <li>Top Speed: {currentCycle.topSpeed}</li>
                        <li>Year: {currentCycle.year}</li>
                        <li>Country: {currentCycle.country}</li>
                        <li>Engine: {currentCycle.engine}</li>
                        <li>Fuel Tank Capacity: {currentCycle.fuelTankCapacity}</li>
                    </ul>
                </div>
            </div>
            <button onClick={changeCycle}>Change Cycle</button>
        </div>
    )
}

export default ChangeCycles;
