import React, { useState , useEffect} from "react";
import './ViewPatients.scss'
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import {getAuthenticatedUser} from '../../../Helper/Storage';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosSearch } from "react-icons/io";
import Empty from "../../../shared/Empty/Empty";
import Box from "@mui/material/Box";
import UpperNav from "../../../shared/UpperNav/UpperNav";
import Loading from '../../../shared/Loading'
const ViewPatients = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = React.useState(false);
  const showMessage = (msg,sv) => {
    setMsg({msg:msg, severity:sv});
    setOpen(true);
  };
  const [patients,setPatients] = useState({
    loading: true,
    result: [
      {
        id:'',
        patientName: '',
        patientEmail: ''
      }
    ],
    err: '',
    reload: 0
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
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
        setPatients({ ...patients, result: response.data, loading: false, err: '',reload:1 });
      })
      .catch((err) => {
        setPatients({ ...patients, loading: false, err: 'there is something wrong',reload:1 });
      });
  }, [patients.reload]);
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
  const [msg,setMsg]= useState({
    msg:'',
    severity:''
  })
  const DeletePatient = (id) => {
      console.log('patient id '+ id);
      axios
        .delete(`http://localhost:8070/admin/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${refreshToken}`
            }
          }
        )
        .then((response) => {
          setPatients({ ...patients, reload: patients.reload + 1 ,loading:false});
          showMessage('patient deleted successfully !','success')
        })
        .catch((err) => {
          setPatients({ ...patients, loading: false});
          showMessage('something went wrong','error')
        });
  }
  return (
    patients.result.loading? <Loading/>:
    <>
      <UpperNav/>
      <div className="view-doctors">
        <div className="title-container">
          <div className="doctor-title">Patients</div>
          <div className="doctor-icon">
            <FaPen />
          </div>
          <div className="no-of-doctors">{patients.result.length} patients</div>
          <div className="ssearch">
            <Form className="search-bar">
              <InputGroup className="bar " > 
                  <IoIosSearch className="search-icon"/>
                  <Form.Control onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className="bar2" style={{border:"none"}} />
              </InputGroup> 
            </Form>
          </div>
        </div>
        {patients.result.length > 0 ?
          <div className="table-container">
            <table className="doctor-table">
              <thead>
                <tr>
                  <th>patient name</th>
                  <th>e-mail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {records.filter((patient)=>{
                  return search.toLowerCase() === ''? patient : patient.patientName.toLowerCase().startsWith(search);
                }).map((patient,i) => (
                  <tr key={i}>
                    <td>{patient.patientName}</td>
                    <td>{patient.patientEmail}</td>
                    <td>
                      <button className="table-options-button" title='block user' style={{cursor:'pointer'}} onClick={()=>DeletePatient(patient.id)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav className='paginationNav'>
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
          :
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh', padding: "15px", marginTop: '40px' }}>
              <Empty />
          </Box>
        }
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={msg.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {msg.msg}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default ViewPatients;