import React, { useState,useEffect } from "react";
import './ViewDoctors.scss'
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "../AddDoctorModal/AddDoctorModal";
import { SlOptions } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import AssignAppointmentToDoctor from "../AssignAppointmentToDoctor/AssignAppointmentToDoctor";
// import Doctors from "../../../DummyData/Doctors.json"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {getAuthenticatedUser} from '../../../Helper/Storage';
import axios from 'axios'
const ViewDoctors = () => {
  const [doctors, setDoctors] = useState({
    loading: true,
    result: [
      {
        userId:'',
        doctorName: '',
        doctorEmail: '',
        description: ''
      }
    ],
    err: null,
    reload: 0,
  })
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  useEffect(() => {
    setDoctors({...doctors,loading: true})
    axios
      .get('http://localhost:8070/admin/getAllDoctors', {
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        },
      })
      .then((resp) => {
          console.log(resp.data);
          setDoctors({...doctors, result: resp.data , loading: false , err: ''})
          
        })
        .catch((err) => {
          setDoctors({...doctors, err:'something went wrong' , loading: false})
        })
  }, [doctors.loading]); 


  const [searchTerm, setSearchTerm] = useState("");
  const [optionsVisibility, setOptionsVisibility] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = doctors.result.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(doctors.result.length / recordsPerPage)
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

  const DeleteDoctor = (doctorId) => {
    console.log('doctor id '+ doctorId);
    axios
      .delete(`http://localhost:8070/admin/deleteDoctor/${doctorId}`,
        {
          headers: {
            'Authorization': `Bearer ${refreshToken}`
          }
        }
      )
      .then((response) => {
        console.log('response'+response);
        setDoctors({ ...doctors,reload: doctors.reload + 1});
      })
      .catch((err) => {
        console.log('error of delete function: ' + err);
        setDoctors({ ...doctors, loading: false, err: 'there is something wrong' });
      });

}

  const filteredDoctors = records.filter((doctor) => {

    const nameWithoutDr = doctor && doctor.name ? doctor.name.replace("Dr. ", "") : "";
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
              {/* <th>id</th> */}
              <th>doctor name</th>
              <th>e-mail</th>
              <th>qualification</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {records.map((doctor,i) => (
              <tr key={i}>
                {/* <td>{doctor.id}</td> */}
                <td>{doctor.doctorName}</td>
                <td>{doctor.doctorEmail}</td>
                <td>{doctor.description}</td>
                <td>
                  <button className="table-options-button" onClick={() => DeleteDoctor(doctor.userId)}>
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