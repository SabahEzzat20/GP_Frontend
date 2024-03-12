import React from 'react';
import Stack from '@mui/material/Stack';
import patientsData from '../../../DummyData/PatientsDetails.json'
import PatientDetailsForDoctor from '../PatientDetailsForDoctor/PatientDetailsForDoctor';
import './PatientsQueue.scss'
const PatientQueue = () => {
    return (
        <div className='patients-preview-container'>
            <Stack direction="column" spacing={2}>
                {patientsData.map((patient) => (
                    <PatientDetailsForDoctor key={patient.id} patient={patient} />
                ))}
            </Stack>
        </div>
    );
};

export default PatientQueue;