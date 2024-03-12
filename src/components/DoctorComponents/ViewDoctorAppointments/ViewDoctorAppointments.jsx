import React from 'react';
import StatisticsBar from '../StatisticsBar/StatisticsBar';
import { Statistics } from '../../../DummyData/Statistics.jsx';
import Stack from '@mui/material/Stack';
import './ViewDoctorAppointments.scss'
import PatientQueue from '../PatientsQueue/PatientQueue.jsx';
import NextPatientDetails from '../NextPatientDetails/NextPatientDetails.jsx';
const ViewDoctorAppointments = () => {
    return (
        <div className='doc-app-container'>
            <Stack direction="row" spacing={2}>
                {Statistics.map((statistic) => (
                    <StatisticsBar key={statistic.id} statistic={statistic} />
                ))}
            </Stack>
            <Stack direction="row" spacing={10}>
                <div className="patients-preview">
                    <div className="patients-details-title">Patients Appointments</div>
                    <PatientQueue />
                </div>
                <div className="patients-preview">
                    <div className="patients-details-title">Next Patient Details</div>
                    <NextPatientDetails />
                </div>
            </Stack>
            
        </div>
    );
};

export default ViewDoctorAppointments;
