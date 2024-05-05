import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './AddDoctorModal.scss';
import {getAuthenticatedUser} from '../../../Helper/Storage';
import { RiUserAddFill } from "react-icons/ri";
import axios from 'axios';

export const AddDoctorModal = () => {
  const initialDoctorData = {
    doctorName: '',
    doctorEmail: '',
    password: '',
    description: '',
    loading: true,
    err: [],
  };

  const [doctorData, setDoctorData] = useState(initialDoctorData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;

  const addDoctor = async () => {
    setDoctorData({ ...doctorData, loading: true, err: [] });
    try {
      const response = await axios.post("http://localhost:8070/admin/addDoctor", {
        doctorName: doctorData.doctorName,
        doctorEmail: doctorData.doctorEmail,
        password: doctorData.password,
        description: doctorData.description,
      },{
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      })
      // console.log('Doctor added successfully:', response.data);
      setDoctorData(initialDoctorData);
      setShow(false);
    } catch (error) {
      setDoctorData({ ...doctorData, loading: false, err: error.response.data.errors });
      console.error(error);
    }
    console.log(doctorData)
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Doctor name</Form.Label>
              <Form.Control
                className="textField"
                type="text"
                required
                value={doctorData.doctorName}
                onChange={(e) => setDoctorData({ ...doctorData, doctorName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="textField"
                type="email"
                value={doctorData.doctorEmail}
                onChange={(e) => setDoctorData({ ...doctorData, doctorEmail: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="textField"
                type="password"
                required
                value={doctorData.password}
                onChange={(e) => setDoctorData({ ...doctorData, password: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                className="textField"
                type="text"
                value={doctorData.description}
                onChange={(e) => setDoctorData({ ...doctorData, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <button className='add-doc-btn' onClick={addDoctor}> add doctor</button>
          <button onClick={handleClose} className='cancel-btn'> cancel </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};