import { Outlet } from 'react-router-dom';
// import { DashboardSidebar } from './AdminModule/DashboardSidebar';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import DragDrop from './PatientsModule/DragDrop';
import Navbar from './DoctorModule/Navbar';

export const App = () => {
<<<<<<< HEAD
    return ( <
        div className = "App" > { /* <DragDrop /> */ } {
            /* <Sidebar />
                  <Outlet /> */
        } <
        Navbar / >
        <
        /div>
    );
}
=======
  return (
    <div className="App">
      <DragDrop />
      {/* <Sidebar />
      <Outlet /> */}
      {/* <Navbar /> */}
    </div>
  );
}
>>>>>>> 13075eae4378e4e8533c66ad9a679f68ff8f03ea
