import React, { useState } from "react";
import '../Sass/ViewDoctors.scss'
//import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "./AddDoctorModal";
import { SlOptions } from "react-icons/sl";
import { FaPen } from "react-icons/fa";

const ViewDoctors = () => {
  const [optionsVisibility, setOptionsVisibility] = useState({});

  const toggleMenu = (id) => {
    setOptionsVisibility((prevVisibility) => {
      const newVisibility = {
        ...prevVisibility,
        [id]: !prevVisibility[id],
      };
  
      // Reset visibility for other rows
      Object.keys(prevVisibility).forEach((key) => {
        if (key !== id && prevVisibility[key]) {
          newVisibility[key] = false;
        }
      });
  
      return newVisibility;
    });
  };
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 2,
      name: "Dr. Rawan Hamdy", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 3,
      name: "Dr. David Johnson", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 4,
      name: "Dr. Sabah", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 5,
      
      name: "Dr. Sara Mohamed", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 6,
      name: "Dr. John Doe", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 7,
      name: "Dr. Rawan Hamdy", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 8,
      name: "Dr. David Johnson", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    {
      id: 9,
      name: "Dr. Sabah", 
      email: 'username@gmail.com',
      qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    },
    // {
    //   id: 10,
      
    //   name: "Dr. Sara Mohamed", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 11,
    //   name: "Dr. John Doe", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 12,
    //   name: "Dr. Rawan Hamdy", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 13,
    //   name: "Dr. David Johnson", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 14,
    //   name: "Dr. Sabah", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 15,
      
    //   name: "Dr. Sara Mohamed", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 16,
    //   name: "Dr. John Doe", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 17,
    //   name: "Dr. Rawan Hamdy", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 18,
    //   name: "Dr. David Johnson", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 19,
    //   name: "Dr. Sabah", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
    // {
    //   id: 20,
      
    //   name: "Dr. Sara Mohamed", 
    //   email: 'username@gmail.com',
    //   qualification: "bachelor's degree, a 4-year medical degree and complete a 5-year graduate medical residency"
    // },
  ];
  

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const nameWithoutDr = doctor.name.replace("Dr. ", "");
    return nameWithoutDr.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  return (
    <div className="view-doctors">
      {/* <h2>Doctor Table</h2> */}
      <div className="title-container">
        <div className="doctor-title">Doctors</div>
        <div className="doctor-icon">
          <FaPen />
        </div>
        <div className="no-of-doctors">{doctors.length} doctors</div>
      </div>
      <div className="actions-container">
        <AddDoctorModal />
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search doctor..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>doctor name</th>
            <th>E-mail</th>
            <th>Qualification</th>
            <th></th>
           
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.qualification}</td>
              <td>
                <button className="table-options-button" onClick={() => toggleMenu(doctor.id)}>
                  <SlOptions />
                  <div className="options" style={{ display: optionsVisibility[doctor.id] ? 'block' : 'none' }} key={doctor.id}>
                    <button>view</button>
                    <button>delete</button>
                  </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ViewDoctors;