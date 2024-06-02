import React from "react";
import './HomePage.css';
import { FaCheck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import ExperienceDoctors from "../ExperienceDoctors/ExperienceDoctors";
import Guarantee from "../Guarantee/Guarantee";
import Section3 from "../Section3/Section3";
const doctor = require('../../../images/header-bg.png');

function HomePage(){
    return(
        <>
        <div className="HomePage">
        <header className="header">
        <div className="content">
          <h1><span>Get Quick</span><br />Medical Services</h1>
          <p>
            In today's fast-paced world, access to prompt and efficient medical
            services is of paramount importance. When faced with a medical
            emergency or seeking immediate medical attention, the ability to
            receive quick medical services can significantly impact the outcome
            of a situation.
          </p>
          <Link className="getServices" to={'/patient/services'}>Get Services</Link>
        </div>
        <div className="image">
          <span className="image__bg"></span>
          <img src={doctor} alt="headerImage" />
          <div className="image__content image__content__1">
            <span><CgProfile /></span>
            <div className="details">
              <h4>1520+</h4>
              <p>Active Clients</p>
            </div>
          </div>
          <div className="image__content image__content__2">
            <ul>
              <li>
                <span><FaCheck /></span>
                Get 20% off on every 1st month
              </li>
              <li>
                <span><FaCheck /></span>
                  Expert Doctors
              </li>
            </ul>
          </div>
        </div>
      </header>
        </div>
        <ExperienceDoctors />
        <Section3 />
        <Guarantee />
        </>
    )

} 
export default HomePage;