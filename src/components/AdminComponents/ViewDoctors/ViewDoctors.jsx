import React, { useState,useEffect } from "react";
import './ViewDoctors.scss'
import { AddDoctorModal } from "../AddDoctorModal/AddDoctorModal";
import { FaPen } from "react-icons/fa";
import AssignAppointmentToDoctor from "../AssignAppointmentToDoctor/AssignAppointmentToDoctor";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {getAuthenticatedUser} from '../../../Helper/Storage';
import axios from 'axios'
import ViewDetails from "./ViewDetails";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const ViewDoctors = () => {
  
  const [search, setSearch] = useState("");


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
        description: '',
        location: '',
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
      .get(`http://localhost:8070/admin/getAllDoctors`, {
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
  const [optionsVisibility, setOptionsVisibility] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = doctors.result.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(doctors.result.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  //   const handleSearchInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  //  };
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
        <Form className="search-bar">
            <InputGroup className="bar " >
                 <Form.Control onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className="rounded-0 bar2" style={{border:"none"}} />
             </InputGroup>
       </Form>
      </div>
      <div className="table-container">
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Doctor name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Delete</th>
            
            </tr>
          </thead>
          <tbody>
            {records.filter((doctor)=>{
              return search.toLowerCase() === ''? doctor : doctor.doctorName.toLowerCase().startsWith(search);
            }).map((doctor,i) => (
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
                    <ViewDetails name={doctor.doctorName} email={doctor.doctorEmail} description={doctor.description} location={doctor.location}/>
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