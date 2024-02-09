//import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { DashboardSidebar } from './AdminModule/DashboardSidebar.jsx';
//import LoginForm from './Shared/LoginForm';
import Register from './Shared/Register.jsx';
//import Navbar from "./DoctorModule/Navbar";

export const App = () => {
  return (
    <div className="App">
        <Register />
    </div>
  );
};
