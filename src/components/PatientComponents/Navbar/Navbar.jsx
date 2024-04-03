import "./navbar.css";
import React from "react";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <div className="two-buttons">
              <div className="right-part home">
                  <Link className="nav-btn" to={'/patient/homepage'}>Home</Link>
              </div>
              <div className="right-part services">
              {/* <Dropdown>
                <MenuButton variant="plain" size="lg">services</MenuButton>
                <Menu>
                  <MenuItem><Link>x-ray scanning</Link></MenuItem>
                  <MenuItem><Link>online diagnosis</Link></MenuItem>
                </Menu>
              </Dropdown> */}
              <NavDropdown
              id="nav-dropdown-dark-example"
              title="services "
              // menuVariant="dark"
              >
              <NavDropdown.Item href="#action/3.1">online diagnosis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">xray scanning</NavDropdown.Item>
            </NavDropdown>
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


