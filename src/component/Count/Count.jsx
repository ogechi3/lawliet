import React from 'react'
import BG from "../../assets/BG.png"
import "./Count.css"

const Count = () => {
  return (
    <div className="count" style={{ backgroundImage: `url(${BG})` }}>
      <div className="count-heading">
        <h1>Some count that matters</h1>
        <p>Our achievement in the journey depicted in numbers</p>
      </div>
      <div className="numbers">
        <div>
          <h1>30</h1>
          <p>Clients</p>
        </div>
        <div className="thin-lines"></div>
        <div>
          <h1>300+</h1>
          <p>Taken business legalities</p>
        </div>
        <div className="thin-lines"></div>
        <div>
          <h1>8</h1>
          <p>Years of Journey</p>
        </div>
      </div>
    </div>
  );
}

export default Count
