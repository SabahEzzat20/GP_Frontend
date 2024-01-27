import React, { useState } from "react";
import '../Sass/ViewPatients.scss'
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const ViewPatients = () => {
  const patients = [
    { id: 1, name: "Jomana" },
    { id: 2, name: "Rania" },
    { id: 3, name: "Dalia" },
    { id: 4, name: "Salwa" },
    { id: 5, name: "Sondos" }
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
      <h2>Patient Table</h2>
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPatients;