import React from 'react';
import AddAppointmentCard from './AddAppointmentCard';

const ViewDoctorSchedule = () => {
    return (
        <div className="schedule-container" style={{ backgroundColor: 'rgb(201, 201, 201)', width: '100%', height: '90vh', margin: '0', padding:'20px'}}>
            <div>
                <AddAppointmentCard />
            </div>
        </div>
    );
};

export default ViewDoctorSchedule;