import React from "react";
import "../Sass/BigForm.scss";


const BigForm = () => {
  return (
    <div className="big-form-component">
      <h1 className="big-form-title">Complete the form</h1>
      <div className="line"> - - - - - - - - - - - - - - - - - - - - - - - - - - - </div>
      <div className="big-form">
        <div className="column">
          <h3>First Name</h3>
          <input type="text" />
          <h3>Last Name</h3>
          <input type="text" />
          <h3>Email</h3>
          <input type="email" />
          <h3>Phone Number</h3>
          <input type="tel"  />
        </div>
        <div className="column">
          <h3>Address</h3>
          <input type="text"  />
          <h3>City</h3>
          <input type="text"  />
          <h3>State</h3>
          <input type="text" />
          <h3>Zip Code</h3>
          <input type="text"  />
        </div>
      </div>
      <div className="last-section">
      <button className="btn-confirm">Confirm</button>
      </div>
    </div>
  );
};

export default BigForm;
