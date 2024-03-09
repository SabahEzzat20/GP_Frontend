import React, { useState } from "react";
<<<<<<< HEAD:src/components/AdminComponents/ViewDoctors/ViewDoctors.jsx
import './ViewDoctors.scss'
=======
import '../Sass/ViewDoctors.scss'
>>>>>>> d4f19a854bc47bbe7ebeda6e029c6ce1dd1c7cde:src/AdminModule/ViewDoctors.jsx
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "../AddDoctorModal/AddDoctorModal";
import { SlOptions } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
<<<<<<< HEAD:src/components/AdminComponents/ViewDoctors/ViewDoctors.jsx
import AssignAppointmentToDoctor from "../AssignAppointmentToDoctor/AssignAppointmentToDoctor";
import Doctors from "../../../DummyData/Doctors.json"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
=======
import AssignAppointmentToDoctor from "./AssignAppointmentToDoctor/AssignAppointmentToDoctor";
import { doctors } from "../DummyData/Doctors";
>>>>>>> d4f19a854bc47bbe7ebeda6e029c6ce1dd1c7cde:src/AdminModule/ViewDoctors.jsx

const ViewDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [optionsVisibility, setOptionsVisibility] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Doctors.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(Doctors.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  }
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
    }
  }
  const changeCPage = (id) => {
      setCurrentPage(id)
  }
  const toggleMenu = (id) => {
    setOptionsVisibility((prevVisibility) => {
      const newVisibility = {
        ...prevVisibility,
        [id]: !prevVisibility[id],
      };
<<<<<<< HEAD:src/components/AdminComponents/ViewDoctors/ViewDoctors.jsx
      // Reset visibility for other rows
=======
  
      
>>>>>>> d4f19a854bc47bbe7ebeda6e029c6ce1dd1c7cde:src/AdminModule/ViewDoctors.jsx
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

  const filteredDoctors = records.filter((doctor) => {
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
        <div className="no-of-doctors">{Doctors.length} doctors</div>
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
            {filteredDoctors.map((doctor,i) => (
              <tr key={i}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.qualification}</td>
                <td>
                  <button className="table-options-button" onClick={() => toggleMenu(i)}>
                    <SlOptions />
                        <div className="options" style={{ display: optionsVisibility[doctor.id] ? 'block' : 'none' }} key={i}>
                          <button>view</button>
                          <button>delete</button>
                        </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination-bar">
            <li>
              <button onClick={prePage} className="arrow">
                <IoIosArrowBack />
              </button>
            </li>
            {
              numbers.map((n, i) => (
                <li key={i} className={`page-item-bar ${currentPage===n? 'active' : ''}`}>
                  <button onClick={() => changeCPage(n)} className="page-btn">{n}</button>
                </li>
              ))
            }
            <li>
              <button onClick={nextPage} className="arrow">
                <IoIosArrowForward />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ViewDoctors;