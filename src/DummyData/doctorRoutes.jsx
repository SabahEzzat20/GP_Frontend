import React from 'react';
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineSchedule } from "react-icons/md";


export const doctorRoutes= [
    {
        path: '/doctor/viewDoctorAppointments',
        name: "Appointments",
        icon: <MdOutlineSchedule />
    },
    {
        path: '/doctor/viewDoctorSchedule',
        name: "schedule",
        icon: <AiOutlineSchedule />
    }
];

