import React from 'react';
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineSchedule } from "react-icons/md";


export const doctorRoutes= [
    {
        path: '/viewDoctorAppointments',
        name: "Appointments",
        icon: <MdOutlineSchedule />
    },
    {
        path: '/viewDoctorSchedule',
        name: "schedule",
        icon: <AiOutlineSchedule />
    }
];

