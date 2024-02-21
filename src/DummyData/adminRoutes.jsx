import React from 'react';
import doctor from '../images/medical-assistance.png'
import patient from '../images/patient.png'
import appointment from '../images/medical.png'

export const adminRoutes= [
    {
        path: '/viewDoctors',
        name: "doctors",
        icon: <img src={doctor} alt="doctor" width={25} height={25}/>
    },
    {
        path: '/viewPatients',
        name: "patients",
        icon: <img src={patient} alt="patient" width={25} height={25}/>
    },
    {
        path: '/viewAppointments',
        name: "appointments",
        icon: <img src={appointment} alt="appointment" width={25} height={25}/>
    },
];
