import React from 'react'
import { NavLink } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const ResNavbar = () => {
  const menuDate = [{
    path:'/',
    name:'Blog'
  },{
    path:'/about',
    name:'About'
  },{
    path:'/contact',
    name:'Contact'
  }]

  return (

    <Navbar  fixed="Top"  className='navbar' expand='lg'>
      <Container>
        <Navbar.Brand href="#home" className='brand'>Axole.</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-nav-bar' />
        <Navbar.Collapse id='responsive-nav-bar'>
          <Nav className="ms-auto">
              {menuDate.map((menu)=>(
                <NavLink to={menu.path} key={menu.name}>
                  <div className='list-item'>{menu.name}</div>
                </NavLink>
              ))}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default ResNavbar