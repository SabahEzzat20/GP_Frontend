import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './AdminModule/Sidebar';
import UpperNav from './DoctorModule/UpperNav';
import { role } from './AdminModule/Sidebar';
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
>>>>>>> 13075eae4378e4e8533c66ad9a679f68ff8f03ea
