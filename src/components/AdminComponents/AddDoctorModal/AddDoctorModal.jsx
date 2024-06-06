import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './AddDoctorModal.scss';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import { RiUserAddFill } from "react-icons/ri";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const AddDoctorModal = () => {
  const [doctorData, setDoctorData] = useState({
    doctorName: '',
    doctorEmail: '',
    password: '',
    description: '',
    location: '',
    price: '',
  });
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;

  const handleClose = () => {
    setShow(false);
    setOpen(false); // Close success message as well
  };

  const handleShow = () => setShow(true);

  const handleDoctorChange = (event) => {
    setDoctorData({ ...doctorData, [event.target.name]: event.target.value });
  };

  const handleMsgClose = (event, reason) => {
        if (reason === 'clickaway') {
         return;
        }
    
        setOpen(false);
      };

  const addDoctor = async () => {
    setLoading(true);
    setErrors([]);
    try {
      const response = await axios.post("http://localhost:8070/admin/addDoctor", {
        doctorName: doctorData.doctorName,
        doctorEmail: doctorData.doctorEmail,
        password: doctorData.password,
        description: doctorData.description,
        location: doctorData.location,
      }, {
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      });
      setShow(false);
      setOpen(true); 
    } catch (error) {
      setErrors(error.response?.data?.errors || []); 
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleShow} className="modal-button">
        <RiUserAddFill />
        add doctor
      </button>
      <Modal show={show} onHide={handleClose} keyboard={false} centered className="modal">
        <Modal.Header className="modalHeader" closeButton>
          {/* Header content */}
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="doctorName">
              <Form.Label>Doctor name</Form.Label>
              <Form.Control
                className="textField"
                type="text"
                required
                name="doctorName"
                value={doctorData.doctorName}
                onChange={handleDoctorChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="doctorEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="textField"
                type="email"
                required
                name="doctorEmail"
                value={doctorData.doctorEmail}
                onChange={handleDoctorChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="textField"
                type="password"
                required
                name="password"
                value={doctorData.password}
                onChange={handleDoctorChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Speciality</Form.Label>
              <Form.Control
                className="textField"
                type="text"
                name="description"
                value={doctorData.description}
                onChange={handleDoctorChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location
</Form.Label>
              <Form.Control
                className="textField"
                type="text"
                value={doctorData.location}
                onChange={(e) => setDoctorData({ ...doctorData, location: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price
</Form.Label>
              <Form.Control
                className="textField"
                type="text"
                value={doctorData.price}
                onChange={(e) => setDoctorData({ ...doctorData, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <button className='add-doc-btn' onClick={addDoctor}> add doctor</button>
          <button onClick={handleClose} className='cancel-btn'> cancel </button>
        </Modal.Footer>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleMsgClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Doctor added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};