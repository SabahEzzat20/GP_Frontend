import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import UpperNav from './DoctorModule/UpperNav';
//import FullCalender from "./AdminModule/FullCalender";

export const App = () => {
  return (
    <div className="App">
      <Sidebar />
        <div className='right-side'>
          <>
            <UpperNav />
            <Outlet />
          </>
        </div>
      
      


    </div>
  );
}

export default App;


