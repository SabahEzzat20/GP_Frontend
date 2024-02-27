import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
// import role from './AdminModule/Sidebar'
import UpperNav from './DoctorModule/UpperNav';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
        <div className='right-side'>
          <>
            <UpperNav />
            <Outlet />
          </>
        </div>
        {/* :
        <Outlet /> */}
    </div>
  );
}
export default App;
