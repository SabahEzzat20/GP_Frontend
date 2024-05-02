import React from 'react';
import './About.scss'; // Import the corresponding SCSS file
const about = require('../../../images/doctor-nurses-special-equipment.jpg');

const About = () => {
  return (
    <div className="container">
      <div className="header">
        <button>About Us</button>
        <h1>Why You Should Trust Us? Get to Know About Us!</h1>
      </div>
      <div className="content">
        <img src={about} alt="Doctors" className="doctors" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <ul>
          <li>Quality health care</li>
          <li>Only Qualified Doctors</li>
          <li>Medical Research Professionals</li>
        </ul>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default About;
