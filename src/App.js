import { Outlet } from 'react-router-dom';
// import { DashboardSidebar } from './AdminModule/DashboardSidebar';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import DragDrop from './PatientsModule/DragDrop';

export const App = () => {
  return (
    <div className="App">
      {/* <DragDrop /> */}
      <Sidebar />
      <Outlet />
    </div>
  );
}
