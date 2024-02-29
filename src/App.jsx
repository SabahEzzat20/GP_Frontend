import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
<<<<<<< HEAD
import UpperNav from './DoctorModule/UpperNav';
//import FullCalender from "./AdminModule/FullCalender";
=======
// import role from './AdminModule/Sidebar'
import UpperNav from './DoctorModule/UpperNav';
>>>>>>> bf34d87c2876bd5e5a65a21ab2e3bd52f3a03df3

const App = () => {
  return (
    <div className="App">
      <Sidebar />
        <div className='right-side'>
          <>
            {/* <UpperNav /> */}
            <Outlet />
          </>
        </div>
<<<<<<< HEAD
      
      

=======
>>>>>>> bf34d87c2876bd5e5a65a21ab2e3bd52f3a03df3

    </div>
  );
}

export default App;


