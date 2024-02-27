import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { Outlet } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Sidebar from './AdminModule/Sidebar';
// import role from './AdminModule/Sidebar'
import UpperNav from './DoctorModule/UpperNav';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
=======
//import Sidebar from './AdminModule/Sidebar';
//import UpperNav from './DoctorModule/UpperNav';
import ContactUs from "./PatientsModule/ContactUs";

export const App = () => {
  return (
    <div className="App">
      {/* <Sidebar />
      {Sidebar.role === 2 ?


>>>>>>> e09fd2b9d0300315dd3db105d357423861b81700
        <div className='right-side'>
          <>
            <UpperNav />
            <Outlet />
          </>
        </div>
<<<<<<< HEAD
        {/* :
        <Outlet /> */}
=======
        :
        <Outlet />
      } */}

      <ContactUs />
>>>>>>> e09fd2b9d0300315dd3db105d357423861b81700
    </div>
  );
}

export default App;


