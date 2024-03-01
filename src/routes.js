import React from "react";
import { createBrowserRouter } from "react-router-dom";
import  App  from "./App";
import ViewPatients from "./AdminModule/ViewPatients";
import ViewDoctors from "./AdminModule/ViewDoctors";
import ViewDoctorAppointments from "./DoctorModule/ViewDoctorAppointments";
// import { ViewNotifications } from "./DoctorModule/ViewNotifications";
import Services from "./PatientsModule/Services";
import HomePage from "./PatientsModule/HomePage";
import HomePage2 from "./PatientsModule/HomePage2";
import ContactUs from "./PatientsModule/ContactUs";
import FullCalender from "./AdminModule/FullCalender";
import LoginForm from "./shared/LoginForm";
import Register from './shared/Register';
// import Test from './AdminModule/Test';
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/viewPatients",
        element: <ViewPatients />,
      },
      {
        path: "/viewDoctors",
        element: <ViewDoctors />,
      },
      {
        path: "/fullCalender",
        element: <FullCalender />,
      },
      {
        path: "/viewDoctorAppointments",
        element: <ViewDoctorAppointments />,
      },
      {
        path: "/calendar",
        element: <FullCalender />,
      }
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
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/homepage2",
    element: <HomePage2 />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  
]);
