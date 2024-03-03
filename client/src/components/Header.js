import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/project">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div class="bar"><i class="fas fa-list"></i></div>
      </div>
      <span className="navlogo"><i class="frontlogo" ><img src="./images/alamMask.png" alt="logo"></img></i> Alam</span>
    </div>
  );
};

export default Header;