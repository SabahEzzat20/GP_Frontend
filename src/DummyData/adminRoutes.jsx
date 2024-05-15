import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";

export const adminRoutes= [
    {
        path: "/admin/viewDoctors",
        name: "doctors",
        icon: <FaUserDoctor />
    },
    {
        path: "/admin/viewPatients",
        name: "patients",
        icon: <FaUserFriends/>
    },
    // {
    //     path: "/admin/calendar",
    //     name: "appointments",
    //     icon: <GrSchedule/>
    // },
];
