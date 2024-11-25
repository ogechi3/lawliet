import React from "react";
import lawyer from "../../assets/lawyer.png";
import "./Hero.css";
import airbnb from "../../assets/airbnb.png";
import google from "../../assets/Google Logo.png";
import hubspot from "../../assets/Hubspot Logo.png";
import microsoft from "../../assets/Microsoft Logo.png";
import background from "../../assets/Group 492.png";

const Hero = () => {
  return (
    <div
      className="Hero-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="Hero-content">
        <div className="left-div">
          <div className="Hero-title">
            <p>
              <span className="new">New </span>

              <span className="subtitle">
                Stay connected to the upcoming & Recent jobs
              </span>
            </p>
          </div>

          <h1 className="heading">Your Solution Legal Consultacy</h1>
          <p className="subject">
            We are here to help you take care of your legality
            <br />
            with the best service especially for you.
          </p>

          <button>GET STARTED</button>

          <p className="trusted">Trusted by 10+ companies in indonesia</p>

          <div className="companies">
            <img src={airbnb} alt="airbnb-logo" />
            <img src={hubspot} alt="Hubspot-logo" />
            <img src={microsoft} alt="microsoft-logo" />
            <img src={google} alt="google-logo" />
          </div>
          <button className="lawyer">
            Tiara Andini
            <p className="image-title">-Lawyer</p>
          </button>
        </div>
        <div className="right-div">
          <img src={lawyer} alt="lawyer-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
