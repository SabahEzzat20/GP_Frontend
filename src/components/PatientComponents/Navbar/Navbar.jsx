import "./navbar.css";
import React from "react";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
const sabah = require('../../../images/saboha.jpeg');
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <h1 className="web-header">orthopedista</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarScroll"> */}
            <div className="two-buttons">
              <div className="right-part home">
                  <Link className="nav-btn" to={'/patient/homepage'}>Home</Link>
              </div>
              <div className="right-part services">
                  <Link className="nav-btn">services</Link>
              </div>
              <div className="right-part">
                  <Link className="nav-btn" to="/register">signup</Link>
              </div>
              <div className="right-part">
                  <Link className="nav-btn" to="/login">login</Link>
              </div>
            {/* </div> */}
          </div>
        </div>
              <div>
                <Link className='profile-menu-btn' to="/patientprofile/Editprofile">
                    <Avatar alt="Sabah hassan" src={sabah} />
                </Link>
              </div>
      </nav>
    </>
  );
}

export default Navbar;


