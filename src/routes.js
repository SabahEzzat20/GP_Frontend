import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ViewPatients from "./AdminModule/ViewPatients";
import ViewDoctors from "./AdminModule/ViewDoctors";
import { ViewNotifications } from "./DoctorModule/ViewNotifications";
import ViewDoctorSchedule from "./DoctorModule/ViewDoctorSchedule";
import ViewAppointments from "./AdminModule/ViewAppointments";
import ViewDoctorAppointments from "./DoctorModule/ViewDoctorAppointments";
import App from "./App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/viewPatients',
                element: <ViewPatients />
            },
            {
                path: '/viewDoctors',
                element: <ViewDoctors />
            },
            {
                path: '/viewAppointments',
                element: <ViewAppointments />
            },
            {
                path: '/viewDoctorAppointments',
                element: <ViewDoctorAppointments />
            },
            {
                path: '/viewDoctorSchedule',
                element: <ViewDoctorSchedule />
            },
            {
                path: '/viewNotifications',
                element: <ViewNotifications />
            },
        ]
    },
]);


