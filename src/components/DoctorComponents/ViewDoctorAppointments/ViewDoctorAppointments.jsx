import React from 'react';
import StatisticsBar from '../StatisticsBar/StatisticsBar';
import { Statistics } from '../../../DummyData/Statistics.jsx';
import Stack from '@mui/material/Stack';
import './ViewDoctorAppointments.scss'
const ViewDoctorAppointments = () => {
    return (
        <div className='doc-app-container'>
            <Stack direction="row" spacing={2}>
                {Statistics.map((statistic) => (
                    <StatisticsBar key={statistic.id} statistic={statistic} />
                ))}
            </Stack>
        </div>
    );
};

export default ViewDoctorAppointments;
