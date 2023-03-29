import { Outlet } from 'react-router-dom'
import Navbar from '../Header';
import "./Layout.css"
import Footer from '../Footer'
function LayoutPage() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>

  );
}

export default LayoutPage;