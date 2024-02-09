import React from "react";
import { FaUser,FaLock } from "react-icons/fa";
import '../Sass/Register.css';
const Register= ()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                   <input type="text" placeholder="Username" required/> 
                   <FaUser className="icon" />
                </div>
                <div className="input-box">
                   <input type="email" placeholder="E-mail" required/> 
                   <FaUser className="icon" />
                </div>
                <div className="input-box">
                   <input type="password" placeholder="Password" required/>
                   <FaLock className="icon"/> 
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        I read and agree to Terms & Conditions
                    </label>
                </div>
                <button type="submit">Register</button>
                <div className="login-link">
                    <p>Already have an account? <a href="#/">Sign in</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;