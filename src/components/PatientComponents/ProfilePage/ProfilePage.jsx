import React, { useState, useCallback } from "react";
import "./ProfilePage.css";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import { useDropzone } from "react-dropzone";
import Button from "react-bootstrap/Button";

const profilePhoto = require("../../../images/1.jpeg");
const scanProfilePhoto = require("../../../images/face-id.png");

const handleUpdateData = () => {
  // Update the user data here
  // You can implement the logic to update the data as per your requirements
  // For simplicity, we are just logging a message here
  console.log("Updating user data...");
};

const ProfilePage = () => {

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
 

  const [image, setImage] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [gender, setGender] = useState("");

  return (
    <div className="profile-container">
      <div className="first-part">
        <div className="profile-image">
          <img src={profilePhoto} alt="User" />
        </div>
      </div>
      <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">My Profile</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>

      <div className="second-part">
        <div className="profile-details">
          <h2 className="profile-name">Sama Doe</h2>
          <p className="profile-age">Age: 30</p>
          <p className="profile-gender">Gender: Female</p>
          <p className="profile-email">Email: samadoe@example.com</p>
        </div>
      
      </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0"> Update Data</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
              <form>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    style={{ width: "100%", padding: "0.5rem" }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    style={{ width: "100%", padding: "0.5rem" }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    style={{ width: "100%", padding: "0.5rem" }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    style={{ width: "100%", padding: "0.5rem" }}
                  />
                </div>
                <div className="update-photo">
                  <div {...getRootProps()} className="profile-photo-dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop photo here...</p>
                    ) : image ? (
                      <div className="image-preview">
                        <img
                          src={image}
                          alt="Preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ) : (
                      <img src={scanProfilePhoto} alt="reset img" />
                    )}
                  </div>
                </div>
              </form>
          
      
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </div>
  );
};

export default ProfilePage;
