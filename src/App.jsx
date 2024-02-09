import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { DashboardSidebar } from './AdminModule/DashboardSidebar.jsx';
//import LoginForm from './Shared/LoginForm';

//import Navbar from "./DoctorModule/Navbar";

export const App = () => {
  return (
    <div className="App">
     <DashboardSidebar />
     <Outlet />
    </div>
  );
};
