import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import ViewPatients from "./AdminModule/ViewPatients";
import ViewDoctors from "./AdminModule/ViewDoctors";
import ViewAppointments from "./AdminModule/ViewAppointments";
import ViewDoctorAppointments from "./DoctorModule/ViewDoctorAppointments";
import ViewPatientsReservations from "./DoctorModule/ViewPatientsReservations";
import { ViewNotifications } from "./DoctorModule/ViewNotifications";
import LoginForm from "./Shared/LoginForm";
import Register from "./Shared/Register";
import Services from "./PatientsModule/Services";
import HomePage from "./PatientsModule/HomePage";
import HomePage2 from "./PatientsModule/HomePage2";

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
        path: "/viewAppointments",
        element: <ViewAppointments />,
      },
      {
        path: "/viewDoctorAppointments",
        element: <ViewDoctorAppointments />,
      },
      {
        path: "/viewPatientsReservations",
        element: <ViewPatientsReservations />,
      },
      {
        path: "/viewNotifications",
        element: <ViewNotifications />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Register />,
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
]);
