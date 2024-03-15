import React, { useState, useCallback } from "react";
import "./ProfilePage.css";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useDropzone } from "react-dropzone";
const profilePhoto = require("../../../images/1.jpeg");
const scanProfilePhoto = require("../../../images/face-id.png");

const ProfilePage = () => {
  const [value, setValue] = useState("1");
  const handelChange = (event, newValue) => {
    setValue(newValue);
  };
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

const {  isDragActive } = useDropzone({ onDrop });

  const { getRootProps, getInputProps } = useDropzone({ onDrop }); 



  return (
    <div className="profile-container">
      <div className="first-part">
        <div className="profile-image">
          <img src={profilePhoto} alt="User" />
        </div>
      </div>

      <TabContext value={value}>
        {" "}
        {/* Assuming 'value' is provided from a parent component */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handelChange} orientation="vertical" aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary" centered>
            {" "}
            {/* Assuming 'handleChange' is a prop handler */}
            <Tab  value="1" label="My Profile"/>
            <Tab label="Update Data" value="2" />
            <Tab label="History" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="second-part">
            <div className="profile-details">
              <h2 className="profile-name">Sama Doe</h2>
              <p className="profile-age">Age: 30</p>
              <p className="profile-gender">Gender: Female</p>
              <p className="profile-email">Email: samadoe@example.com</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          {" "}
          <form>
            <div style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="gender">Gender:</label>{" "}
              <select id="gender" style={{ width: "100%", padding: "0.5rem" }}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                
              </select>
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
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
                    {" "}
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
            <div className="last-section">
              <button className="btn-confirm">Update</button>
            </div>
         
          </form>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>

    </div>
  );
};

export default ProfilePage;
