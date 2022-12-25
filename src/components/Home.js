import React, { useState } from "react";
import Setting from "./Setting";
import { Link } from "react-router-dom";
import "./customStyles.css";
export default function Home() {
  const [settings, setSettings] = useState(false);
  const [dates, setDates] = useState({
    startDate: "2020-06-01",
    endDate: "2020-07-01",
  });
  const onChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  return (
    <div className="container d-flex flex-column">
      <div className="container title mt-2" style={{justifyContent : "center"}}>
        <Link to={"/"} className="float-start link">
          <h2  style={{marginLeft : "15rem" , marginRight : "15rem" , color:"steelBlue" , fontSize:"4rem"}} >Analytics Application</h2>
        </Link>
      </div>
      <hr />
      <div className="container d-flex"  >
        <h5>Select Date Range: &nbsp;</h5>
        <input 
          type="date"
          name="startDate"
          id="initial"
          style={{ marginRight: "1rem" , backgroundColor : " Azure "}}
          value={dates.startDate}
          onChange={onChange}
        />
        <input
          type="date"
          name="endDate"
          id="final"
          style={{ marginRight: "1rem"  , backgroundColor : " Azure "}}
          value={dates.endDate}
          onChange={onChange}
        />

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSettings(!settings)}
          style={{ marginLeft: "auto" }}
        >
          Settings
        </button>
      </div>

      {settings ? (
        <Setting
          startDate={dates.startDate}
          endDate={dates.endDate}
          setSettings={setSettings}
        />
      ) : (
        ""
      )}
    </div>
  );
}
