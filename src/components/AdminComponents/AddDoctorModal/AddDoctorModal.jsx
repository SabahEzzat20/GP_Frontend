import React , {useState} from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './AddDoctorModal.scss';
import { RiUserAddFill } from "react-icons/ri";

export const AddDoctorModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button  onClick={handleShow} className="modal-button">
        <RiUserAddFill />
        add doctor
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
        className="modal"
      >
        <Modal.Header className="modalHeader" closeButton>
          
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Doctor name </Form.Label>
              <Form.Control className="textField" type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Email address </Form.Label>
              <Form.Control className="textField" type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Qualification </Form.Label>
              <Form.Control className="textField" type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <button className='add-doc-btn'> add doctor</button>
          <button onClick={handleClose} className='cancel-btn'> cancel </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
