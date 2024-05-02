import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
const sabah = require('../../../images/saboha.jpeg');

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
     <h1 className="web-header">orthopedista</h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
      
      </div>
      <ul className={menuOpen ? "open" : ""}>
         <li>
          <Link to='/patient/homepage'>Home</Link>
        </li>
        <li>
          <NavLink to="/patient/uploadXRay">Upload X-ray</NavLink>
        </li>
        <li>
          <NavLink to="/register">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      <div>
                <Link className='profile-menu-btn' to="/patientprofile/Editprofile">
                    <Avatar alt="Sabah hassan" src={sabah} />
                </Link>
              </div>
      </ul>
    </nav>
  );
};
export default Navbar;
