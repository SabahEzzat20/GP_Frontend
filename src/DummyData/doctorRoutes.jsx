import React from 'react';
import doctor from '../images/medical-assistance.png'
import patient from '../images/patient.png'
import { AiOutlineSchedule } from "react-icons/ai";


export const doctorRoutes= [
    {
        path: '/viewDoctorAppointments',
        name: "Appointments",
        icon: <AiOutlineSchedule />
    },
    {
        path: '/viewDoctorSchedule',
        name: "schedule",
        icon: <AiOutlineSchedule />
    }
];

