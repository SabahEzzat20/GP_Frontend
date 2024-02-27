import React from "react";

import { MdEmail } from "react-icons/md";
import "../Sass/Register.css";
import { FaUser, FaLock, FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register-bg">
      <form action="/register" className="register__form">
        <h1>Register</h1>
        <div className="input__row">
          <span>
            <FaUser />
          </span>
          <div className="input__group">
            <input type="text" placeholder=" " />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="input__row">
          <span>
            <MdEmail />
          </span>
          <div className="input__group">
            <input type="text" placeholder=" " />
            <label htmlFor="name">Email</label>
          </div>
        </div>
        <div className="input__row">
          <span>
            <FaLock />
          </span>
          <div className="input__group">
            <input id="password" type="password" placeholder=" " />
            <label htmlFor="name">Password</label>
          </div>
          <span id="password-eye">
            <FaEyeSlash />
          </span>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />I read and agree to Terms & Conditions
          </label>
        </div>
        <button className="register__btn">Register</button>
        <div className="register">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
