import React, { useState, useEffect } from "react";
import "../App.css";
import Horoscope from "./Horoscope";
import { getSigns } from "../services/api";

function Horo() {
  const [signs, setSigns] = useState([]);
  const [selectedSign, setSelectedsign] = useState([]);
  const [selectedDay, setSelectedDay] = useState();
  const [submitIt, setSubmitIt] = useState(false);
    const [yourName, setYourName] = useState();
    const [myName, setmyName] = useState();
    const [myDay, setmyDay] = useState();
    const [mySign, setmySign] = useState();

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

    useEffect((event) => {
        setmyName(yourName)
        setmyDay(selectedDay)
        setmySign(selectedSign)
    }, [submitIt]);

  function yourSign(val) {
    setSelectedsign(val.target.value);
  }

  function setDay(val) {
    setSelectedDay(val.target.value);
  }

  function submitForm(val) {
    setSubmitIt(!submitIt);
  }

  function setName(val) {
    setYourName(val.target.value);
  }

  return (
    <div className="customDiv">
      <input type="text" onChange={setName} />
      <br />
      <input type="email" />
      <br />
      <select onChange={yourSign}>
        <option>{signs[0]}</option>
        <option>{signs[1]}</option>
        <option>{signs[2]}</option>
        <option>{signs[3]}</option>
        <option>{signs[4]}</option>
        <option>{signs[9]}</option>
        <option>{signs[5]}</option>
        <option>{signs[6]}</option>
        <option>{signs[7]}</option>
        <option>{signs[8]}</option>
        <option>{signs[10]}</option>
        <option>{signs[11]}</option>
      </select>
      <br />
      <select onChange={setDay}>
        <option>today</option>
        <option>tomorrow</option>
        <option>yesterday</option>
      </select>
      <br />

      <button onClick={submitForm}>Submit</button>

      <hr />

      <div>
        {myName} {myDay} {mySign}
      </div>

      <Horoscope
        sign={selectedSign}
        timeframe={selectedDay}
        submitdata={submitIt}
      />
    </div>
  );
}

export default Horo;
