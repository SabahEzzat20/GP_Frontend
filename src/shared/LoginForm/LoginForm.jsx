import React, { useState} from "react";
import "./LoginForm.css";
import { FaUser, FaLock, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResetPassword from "../ResetPassword/ResetPassword";
import axios from 'axios';
import {setAuthenticatedUser} from '../../Helper/Storage';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
    err: [],
    loading: false,
  })
  const LoginFunction = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true})
    axios.post('http://localhost:8070/user/login',{
      email: login.email,
      password: login.password
    })
      .then(resp => {
        // console.log('logged in successfully!')
        console.log('response data : ', resp.data)
        setLogin({ ...login, loading: false })
        setAuthenticatedUser(resp.data)
        navigate('/admin')
      })
      .catch(error => {
        console.error('response error : ',error)
        setLogin({ ...login, loading: false, err: 'email or password incorrect' })
    })
    console.log(login);
  }
  return (
      <div className="login-bg">
        <form action="/" className="login__form" onSubmit={LoginFunction}>
          <h1>Login</h1>
          <div className="input__row">
            <span>
              <FaUser />
            </span>
            <div className="input__group">
              <input type="email" placeholder=" " value={login.email} onChange={(e)=> setLogin({...login,email:e.target.value})} required/>
              <label htmlFor="email">email</label>
            </div>
          </div>
          <div className="input__row">
            <span>
              <FaLock />
            </span>
            <div className="input__group">
              <input id="password" type="password" placeholder=" " value={login.password} onChange={(e)=> setLogin({...login,password:e.target.value})} required/>
              <label htmlFor="name">Password</label>
            </div>
            <span id="password-eye">
              <FaEyeSlash />
            </span>
          </div>
          <div>{login.err}</div>
          <div className="action__btn">
            <div className="remember__me">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <ResetPassword />
          </div>
          <button className="login__btn" type="submit">Login</button>
          <div className="register">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
  );
};
export default LoginForm;
