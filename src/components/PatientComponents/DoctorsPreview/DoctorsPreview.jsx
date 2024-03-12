import React from 'react';
import Stack from '@mui/material/Stack';
import DoctorPreview from '../DoctorPreivew/DoctorPreview';
import './DoctorsPreview.scss'
import doctorsData from '../../../DummyData/DoctorPreview.json';
const DoctorsPreview = () => {
    return (
        <div className='doctors-preview-container'>
            <Stack direction="column" spacing={2}>
                    {doctorsData.map((doctor) => {
                        console.log('Doctor Profile Photo:', doctor.profilePhoto)
                        return (<DoctorPreview key={doctor.id} doctor={doctor} />)
                    })}
            </Stack>
        </div>
    );
};

export default DoctorsPreview;