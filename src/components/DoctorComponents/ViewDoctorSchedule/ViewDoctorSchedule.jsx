import React from 'react';
import AddAppointmentCard from '../AddAppointmentCard/AddAppointmentCard';
import './DoctorSchedule.scss'
import TodayCalendar from '../TodayCalendar/TodayCalendar';
import { Stack } from '@mui/material';
const ViewDoctorSchedule = () => {
    return (
        <div className="schedule-container" style={{ backgroundColor: 'rgb(201, 201, 201)', width: '100%', height: '90vh', margin: '0', padding:'20px'}}>
            <Stack direction='row' spacing={4}>
                <div>
                    <AddAppointmentCard />
                </div>
                <div className="">
                    <TodayCalendar />
                </div>
            </Stack>
        </div>
    );
};

export default ViewDoctorSchedule;