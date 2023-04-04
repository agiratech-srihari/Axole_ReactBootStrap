import { Outlet,Navigate } from 'react-router-dom'
import Navbar from '../Header';
import "./Layout.css"
import Footer from '../Footer'
import { useAuth } from "../../context/Auth/useAuth";

function LayoutPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>

  );
}

export default LayoutPage;