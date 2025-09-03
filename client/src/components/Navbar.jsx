// src/components/Nav.js
// import React, { useState } from 'react';
// import './Nav.css';
import { NavLink } from "react-router-dom";


const Nav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-10"> 
          <img src="logo.png" className="h-14"  alt="Company Logo"/>
        </div>
      </NavLink>

      {/* <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      

      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button> */}



      {/* <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> */}
    </nav>
    </div>
  );
};

export default Nav;
