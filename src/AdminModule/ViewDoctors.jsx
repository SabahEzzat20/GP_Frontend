import React, { useState } from "react";
import '../Sass/ViewDoctors.scss'
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "./AddDoctorModal";

const ViewDoctors = () => {
  const doctors = [
    { id: 1, name: "Dr. John Doe", experience: "10 years" },
    { id: 2, name: "Dr. Rawan Hamdy", experience: "8 years" },
    { id: 3, name: "Dr. David Johnson", experience: "12 years" },
    { id: 4, name: "Dr. Sabah", experience: "10 years" },
    { id: 5, name: "Dr. Sara Mohamed", experience: "15 years" }
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
      <h2>Doctor Table</h2>
      <div className="search-bar">
      <FaSearch />
        <input
          type="text"
          placeholder="Search doctor..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.experience}</td>
              <td>
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddDoctorModal />
    </div>
  );
};

export default ViewDoctors;