import React, { useState } from "react";
import Logo from "../assets/logo 3.svg";
import { Link } from "react-router-dom";
import "../style/Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const user = JSON.parse(localStorage.getItem("user"));

  
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); 
  };

  return (
    <div className="navbar">
      <div className="rightside" style={{ textAlign: "center" }}>
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: "200px", height: "90px" }} className="mn" />
        </Link>
      </div>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`hiddenLinks ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us </Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>

        {user && (
          <div style={{  alignItems: "center", gap: "10px", marginTop: "10px" }}>
              
            <button className="logout-btn" onClick={handleLogout} >Logout</button>
            <p><b>{user.displayName}</b></p>
            
          </div>
          
          
        )}
        
      </div>
    </div>
  );
}

export default Nav;
