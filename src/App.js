import { Outlet } from 'react-router-dom';
// import { DashboardSidebar } from './AdminModule/DashboardSidebar';
import './App.css';
import Sidebar from './AdminModule/Sidebar';

export const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Outlet />
    </div>
  );
}
