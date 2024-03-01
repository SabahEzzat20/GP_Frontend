import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { GrSchedule } from "react-icons/gr";

export const adminRoutes= [
    {
        path: '/viewDoctors',
        name: "doctors",
        icon: <FaUserDoctor />
    },
    {
        path: '/viewPatients',
        name: "patients",
        icon: <FaUserFriends/>
    },
    {
        path: '/viewAppointments',
        name: "appointments",
        icon: <GrSchedule/>
    },
];
