import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "./Pages/Admin";
import ViewPatients from './components/AdminComponents/ViewPatients/ViewPatients'
import ViewDoctors from './components/AdminComponents/ViewDoctors/ViewDoctors'
import FullCalender from './components/AdminComponents/FullCalendar/FullCalender'
import ViewDoctorAppointments from './components/DoctorComponents/ViewDoctorAppointments/ViewDoctorAppointments'
import ViewDoctorSchedule from './components/DoctorComponents/ViewDoctorSchedule/ViewDoctorSchedule'
import Doctor from "./Pages/Doctor";
import Register from './shared/Register/Register'
import LoginForm from './shared/LoginForm/LoginForm'
import BigForm from "./PatientsModule/BigForm.jsx";
import HomePage from './components/PatientComponents/HomePage/HomePage'
import ContactUs from './components/PatientComponents/ContactUs/ContactUs'
import Services from './components/PatientComponents/Services/Services'
import Patient from './Pages/Patient'
import DragDrop from "./components/PatientComponents/DragDrop/DragDrop.jsx";
import DoctorsPreview from "./components/PatientComponents/DoctorsPreview/DoctorsPreview.jsx";
import ResetPassword from "./shared/ResetPassword/ResetPassword.jsx";
import ProfilePage from "./components/PatientComponents/ProfilePage/ProfilePage.jsx";
export const routes = createBrowserRouter([{
        path: "/admin",
        element: < Admin / > ,
        children: [{
                path: "/admin/viewPatients",
                element: < ViewPatients / > ,
            },
            {
                path: "/admin/viewDoctors",
                element: < ViewDoctors / > ,
            },
            {
                path: "/admin/calendar",
                element: < FullCalender / > ,
            }
        ],
    },
    {
        path: "/doctor",
        element: < Doctor / > ,
        children: [{
                path: "/doctor/viewDoctorAppointments",
                element: < ViewDoctorAppointments / >
            },
            {
                path: "/doctor/viewDoctorSchedule",
                element: < ViewDoctorSchedule / >
            }
        ],
    },
    {
        path: "/patient",
        element: < Patient / > ,
        children: [{
                path: "/patient/doctors-preview",
                element: < DoctorsPreview / >
            },
            {
                path: "/patient/homepage",
                element: < HomePage / >
            },
            {
                path: "/patient/contact",
                element: < ContactUs / > ,
            },
            {
                path: "/patient/services",
                element: < Services / > ,
            },
            {
                path: "/patient/uploadXRay",
                element: < DragDrop / > ,
            }, {
                path: "/patient/profilePage",
                element: < ProfilePage / > ,
            }, {
                path: "/patient/bigForm",
                element: < BigForm / > ,
            }
        ],
    },
    {
        path: "/login",
        element: < LoginForm / > ,
    },
    {
        path: "/resetpassword",
        element: < ResetPassword / > ,
    },
    {
        path: "/register",
        element: < Register / > ,
    },

]);