import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from './AdminModule/DashboardSidebar';
import './App.css';

export const App = () => {
  return (
    <div className="App">
        <DashboardSidebar />
        <Outlet />
    </div>
  );
}
