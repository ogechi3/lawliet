import React from "react";
import circle from "../../assets/Circle Layer.png";
import bag from "../../assets/Bag.png";
import rocket from "../../assets/Rocket.png";
import userArrow from "../../assets/User Arrows.png";
import BG from "../../assets/BG.png"
import "./About.css"
import Count from "../Count/Count";

const About = () => {
  return (
    <div>
      <div className="about-container" id="about">
        <div className="about-heading">
          <h1>Why do we help with legalization?</h1>
          <p>
            We are here for UMKM in Indonesia to carry out the legalization
            process, which is sometimes complicated.
          </p>
        </div>

        <div className="cards">
          {CARDS.map((cards) => (
            <div key={cards.title} className="card-content">
              <img src={cards.image} alt="image" />
              <h1>{cards.title}</h1>
              <p>{cards.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div >
        <Count/>
      </div>
    </div>
  );
};

const CARDS = [
  {
    image: circle,
    title: "Enviromental Law",
    subtitle:
      " Environmental legal issues might occur since the planned business activities are designed",
  },

  {
    image: bag,
    title: "Corporate and Commercial",
    subtitle:
      "We provide a complete range of services for the continuity of your business activities.",
  },

  {
    image: rocket,
    title: "Information and Technology",
    subtitle:
      "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.",
  },

  {
    image: userArrow,
    title: "Other Services",
    subtitle:
      "In dealing with disruptive economic and legal challenge, our firm also provide various legal services.",
  },
];

export default About;
