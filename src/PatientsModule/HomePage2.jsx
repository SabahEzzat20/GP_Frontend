
import React from "react";
import '../Sass/HomePage2.css';
import { FaArrowDown } from "react-icons/fa6";
const part2 = require('../images/portrait-doctor.jpg');
function HomePage2(){
    return(
        <div className="HomePage2">
        <div className="header__container">
        <img src={part2} alt="Home page" />
        <div className="header__ribbon">
          <div className="header__content">
            <h1 className="section__header">We help you online</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam dicta quaerat ex cum.
               Quos illo accusamus vero, qui provident ex impedit enim ratione excepturi,
                natus in eum quis inventore.
            </p>
          </div>
        </div>
        <div className="arrow__down">
        <FaArrowDown />
        </div>
        
      </div>
        </div>
    )
}

export default HomePage2;