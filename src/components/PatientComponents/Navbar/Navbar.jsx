import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {getAuthenticatedUser} from '../../../Helper/Storage'
const sabah = require('../../../images/saboha.jpeg');

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  
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
              <Link className='profile-menu-btn' to={`/patientProfile`}>
                  <Avatar alt="Sabah hassan" src={sabah} />
              </Link>
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