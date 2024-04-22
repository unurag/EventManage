import React, { useEffect, useState } from "react"
import './style.css'
import axios from "axios"
import PlayerTable from "./Components/PlayerTable"

const App = () => {

  const [eventDetails, setEventDetails] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/event").then((res) => {
      setEventDetails(res.data)
    });
  }, []);

  if (!eventDetails) return null;

  return(
    <div className="container">
      <div className="eventname">
        <h2 className="eventname-heading">{eventDetails["eventname"]}</h2>
        <p className="eventname-p">({eventDetails["startdate"]} - {eventDetails["enddate"]})</p>
      </div>
      <PlayerTable gender="Mens" weight="53"/>
      <PlayerTable gender="Womens" weight="63"/>
    </div>
  )
}

export default App