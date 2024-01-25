import React from "react";
import '../Sass/ViewPatients.scss'
import { FaTrash } from "react-icons/fa";

const ViewPatients = () => {
    const patient = [
    { id: 1, name: " Jomana"},
    { id: 2, name: " Rania"},
    { id: 3, name: " Dalia" },
    { id: 4, name: " Salwa"},
    { id: 5, name: " Sondos", }
  ];

  return (
    <div className="view-patient">
      <h2> Patient Table </h2>
      <table className="patient-table">
        <thead>
          <tr>
              <th> ID </th> 
              <th> Name </th>
              <th> Delete </th>
          </tr>
        </thead>
        <tbody>
        
          {patient.map((patient) => (
            <tr key={patient.id}>
              <td> {patient.id} </td> 
              <td> {patient.name} </td>
              <td>  <FaTrash /></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ViewPatients;
