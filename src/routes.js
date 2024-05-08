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
import PatientProfile from "./components/PatientComponents/PatientProfile/PatientProfile.jsx";
import EditPatientProfile from "./components/PatientComponents/EditPatientProfile/EditPatientProfile.jsx";
import PatientHistory from "./components/PatientComponents/PatientHistory/PatientHistory.jsx";
import PatientReservedAppointment from "./components/PatientComponents/PatientReservedAppointment/PatientReservedAppointment.jsx";
import NotFoundPage from "./shared/NotFoundPage/NotFoundPage.jsx";

import Guarantee from "./components/PatientComponents/Guarantee/Guarantee.jsx";
import About from "./components/PatientComponents/About/About.jsx";
import ExperienceDoctors from "./components/PatientComponents/ExperienceDoctors/ExperienceDoctors.jsx";

import Footer from "./shared/Footer/Footer.jsx"

export const routes = createBrowserRouter([{
        path: "/admin",
        element: <Admin /> ,
        children: [{
                path: "/admin/viewPatients",
                element: <ViewPatients /> ,
            },
            {
                path: "/admin/viewDoctors",
                element: <ViewDoctors /> ,
            },
            {
                path: "/admin/calendar",
                element: <FullCalender /> ,
            }
        ],
    },
    {
        path: "/doctor",
        element: < Doctor / > ,
        children: [{
                path: "viewDoctorAppointments/doctor/",
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
        element: <Patient /> ,
        children: [{
                path: "/patient/doctors-preview",
                element: <DoctorsPreview />
            },
            {
                path: "/patient/homepage",
                element: <HomePage />
            },
            {
                path: "/patient/services",
                element: <Services /> ,
            }, {
                path: "/patient/about",
                element: <About /> ,
            },
            {
                path: "/patient/ExperienceDoctors",
                element: <ExperienceDoctors /> ,
            },
            {
                path: "/patient/guarantee",
                element: <Guarantee /> ,
            },
            {
                path: "/patient/uploadXRay",
                element: <DragDrop /> ,
            },
            {
                path: "/patient/bigForm",
                element: <BigForm /> ,
            }
        ],
    },
    {
        path: "/login",
        element: <LoginForm /> ,
    },
    {
        path: "/resetpassword",
        element: <ResetPassword /> ,
    },
    {
        path: "/register",
        element: <Register /> ,
    },
    {
        path: "/patientprofile/:patientId",
        element: <PatientProfile/> ,
    },
    {
        path: "/contact",
        element: <> <ContactUs/> <Footer/> </> ,
    },
    {
        path: "*",
        element: <NotFoundPage />
    }

]);