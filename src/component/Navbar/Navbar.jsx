import React from "react";
import './Navbar.css'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="letter">L</h1>

        <h2>
          Lawliet
        </h2>
      </div>

      <ul className="nav-links">
        <li><a href="#footer">CONTACT</a></li>
        <li><a href="#testimonials">TESTIMONIALS</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#terms">TERMS</a></li>
      </ul>

      <div >
        <CiSearch/>
      </div>
    </nav>
  );
};

export default Navbar;
