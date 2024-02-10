import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import UpperNav from './DoctorModule/UpperNav';
import { role } from './AdminModule/Sidebar';

export const App = () => {
  return (
    <div className="App">
      <Sidebar />
      {role === 2 ?
        
        <div className='right-side'>
          <>
            <UpperNav />
            <Outlet />
          </>
        </div>
        :
        <Outlet />
      }
    </div>
  );
}
