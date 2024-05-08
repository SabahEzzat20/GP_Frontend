import React, { useState ,useParams , useEffect} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuthenticatedUser } from "../../../Helper/Storage";
import axios from 'axios';
const sabah = require('../../../images/saboha.jpeg');

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const patientId = useParams();
  const userToken = getAuthenticatedUser();
    const refreshToken = userToken.refreshToken;
  // console.log(refreshToken);
  const [patientId, getPatientId] = useState(0);
  useEffect(() => {
      axios
      .get(`http://localhost:8070/user/getUserByToken/${refreshToken}`)
      .then((response) => {
          getPatientId(response.data.id);
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);
  
  return (
    <nav>
      <h1 className="web-header">orthopedista</h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
      
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to='/patient/homepage'>Home</Link>
        </li>
        <li>
          <NavLink to="/patient/uploadXRay">Upload X-ray</NavLink>
        </li>
        <li>
          <NavLink to="/register">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      <div>
        <Link className='profile-menu-btn' to={`/patientProfile/${patientId}`}>
            <Avatar alt="Sabah hassan" src={sabah} />
        </Link>
      </div>
      </ul>
    </nav>
  );
};
export default Navbar;
