import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/';
import "./Layout.css"

function LayoutPage() {
  return (
   <div className='layoutContainer'>
    {/* <Navbar /> */}
    <Outlet />
   </div>
  );
}

export default LayoutPage;