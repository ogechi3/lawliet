import React from "react";
import { IoCall } from "react-icons/io5";
import man from "../../assets/man.png"
import "./Terms.css"

const Terms = () => {
  return (
    <div className="terms" id="terms">
      <div>
        <h1>Complex Questions?</h1>
        <p>
          Request for a personalized budget for your legal problem. We will send
          you a coupe options in 24 hours. You can have free consult , if a our
          first customer
        </p>

        <button>
          <IoCall />
          call now
        </button>
      </div>

      <div className="terms-image">
        <img src={man} alt="man" />
      </div>
    </div>
  );
};

export default Terms;
