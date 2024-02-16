import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { DashboardSidebar } from './AdminModule/DashboardSidebar.jsx';
//import LoginForm from './Shared/LoginForm';
import Register from './shared/Register';
import LoginForm from './shared/LoginForm';
//import Navbar from "./DoctorModule/Navbar";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import UpperNav from './DoctorModule/UpperNav';
import { role } from './AdminModule/Sidebar';

const App = () => {
  return (
    <div className="App">
{/* <<<<<<< HEAD
        <Router>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
======= */}
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
export default App;
