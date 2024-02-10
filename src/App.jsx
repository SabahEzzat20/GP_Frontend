<<<<<<< HEAD
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { DashboardSidebar } from './AdminModule/DashboardSidebar.jsx';
//import LoginForm from './Shared/LoginForm';
import Register from './Shared/Register';
import LoginForm from "./Shared/LoginForm";
//import Navbar from "./DoctorModule/Navbar";
=======
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import UpperNav from './DoctorModule/UpperNav';
import { role } from './AdminModule/Sidebar';
>>>>>>> cd1219a4badd8f811770a18c010e875e46ca691e

 const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
        <Router>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
=======
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
>>>>>>> cd1219a4badd8f811770a18c010e875e46ca691e
