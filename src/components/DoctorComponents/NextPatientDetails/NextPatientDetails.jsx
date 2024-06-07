import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import './NextPatientDetails.scss';
import Box from "@mui/material/Box";
import Modal from "react-bootstrap/Modal";
import Tooltip from '@mui/material/Tooltip';
import { GrView } from "react-icons/gr";
import IconButton from '@mui/material/IconButton';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import axios from 'axios';
import Lottie from 'lottie-react';
// import profileAnimation from '../../../images/Animation - 1717764626123.json';
import profileAnimation from '../../../images/Animation - 1717765324319.json';
const NextPatientDetails = (patientEmail) => {
    const auth = getAuthenticatedUser();
    const [patientDetails, setPatientDetails] = useState({
        phoneNumber: '',
        gender: '',
        patientName: '',
        weight: '',
        height: '',
        birthDate: ''
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        // setDoctorAppointments({ ...doctorAppointments, loading: true });
        console.log('patient email'+patientEmail.patientEmail)
        axios
        .get(`http://localhost:8070/doctor/viewPatientInformation?email=${encodeURIComponent(patientEmail.patientEmail)}`, {
            headers: {
            Authorization: `Bearer ${auth.refreshToken}`,
            },
        })
        .then((response) => {
            console.log(response.data)
            setPatientDetails({
                phoneNumber: response.data.phoneNumber,
                gender: response.data.gender?'female':'male',
                patientName: response.data.patientName,
                weight: response.data.weight,
                height: response.data.height,
                birthDate: response.data.birthDate,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }, [patientEmail.patientEmail])
    return (
        <Box>
            <Link className="change-pass-link" onClick={handleShow}>
                <Tooltip title="view patient details">
                    <IconButton color="primary" size='small' >
                        <GrView />
                    </IconButton>
                </Tooltip>
            </Link>
            <Modal
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                centered
                // className="forget-pass-modal"
                size="md"
            >
                <Modal.Body className="modalBody">
                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Box sx={{width:'130px',height:'130px',marginTop:'-20%',backgroundColor:'white',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Lottie animationData={profileAnimation} ></Lottie>
                        </Box>
                    </Box>
                    <Box sx={{width:'100%',fontSize:'25px',color:'rgb(66, 66, 66)',marginBottom:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        {patientDetails.patientName}
                    </Box>
                    <Stack spacing={10} direction='row' sx={{marginBottom:'50px'}}>
                        <div className="patient-age">
                            <Stack direction="column" spacing={1}>
                                <p className='info-title'>Birth Date</p>
                            <p className='patient-information'>{patientDetails.birthDate}</p>
                            </Stack>
                        </div>
                        <div className="patient-gender">
                            <Stack direction="column" spacing={1}>
                                <p className='info-title'>Gender</p>
                                <p className='patient-information'>{patientDetails.gender}</p>
                            </Stack>
                        </div>
                        <div className="patient-height">
                            <Stack direction="column" spacing={1}>
                                <p className='info-title'>Height</p>
                                <p className='patient-information'>{patientDetails.height} cm</p>
                            </Stack>
                        </div>
                        <div className="patient-gender">
                            <Stack direction="column" spacing={1}>
                                <p className='info-title'>Weight</p>
                                <p className='patient-information'>{patientDetails.weight} kg</p>
                            </Stack>
                        </div>
                    </Stack>
                    
                </Modal.Body>
            </Modal>
        </Box>
    );
};

export default NextPatientDetails;