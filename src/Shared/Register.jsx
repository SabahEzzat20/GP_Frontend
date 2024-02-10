import React from "react";
import { FaUser,FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../Sass/Register.scss';
import { Link } from "react-router-dom";
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
                   <MdEmail  className="icon" />
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
                    <p>Already have an account? <Link to="/">Sign in</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register;