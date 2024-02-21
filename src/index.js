import React from 'react';
import ViewPatients from "./AdminModule/ViewPatients";
import ViewDoctors from "./AdminModule/ViewDoctors";
import { ViewNotifications } from "./DoctorModule/ViewNotifications";
import ViewDoctorSchedule from "./DoctorModule/ViewDoctorSchedule";
import ViewAppointments from "./AdminModule/ViewAppointments";
import ViewDoctorAppointments from "./DoctorModule/ViewDoctorAppointments";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
)