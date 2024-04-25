import React from 'react';
import Stack from '@mui/material/Stack';
import DoctorPreview from '../DoctorPreivew/DoctorPreview';
import './DoctorsPreview.scss'
import doctorsData from '../../../DummyData/DoctorPreview.json';
const DoctorsPreview = () => {

    return (
        <div className='doctors-preview-container'>
            {doctorsData.map((doctor) => {
                return (<DoctorPreview key={doctor.id} doctor={doctor} />)
            })}
        </div>
    );
};

export default DoctorsPreview;