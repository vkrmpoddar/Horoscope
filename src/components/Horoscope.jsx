import React, {useState,useEffect} from "react";
import { getHoroscope } from "../services/api";


const Horoscope = ({ sign, timeframe, submitdata }) => {

const [horoscope, setHoroscope] = useState([]);
    useEffect(() => {

        getHoroscope(sign, timeframe).then(setHoroscope);
    }, [submitdata]);

    return <div>
        <h2>

</h2>
        <p>{horoscope}</p>
    </div>


};

export default Horoscope;