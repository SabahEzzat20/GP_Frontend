import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {App} from "./App";
import ViewPatients from "./AdminModule/ViewPatients";
import ViewDoctors from "./AdminModule/ViewDoctors";
import ViewAppointments from "./AdminModule/ViewAppointments";

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
        ]
    },
]);


