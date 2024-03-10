import "./navbar.css";
import React from "react";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
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
          <Link className="nav-link active" aria-current="page" href="/#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/patient/benefits">Benefits</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/patient/uploadXRay">Upload</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
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
</nav>
    </>
  );
}

export default Navbar;
