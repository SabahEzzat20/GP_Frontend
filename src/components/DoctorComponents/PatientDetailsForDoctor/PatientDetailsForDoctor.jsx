import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import userAvatar from '../../../images/saboha.jpeg';
import Tooltip from '@mui/material/Tooltip';
import { VscClose } from "react-icons/vsc";
import { GrView } from "react-icons/gr";
import IconButton from '@mui/material/IconButton';
import './PatientDetailsForDoctor.scss';
import axios from 'axios';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import NextPatientDetails from '../NextPatientDetails/NextPatientDetails';

const PatientDetailsForDoctor = ({ doctorAppointment }) => {
    const auth = getAuthenticatedUser();
    const DeleteReservation = (id) => {
        console.log('patient id '+ id);
        axios
            .delete(`http://localhost:8070/doctor/cancelAppointment/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${auth.refreshToken}`
                    }
                }
            )
            .then((response) => {
                // showMessage();
                console.log('deleted successfully!');
            })
            .catch((err) => {
                console.log('error deleting function: ' + err);
            });
    
        }
    return (
        <div>
            <div className="patient-identification" >
                <Stack direction="row" spacing={2} sx={{display:'flex',alignItems:'center'}}>
                    <Avatar/>
                    <div className="patient-info">
                        <Stack direction="column" spacing={0.2}>
                            <p className='patient-name' >{doctorAppointment.patientName}</p>
                            <p className='patient-date'>{doctorAppointment.date} - {doctorAppointment.day}  [{doctorAppointment.startTime}]</p>
                        </Stack>
                    </div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <div className="last-of-stack">
                        {/* <div className="patient-status" >{doctorAppointment.date}</div> */}
                        <div className="patient-status">
                            <NextPatientDetails key={doctorAppointment.id}  patientEmail={doctorAppointment.patientEmail} />
                        </div>
                        <div className="cancel-appointment" onClick={()=>DeleteReservation(doctorAppointment.id)}>
                            <Tooltip title="cancel appointment">
                                <IconButton color="primary" size='small' >
                                    <VscClose />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    );
};  

export default PatientDetailsForDoctor;