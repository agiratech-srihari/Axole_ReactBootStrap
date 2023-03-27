import React , { Suspense }from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
const Layout = React.lazy(() => import ('../Conatiner/Layout') )
const Home = React.lazy(() => import("../Pages/Home"));
const About = React.lazy(() => import("../Pages/About"));
const Contact = React.lazy(() => import("../Pages/Contact"));

const RouteLayout = () => {
  return (
    <Suspense fallback={<div style={{ height: '100vh', width: "100%", overflow: "hidden", display: "flex", justifyContent: 'center', alignItems: 'center' }}>Loading ...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to='/home' replace />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes >
    </Suspense>
  )
}

export default RouteLayout