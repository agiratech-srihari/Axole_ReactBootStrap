import React from 'react'
import { NavLink } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


const ResNavbar = () => {
  const menuDate = [{
    path:'/',
    name:'Blog',
    active:true
  },{
    path:'/about',
    name:'About',
    active:false
  },{
    path:'/contact',
    name:'Contact',
    active:false
  }]

  return (

    <Navbar  fixed="Top"  className='navbar' expand='lg'>
      <Container>
        <Navbar.Brand href="#home" className='brand'>Axole.</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-nav-bar' />
        <Navbar.Collapse id='responsive-nav-bar'>
          <Nav className="ms-auto">
              {menuDate.map((menu)=>(
                <NavLink href={menu.path} key={menu.name} active={menu.active}>
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