import React, { useState } from "react";
import '../Sass/ViewPatients.css'
//import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
const ViewPatients = () => {
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
    { id: 1, name: "Jomana",profile: "URL" },
    { id: 2, name: "Rania",profile: "URL" },
    { id: 3, name: "Dalia",profile: "URL" },
    { id: 4, name: "Salwa",profile: "URL" },
    { id: 5, name: "Sondos",profile: "URL" }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = patients.filter((patient) => {
    return patient.name.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  return (
    <div className="view-patient">
      {/*<h2>Patient Table</h2>*/}
      <div className="title-container">
        <div className="patient-title">Patients</div>
        <div className="doctor-icon">
          <FaPen />
        </div>
        <div className="no-of-doctors">{patients.length} patients</div>
      </div>
      <div className="search-bar">
      <FaSearch />
        <input
          type="text"
          placeholder="Search patient..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>profile</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.profile}</td>
              <td>
                <button className="table-options-button" onClick={() => toggleMenu(patient.id)}>
                  <SlOptions />
                  <div className="options" style={{ display: optionsVisibility[patient.id] ? 'block' : 'none' }} key={patient.id}>
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

export default ViewPatients;