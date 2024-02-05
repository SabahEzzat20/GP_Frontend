import { Outlet } from 'react-router-dom';
// import { DashboardSidebar } from './AdminModule/DashboardSidebar';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import DragDrop from './PatientsModule/DragDrop';
import Navbar from './DoctorModule/Navbar';

export const App = () => {
  return (
    <div className="App">
      {/* <DragDrop /> */}
      {/* <Sidebar />
      <Outlet /> */}
      <Navbar />
    </div>
  );
}
