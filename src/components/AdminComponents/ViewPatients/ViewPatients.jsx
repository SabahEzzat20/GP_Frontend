import React, { useState , useEffect} from "react";
import './ViewPatients.scss'
import { FaSearch } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Patients from "../../../DummyData/Patients.json"
import axios from 'axios';
import {getAuthenticatedUser} from '../../../Helper/Storage';

const ViewPatients = () => {
  const [patients,setPatients] = useState({
    loading: true,
    result: [
      {
        userId:'',
        patientName: '',
        patientEmail: ''
      }
    ],
    err: '',
    reload: 0
  });
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  useEffect(() => {
    setPatients({...patients, loading: true });
    axios
      .get('http://localhost:8070/admin/getAllPatients', {
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        },
      })
      .then((response) => {
        console.log(response.data);
        setPatients({ ...patients, result: response.data, loading: false, err: '' });
      })
      .catch((err) => {
        setPatients({ ...patients, loading: false, err: 'there is something wrong' });
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [optionsVisibility, setOptionsVisibility] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = patients.result.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(patients.result.length / recordsPerPage);
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
  const DeletePatient = (patientId) => {
      console.log('patient id '+patientId);
      axios
        .delete(`http://localhost:8070/admin/deleteUser/${patientId}`,
          {
            headers: {
              'Authorization': `Bearer ${refreshToken}`
            }
          }
        )
        .then((response) => {
          console.log('response'+response);
          setPatients({ ...patients,reload: patients.reload + 1});
        })
        .catch((err) => {
          console.log('error of delete function: ' + err);
          setPatients({ ...patients, loading: false, err: 'there is something wrong' });
        });

  }
  // const filteredPatients = records.filter((patient) => {
  //   // const nameWithoutDr = patient.name.replace("Dr. ", "");
  //   return patient.name.toLowerCase().startsWith(searchTerm.toLowerCase());
  // });
  console.log('records'+records);
  return (
    <div className="view-doctors">
      <div className="title-container">
        <div className="doctor-title">Patients</div>
        <div className="doctor-icon">
          <FaPen />
        </div>
        <div className="no-of-doctors">{patients.result.length} patients</div>
      </div>
      {/* <div className="actions-container">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search patient..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </div> */}
      <div className="table-container">
        <table className="doctor-table">
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>patient name</th>
              <th>e-mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {records.map((patient,i) => (
              <tr key={i}>
                {/* <td>{patient.result.id}</td> */}
                <td>{patient.patientName}</td>
                <td>{patient.patientEmail}</td>
                <td>
                  <button className="table-options-button" title='block user' onClick={()=>DeletePatient(patient.userId)}>
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