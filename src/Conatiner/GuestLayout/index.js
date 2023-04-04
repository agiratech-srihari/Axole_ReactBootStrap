import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet,Navigate } from 'react-router-dom'
import useAuth from "../../context/Auth/useAuth";

const GuestLayout = () => {
    const {user} = useAuth()

    if (user) {
        return <Navigate to="/" replace />;
      }

  return (
    <Container fluid>
        <Outlet/>
    </Container>

  )
}

export default GuestLayout;
