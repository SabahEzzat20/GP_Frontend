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
import HomePage from './components/PatientComponents/HomePage/HomePage'
import ContactUs from './components/PatientComponents/ContactUs/ContactUs'
import Services from './components/PatientComponents/Services/Services'
import HomePage2 from './components/PatientComponents/HomePage2/HomePage2'
import Patient from './Pages/Patient'
export const routes = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/viewPatients",
        element: <ViewPatients />,
      },
      {
        path: "/admin/viewDoctors",
        element: <ViewDoctors />,
      },
      {
        path: "/admin/calendar",
        element: <FullCalender />,
      }
    ],
  },
  {
    path: "/doctor",
    element: <Doctor />,
    children: [
      {
        path: "/doctor/viewDoctorAppointments",
        element: <ViewDoctorAppointments />
      },
      {
        path: "/doctor/viewDoctorSchedule",
        element: <ViewDoctorSchedule />
      }
    ],
  },
  {
    path: "/patient",
    element: <Patient />,
    children: [
      {
        path: "/patient/homepage",
        element: <HomePage />
      },
      {
        path: "/patient/contact",
        element: <ContactUs />,
      },
      {
        path: "/patient/services",
        element: <Services />,
      },
      {
        path: "/patient/homepage2",
        element: <HomePage2 />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  
]);
