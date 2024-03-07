import React, { useState } from "react";
import '../Sass/ViewDoctors.scss'
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "./AddDoctorModal";
import { SlOptions } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import AssignAppointmentToDoctor from "./AssignAppointmentToDoctor/AssignAppointmentToDoctor";
import { doctors } from "../DummyData/Doctors";

const ViewDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [optionsVisibility, setOptionsVisibility] = useState({});
  const toggleMenu = (id) => {
    setOptionsVisibility((prevVisibility) => {
      const newVisibility = {
        ...prevVisibility,
        [id]: !prevVisibility[id],
      };
  
      
      Object.keys(prevVisibility).forEach((key) => {
        if (key !== id && prevVisibility[key]) {
          newVisibility[key] = false;
        }
      });
      return newVisibility;
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const nameWithoutDr = doctor.name.replace("Dr. ", "");
    return nameWithoutDr.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  return (
    <div className="view-doctors">
      <div className="title-container">
        <div className="doctor-title">Doctors</div>
        <div className="doctor-icon">
          <FaPen />
        </div>
        <div className="no-of-doctors">{doctors.length} doctors</div>
      </div>
      <div className="actions-container">
        <AddDoctorModal />
        <AssignAppointmentToDoctor />
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
      <div className="table-container">
        <table className="doctor-table">
          <thead>
            <tr>
              <th>id</th>
              <th>doctor name</th>
              <th>e-mail</th>
              <th>qualification</th>
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
      
    </div>
  );
};

export default ViewDoctors;