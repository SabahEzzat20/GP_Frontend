import React from 'react';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import xray from '../../../images/hand-255x300.jpg'
import Stack from '@mui/material/Stack';
import './PatientReservedAppointment.scss'
import Divider from '@mui/material/Divider';
import emptyPage from '../../../images/No data-cuate.png'
const PatientReservedAppointment = () => {
    const data = 1;
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };
    return (
        <div>
            {data === 1 ? 
                
            <div className='reserved-apps'>
                <Stack spacing={90} direction='row' >
                    <Stack spacing={2} direction='column' className='reserved-app' >
                        <div className="doctor-name">
                            <Stack spacing={2} direction='row'>
                                <p>Doctor : </p>
                                <p>Tamer hani</p>
                            </Stack>
                        </div>
                        <div className="appointment">
                            <Stack spacing={2} direction='row'>
                                <p>Appointment : </p>
                                <Button variant='text' className='hour'>03:00 AM</Button>
                            </Stack>
                            <Button variant="text" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                Attached X-Rays
                            </Button>
                        </div>
                    </Stack>
                    <Stack direction='row'>
                        <div className='cancel-reservation-btn-cont'>
                            <button className='cancel-reservation-btn'>cancel</button>
                        </div>
                    </Stack>
                </Stack>
                <Divider />
                <Stack spacing={90} direction='row' >
                    <Stack spacing={2} direction='column' className='reserved-app' >
                        <div className="doctor-name">
                            <Stack spacing={2} direction='row'>
                                <p>Doctor : </p>
                                <p>Tamer hani</p>
                            </Stack>
                        </div>
                        <div className="appointment">
                            <Stack spacing={2} direction='row'>
                                <p>Appointment : </p>
                                <Button variant='text' className='hour'>03:00 AM</Button>
                            </Stack>
                            <Button variant="text" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                Attached X-Rays
                            </Button>
                        </div>
                    </Stack>
                    <Stack direction='row'>
                        <div className='cancel-reservation-btn-cont'>
                            <button className='cancel-reservation-btn'>cancel</button>
                        </div>
                    </Stack>
                </Stack>
                <Divider />
                <Stack spacing={90} direction='row' >
                    <Stack spacing={2} direction='column' className='reserved-app' >
                        <div className="doctor-name">
                            <Stack spacing={2} direction='row'>
                                <p>Doctor : </p>
                                <p>Tamer hani</p>
                            </Stack>
                        </div>
                        <div className="appointment">
                            <Stack spacing={2} direction='row'>
                                <p>Appointment : </p>
                                <Button variant='text' className='hour'>03:00 AM</Button>
                            </Stack>
                            <Button variant="text" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                Attached X-Rays
                            </Button>
                        </div>
                    </Stack>
                    <Stack direction='row'>
                        <div className='cancel-reservation-btn-cont'>
                            <button className='cancel-reservation-btn'>cancel</button>
                        </div>
                    </Stack>
                </Stack>
                <Divider />
            </div> 
            :
            <div className="empty-page">
                <img src={emptyPage} alt="no data"/>
            </div>
            }
        </div>
    );
};

export default PatientReservedAppointment;