import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { DashboardSidebar } from './AdminModule/DashboardSidebar.jsx';
//import LoginForm from './Shared/LoginForm';
import Register from './Shared/Register';
import LoginForm from "./Shared/LoginForm";
//import Navbar from "./DoctorModule/Navbar";

 const App = () => {
  return (
    <div className="App">
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
