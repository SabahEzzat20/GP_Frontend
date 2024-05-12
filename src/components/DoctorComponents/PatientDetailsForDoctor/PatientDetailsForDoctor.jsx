import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import userAvatar from '../../../images/saboha.jpeg';
import Tooltip from '@mui/material/Tooltip';
import { VscClose } from "react-icons/vsc";
import IconButton from '@mui/material/IconButton';
import './PatientDetailsForDoctor.scss';
const PatientDetailsForDoctor = ({doctorAppointment}) => {
    
    return (
        <div>
            <div className="patient-identification" style={{backgroundColor: doctorAppointment.status==="0" ? 'rgba(243, 252, 255, 0.986)' : 'transparent'}}>
                <Stack direction="row" spacing={2}>
                    <Avatar alt={"sabah"} src={userAvatar} />
                    <div className="patient-info">
                        <Stack direction="column" spacing={0.1}>
                            <p className='patient-name' style={{color: doctorAppointment.status==="0" ? 'rgb(67, 155, 255)' : 'black'}}>{doctorAppointment.name}</p>
                            <p className='patient-date'>{doctorAppointment.date}</p>
                        </Stack>
                    </div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <div className="last-of-stack">
                        <div className="patient-status" style={{color: doctorAppointment.status==="0" ? 'rgb(67, 155, 255)' : 'black'}}>{doctorAppointment.status}</div>
                        <div className="cancel-appointment">
                            <Tooltip title="cancel appointment">
                                <IconButton color="primary" size='small'>
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