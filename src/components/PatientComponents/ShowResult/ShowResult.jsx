import React , {useState} from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './ShowResult.scss';
import { RiUserAddFill } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import result from '../../../images/results.png'
import Alert from '@mui/material/Alert';
import { FaXRay } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const ShowResult = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button  onClick={handleShow} className="upload-btn">
        <div className="upload-icon">
                <IoCloudUploadOutline />
            </div>
            <p>upload</p>
        </button>
        <Modal
            show={show}
            onHide={handleClose}
            // backdrop="static"
            keyboard={false}
            centered
            className="result-modal"
        >
            <Modal.Header className="Result-Header" closeButton>
                <div className='result'>
                    <div>
                        <FaXRay />
                    </div>
                    {/* <img src={result} alt="xrayresult" width={32} height={32}/> */}
                    <p>Result</p>
                </div>
            </Modal.Header>
            <Modal.Body className="Result-body">
                <div className="xray-result">
                    <Alert severity='error'>There is a bone fracture in x-ray</Alert> <br />
                    <Alert severity="info">We recommend you to book an online appointment with one of our doctors on website.</Alert>
                </div>
            </Modal.Body>
            <Modal.Footer className="result-footer">
            <Link to={"/patient/doctors-preview"}>
                <button className='book-appointment-btn'> Book appointment</button>
            </Link>
            <button onClick={handleClose} className='cancel-book-btn'> cancel </button>
            </Modal.Footer>
        </Modal>
        </>
    );
};
