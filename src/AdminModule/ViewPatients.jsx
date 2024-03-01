import React, { useState } from "react";
import '../Sass/ViewDoctors.scss'
//import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "./AddDoctorModal";
import { SlOptions } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import { GoBlocked } from "react-icons/go";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const ViewPatients = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const patients = [
    { 
      id: 1,
      name: "Jomana",
      email: "user@gmail.com"
    },
    { 
      id: 2,
      name: "Rania",
      email: "user@gmail.com"
    },
    { 
      id: 3,
      name: "Dalia",
      email: "user@gmail.com" },
    { 
      id: 4,
      name: "Salwa",
      email: "user@gmail.com" },
    { 
      id: 5,
      name: "Sondos",
      email: "user@gmail.com" }
  ];
  


  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = patients.filter((patient) => {
    const nameWithoutDr = patient.name.replace("Dr. ", "");
    return nameWithoutDr.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  return (
    <div className="view-doctors">
      <div className="title-container">
        <div className="doctor-title">Patients</div>
        <div className="doctor-icon">
          <FaPen />
        </div>
        <div className="no-of-doctors">{patients.length} patients</div>
      </div>
      <div className="actions-container">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search patient..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <div className="table-container">
        <table className="doctor-table">
          <thead>
            <tr>
              <th>id</th>
              <th>doctor name</th>
              <th>e-mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>
                  <button className="table-options-button" title='block user'>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPatients;