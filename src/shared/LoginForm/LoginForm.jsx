import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResetPassword from "../ResetPassword/ResetPassword";
const LoginForm = () => {
  return (
       <div className="login-bg">
        <form action="/" className="login__form">
          <h1>Login</h1>
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
          <div className="action__btn">
            <div className="remember__me">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <ResetPassword />
          </div>
          <button className="login__btn">Login</button>
          <div className="register">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
     </div>
  );
};
export default LoginForm;
