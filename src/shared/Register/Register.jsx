import React, { useState} from "react";
import { MdEmail } from "react-icons/md";
import "./Register.css";
import { FaUser, FaLock, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
const Register = () => {
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
    err: [],
    loading: false,
  })
  const SignupFunction = (e) => {
    e.preventDefault();
    setSignup({ ...signup, loading: true, err: [] })
    axios.post('http://localhost:8070/patient/register',{
      name: signup.name,
      email: signup.email,
      password: signup.password,
      role: signup.role
    })
      .then(resp => {
        console.log('response data : ', resp.data)
        setSignup({ ...signup, loading: false, err: [] })
      })
      .catch(error => {
        console.error('response error : ',error)
        setSignup({ ...signup, loading: false, err: 'failed to signup' })
    })
    console.log(signup);
  } 
  return (
    <div className="register-bg">
      <form action="/register" className="register__form" onSubmit={SignupFunction} >
        <h1>Register</h1>
        <div className="input__row">
          <span>
            <FaUser />
          </span>
          <div className="input__group">
            <input type="text" placeholder=" "  value={signup.name} onChange={(e)=> setSignup({...signup,name:e.target.value})} required/>
            <label htmlFor="name" >Name</label>
          </div>
        </div>
        <div className="input__row">
          <span>
            <MdEmail />
          </span>
          <div className="input__group">
            <input type="text" placeholder=" " value={signup.email} onChange={(e)=> setSignup({...signup,email:e.target.value})} required/>
            <label htmlFor="name">Email</label>
          </div>
        </div>
        <div className="input__row">
          <span>
            <FaLock />
          </span>
          <div className="input__group">
            <input id="password" type="password" placeholder=" " value={signup.password} onChange={(e)=> setSignup({...signup,password:e.target.value})} required/>
            <label htmlFor="name">Password</label>
          </div>
          <span id="password-eye">
            <FaEyeSlash />
          </span>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />    I read and agree to Terms & Conditions
          </label>
          
        </div>
        <div>{signup.err}</div>
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
