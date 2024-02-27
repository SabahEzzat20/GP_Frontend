import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { Outlet } from 'react-router-dom';
import './App.css';
//import Sidebar from './AdminModule/Sidebar';
//import UpperNav from './DoctorModule/UpperNav';
import ContactUs from "./PatientsModule/ContactUs";

export const App = () => {
  return (
    <div className="App">
      {/* <Sidebar />
      {Sidebar.role === 2 ?


        <div className='right-side'>
          <>
            <UpperNav />
            <Outlet />
          </>
        </div>
        :
        <Outlet />
      } */}

      <ContactUs />
    </div>
  );
}

export default App;


