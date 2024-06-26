import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {getAuthenticatedUser} from '../../../Helper/Storage'

const sabah = require('../../../images/default.png');

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = getAuthenticatedUser();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <h1 className="web-header">orthopedista</h1>
      <div className="menu" onClick={handleMenuClick}>
        <FiMenu />   
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to='/patient/homepage'>Home</Link>
        </li>
        <li>
          <NavLink to="/patient/uploadXRay">upload X-ray</NavLink>
        </li>
        <li>
          <NavLink to="/patient/bigForm">online diagnosis</NavLink>
        </li>
        {
          auth ?
            <li>
              <NavLink to='/patientProfile'>
                {isSmallScreen ? (
                  <span>Profile</span>
                ) : (
                  <Avatar alt="Sabah hassan" src={sabah} />
                )}
              </NavLink>
            </li>
            :
            <>
              <li>
                <NavLink to="/register">signup</NavLink>
              </li>
              <li>
                <NavLink to="/login">login</NavLink>
              </li>
            </>
        }

        
      </ul>
    </nav>
  );
};

export default Navbar;