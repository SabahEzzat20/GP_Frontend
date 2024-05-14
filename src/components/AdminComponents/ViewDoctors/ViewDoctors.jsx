import React, { useState,useEffect } from "react";
import './ViewDoctors.scss'
import { FaSearch } from "react-icons/fa";
import { AddDoctorModal } from "../AddDoctorModal/AddDoctorModal";
import { FaPen } from "react-icons/fa";
import AssignAppointmentToDoctor from "../AssignAppointmentToDoctor/AssignAppointmentToDoctor";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {getAuthenticatedUser} from '../../../Helper/Storage';
import axios from 'axios'
import ViewDetails from "./ViewDetails";
const ViewDoctors = () => {
  const [open, setOpen] = React.useState(false);
  const showMessage = () => {
    setOpen(true);
  };
  const [doctors, setDoctors] = useState({
    loading: true,
    result: [
      {
        id:'',
        doctorName: '',
        doctorEmail: '',
        description: ''
      }
    ],
    err: '',
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
          setDoctors({...doctors, result: resp.data , loading: false , err: ''})
          
        })
        .catch((err) => {
          setDoctors({...doctors, err:'something went wrong' , loading: false})
        })
  }, [doctors.reload+1]); 
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

  const DeleteDoctor =  (doctorId) => {
    
   axios.delete(`http://localhost:8070/admin/deleteDoctor/${doctorId}`,
        {
          headers: {
            'Authorization': `Bearer ${refreshToken}`
          }
        }
      )
      .then((response) => {
        setDoctors({ ...doctors,reload: doctors.reload + 1});
        showMessage();
       
      })
      .catch((err) => {
        setDoctors({ ...doctors, loading: false, err: 'there is something wrong' });
   
      });

}

  // const filteredDoctors = records.filter((doctor) => {

  //   const nameWithoutDr = doctor && doctor.name ? doctor.name.replace("Dr. ", "") : "";
  //   return nameWithoutDr.toLowerCase().startsWith(searchTerm.toLowerCase());
  // });

  return (
    <div className="view-doctors">
      <div className="title-container">
        <div className="doctor-title">Doctors</div>
        <div className="doctor-icon">
          <FaPen />
        </div>
        <div className="no-of-doctors">{doctors.result.length}  doctors</div>
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
              <th>Doctor name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Delete</th>
            
            </tr>
          </thead>
          <tbody>
            {records.map((doctor,i) => (
              <tr key={i}>
                <td>{doctor.doctorName}</td>
                <td>{doctor.doctorEmail}</td>
                <td>{doctor.description}</td>
                    <td>
                    <div className="actions">
                    <div className="icon" onClick={(e) => DeleteDoctor(doctor.id)}>
                    <MdDelete />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="actions">
                    <ViewDetails name={doctor.doctorName} email={doctor.doctorEmail} description={doctor.description}/>
                    </div>
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