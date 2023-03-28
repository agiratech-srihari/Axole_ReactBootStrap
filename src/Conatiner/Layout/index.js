import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import "./Layout.css"

function LayoutPage() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>

  );
}

export default LayoutPage;