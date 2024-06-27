import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "./Pages/Admin";
import ViewPatients from './components/AdminComponents/ViewPatients/ViewPatients'
import ViewDoctors from './components/AdminComponents/ViewDoctors/ViewDoctors'
import ViewDoctorAppointments from './components/DoctorComponents/ViewDoctorAppointments/ViewDoctorAppointments'
import Doctor from "./Pages/Doctor";
import Register from './shared/Register/Register'
import LoginForm from './shared/LoginForm/LoginForm'
import BigForm from './components/PatientComponents/BigForm/BigForm.jsx'
import HomePage from './components/PatientComponents/HomePage/HomePage'
import ContactUs from './components/PatientComponents/ContactUs/ContactUs'
import Services from './components/PatientComponents/Services/Services'
import Patient from './Pages/Patient'
import DragDrop from "./components/PatientComponents/DragDrop/DragDrop.jsx";
import DoctorsPreview from "./components/PatientComponents/DoctorsPreview/DoctorsPreview.jsx";
import ResetPassword from "./shared/ResetPassword/ResetPassword.jsx";
import PatientProfile from "./components/PatientComponents/PatientProfile/PatientProfile.jsx";
import NotFoundPage from "./shared/NotFoundPage/NotFoundPage.jsx";
import Guarantee from "./components/PatientComponents/Guarantee/Guarantee.jsx";
import ExperienceDoctors from "./components/PatientComponents/ExperienceDoctors/ExperienceDoctors.jsx";
import Footer from "./shared/Footer/Footer.jsx"
import ViewDetails from "./components/AdminComponents/ViewDoctors/ViewDetails.jsx";
import AdminRoutes from "./Middleware/AdminRoutes.jsx";
import DoctorRoutes from "./Middleware/DoctorRoutes.jsx";
import PatientRoutes from "./Middleware/PatientRoutes.jsx";

export const routes = createBrowserRouter([{
        element: <AdminRoutes /> ,
        children: [{
            path: "/admin",
            element: <Admin /> ,
            children: [{
                    path: "/admin/viewPatients",
                    element: <ViewPatients /> ,
                },
                {
                    path: "/admin/viewDoctors",
                    element: <ViewDoctors /> ,
                }
            ]
            }
        ]
    },
    {
        element: <DoctorRoutes /> ,
        children: [{
            path: "/doctor",
            element: <Doctor /> ,
            children: [{
                    path: "/doctor/viewDoctorAppointments",
                    element: <ViewDoctorAppointments />
                }
            ],
            }
        ],
    },
    {
        path: "/patient",
        element: <Patient /> ,
        children: [
            {
                path: "/patient/homepage",
                element: < HomePage />
            },
            {
                path: "/patient/services",
                element: < Services /> ,
            },{
                path: "/patient/details",
                element: < ViewDetails /> ,
            }, {
                path: "/patient/ExperienceDoctors",
                element: < ExperienceDoctors /> ,
            },
            {
                path: "/patient/guarantee",
                element: < Guarantee /> ,
            },
            {
                path: "/patient/uploadXRay",
                element: < DragDrop /> ,
            },
            {
                element: < PatientRoutes /> ,
                children: [
                    {
                        path: "/patient/bigForm",
                        element: < BigForm /> ,
                    },
                    {
                        path: "/patient/doctors-preview",
                        element: < DoctorsPreview />
                    },
                ]
            }
        ],
    },
    {
        path: "/login",
        element: < LoginForm /> ,
    },
    {
        path: "/resetpassword",
        element: < ResetPassword /> ,
    },
    {
        path: "/register",
        element: < Register /> ,
    },
    {
        element: <PatientRoutes />,
        children: [
            {
                path: "/patientprofile",
                element: <PatientProfile/> ,
            }
        ]
    },
    {
        path: "/contact",
        element: <> <ContactUs /> <Footer /> </> ,
    },
    {
        path: "*",
        element: < NotFoundPage />
    }

]);