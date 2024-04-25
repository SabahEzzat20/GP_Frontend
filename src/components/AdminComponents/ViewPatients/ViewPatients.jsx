import React, { useState , useEffect} from "react";
import './ViewPatients.scss'
import { FaSearch } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Patients from "../../../DummyData/Patients.json"
import axios from 'axios';

const ViewPatients = () => {

  

  const [searchTerm, setSearchTerm] = useState("");
  const [optionsVisibility, setOptionsVisibility] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Patients.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(Patients.length / recordsPerPage)
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
  
      // Reset visibility for other rows
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

  const filteredPatients = records.filter((patient) => {
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
        <div className="no-of-doctors">{Patients.length} patients</div>
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
              <th>patient name</th>
              <th>e-mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient,i) => (
              <tr key={i}>
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

export default ViewPatients;