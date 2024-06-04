import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import "./Register.css";
import { FaUser, FaLock, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  getAuthenticatedUser,
  setAuthenticatedUser,
} from "../../Helper/Storage";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    err: "",
    loading: false,
  });

  const validatePassword = (password) => {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    // Check if password contains both uppercase and lowercase letters
    let hasUppercase = false;
    let hasLowercase = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "A" && password[i] <= "Z") {
        hasUppercase = true;
      } else if (password[i] >= "a" && password[i] <= "z") {
        hasLowercase = true;
      }
    }
    if (!hasUppercase || !hasLowercase) {
      return "Password must contain both uppercase and lowercase letters.";
    }

    // Password is valid
    return null;
  };

  const validateEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    // Email is valid
    return null;
  };

  const SignupFunction = (e) => {
    e.preventDefault();
    const passwordValidation = validatePassword(signup.password);
    const emailValidation = validateEmail(signup.email);

    if (passwordValidation || emailValidation) {
      setSignup({
        ...signup,
        err: passwordValidation || emailValidation,
      });
      return;
    }
    setSignup({ ...signup, loading: true, err: "" });
    axios
      .post("http://localhost:8070/patient/register", {
        name: signup.name,
        email: signup.email,
        password: signup.password,
      })
      .then((resp) => {
        setSignup({ ...signup, loading: false, err: [] });
        setAuthenticatedUser(resp.data);
        navigate("/patient/homepage");
      })
      .catch((error) => {
        console.error("response error : ", error);
        setSignup({ ...signup, loading: false, err: "failed to signup" });
      });
  };

  return (
    <div className="register-bg">
      <form
        action="/register"
        className="register__form"
        onSubmit={SignupFunction}
      >
        <h1>Register</h1>
        <div className="input__row">
          <span>
            <FaUser />
          </span>
          <div className="input__group">
            <input
              type="text"
              placeholder=" "
              value={signup.name}
              onChange={(e) => setSignup({ ...signup, name: e.target.value })}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="input__row">
          <span>
            <MdEmail />
          </span>
          <div className="input__group">
            <input
              type="text"
              placeholder=" "
              value={signup.email}
              onChange={(e) => setSignup({ ...signup, email: e.target.value })}
              onInvalid={(e) => {
                e.target.setCustomValidity(validateEmail(signup.email) || "");
              }}
              onInput={(e) => e.target.setCustomValidity("")}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter your email in the format Username@example.com."
              required
            />

            <label htmlFor="name">Email</label>
          </div>
        </div>
        <div className="input__row">
          <span>
            <FaLock />
          </span>
          <div className="input__group">
            <input
              id="password"
              type="password"
              placeholder=" "
              value={signup.password}
              onChange={(e) =>
                setSignup({ ...signup, password: e.target.value })
              }
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              title="Password must contain at least 8 characters. Password must also contain at least one uppercase letter, one lowercase letter, and one number."
              required
            />
            <label htmlFor="name">Password</label>
          </div>
        </div>
        {signup.err && <div className="error-message">{signup.err}</div>}
        <button className="register__btn">
          {signup.loading ? <CircularProgress size={20} /> : "Register"}
        </button>
        <div className="register">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      
      </form>
    </div>
  );
};

export default Register;
