import { useState } from 'react';
import CBR from "../assets/CBR-250RR.jpeg"
import R25 from "../assets/YZF-R25.jpeg"
import GSX from "../assets/GSX-250R.jpeg"
import V4 from "../assets/Panigale-V4.jpeg"
import '../App.css';

const ChangeSeason = (props) => {

    return (
        <div className="changeCycles">
            <h1>{props.text}</h1>
        </div>
    )
}

export default ChangeSeason;
