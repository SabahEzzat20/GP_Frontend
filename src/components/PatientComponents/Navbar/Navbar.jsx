import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import axios from "axios";
import {getAuthenticatedUser} from '../../../Helper/Storage'

const sabah = require('../../../images/saboha.jpeg');

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  
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

  const [patientId, getPatientId] = useState(0);
  useEffect(() => {
      axios
      .get(`http://localhost:8070/user/getUserByToken/${refreshToken}`)
      .then((response) => {
          getPatientId(response.data.id);
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);

  return (
    <nav>
      <h1 className="web-header">orthopedista</h1>
      <div className="menu" >
        <FiMenu />   
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to='/patient/homepage'>Home</Link>
        </li>
        <li>
          <NavLink to="/patient/uploadXRay">Upload X-ray</NavLink>
        </li>
        {
          userToken ?
            <div>
            <NavLink to='/patientProfile'>
              {isSmallScreen ? (
                <span>Profile</span>
              ) : (
                <Avatar alt="Sabah hassan" src={sabah} />
              )}
          </NavLink>
            </div>
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