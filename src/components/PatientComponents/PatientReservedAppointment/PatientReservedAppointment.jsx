import React from 'react';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import xray from '../../../images/hand-255x300.jpg'
import Stack from '@mui/material/Stack';
const PatientReservedAppointment = () => {
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };
    return (
        <div>
            <Stack spacing={3} direction='column'>
                <div className="doctor-name">
                    <Stack spacing={2} direction='row'>
                        <p>Doctor : </p>
                        <p>Tamer hani</p>
                    </Stack>
                </div>
                <div className="appointment">
                    <Stack spacing={2} direction='row'>
                        <p>Appointment : </p>
                        <Button variant='outlined' className='hour'>03:00 AM</Button>
                    </Stack>
                </div>
                <div className="attached-xray">
                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                        Attached X-Rays
                    </Button>
                </div>
                <div>
                    <Button variant="outlined">
                        cancel
                    </Button>
                </div>
            </Stack>
        </div>
    );
};

export default PatientReservedAppointment;