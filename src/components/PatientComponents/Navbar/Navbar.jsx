import "./navbar.css";
import React from "react";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
const sabah = require ('../../../images/saboha.jpeg') ;
function Navbar() {


  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Orthopedista</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link className="nav-link" to="/patient/homepage">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/patient/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/patient/uploadXRay">Upload</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/patient/contact">Contact Us</Link>
        </li>
       
      </ul>

      <div className="two-buttons">
      <div className="right-part">
          <Link className="nav-btn" to="/register">Sign-UP</Link>
      </div>
      <div className="right-part">
          <Link className="nav-btn" to="/login">Log-In</Link>
          <i className="icon"><LuLogIn /></i>
          
      </div>

      </div>

    </div>
  </div>
      <Link className='profile-menu-btn' to="/patient/profilePage">
                <Avatar alt="Sabah hassan" src={sabah} />
            </Link>
           

</nav>
    </>
  );
}

export default Navbar;
