import React , { Suspense }from 'react'
import loadingGif from '../assets/images/1487.gif';
import useAuth from '../context/Auth/useAuth';
import { Routes, Route, Navigate, Outlet} from "react-router-dom";
const Guest = React.lazy(() => import ('../Conatiner/GuestLayout') )
const Layout = React.lazy(() => import ('../Conatiner/Layout') )
const Home = React.lazy(() => import("../Pages/Home"));
const About = React.lazy(() => import("../Pages/About"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const Login = React.lazy(() => import("../Pages/Login"));
const Blog = React.lazy(() => import ("../Pages/Blog"))


const ProtectedRoute = (props) => {
  const {role, user} = useAuth();
  return (
    !!user?
    props?.requiredRole?.includes(role)
      ? <Outlet />
      :  <Navigate to="/"  replace /> :
      <Navigate to="auth/login"  replace /> 
  );
}

const RouteLayout = () => {
  return (
    <Suspense fallback={<div style={{ height: '100vh', width: "100%", overflow: "hidden", display: "flex", justifyContent: 'center', alignItems: 'center' ,background:'#fff'}}><img src={loadingGif} alt="my-gif" /></div>}>
      <Routes>
        <Route path='/auth' element={<Guest />}>
              <Route path="/auth" element={<Navigate to='/auth/login' replace />} />
              <Route path='/auth/login' element={<Login />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to='/home' replace />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path='/protected' element={<ProtectedRoute requiredRole={['admin']}/>} >
            <Route path='/protected' element={<Navigate to ='/protected/about' replace />} />
            <Route path='/protected/about' element={<About />} />
        </Route>
        <Route path='/protected' element={<ProtectedRoute requiredRole={['superadmin']}/>} >
            <Route path='/protected' element={<Navigate to ='/protected/contact' replace />} />
          <Route path='/protected/contact' element={<Contact />} /> 
        </Route>
        <Route path='/protected' element={<ProtectedRoute requiredRole={['contentmanager']}/>} >
            <Route path='/protected' element={<Navigate to ='/protected/blog' replace />} />
          <Route path='/protected/blog' element={<Blog />} /> 
        </Route>
      </Routes >
    </Suspense>
  )
}

export default RouteLayout