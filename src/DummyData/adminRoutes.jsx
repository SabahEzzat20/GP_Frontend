import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
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

];
