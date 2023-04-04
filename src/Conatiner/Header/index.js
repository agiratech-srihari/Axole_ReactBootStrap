import React from 'react'
import { Button, Col, NavLink, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import useAuth from '../../context/Auth/useAuth';


const ResNavbar = () => {
  const {logout} = useAuth()


  const details = JSON.parse(localStorage.getItem('Details'));
  console.log(details.profileImg)

  const handleLogout = () => {
    logout()
  }
  const menuDate = [{
    path:'protected/blog',
    name:'Blog',
    active:true
  },{
    path:'protected/about',
    name:'About',
    active:false
  },{
    path:'protected/contact',
    name:'Contact',
    active:false
  }]

  return (

    <Navbar  fixed="Top"  className='navbar' expand='lg'>
      <Container>
        <Navbar.Brand href="#home" className='brand'>Axole.</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-nav-bar' />
        <Navbar.Collapse id='responsive-nav-bar' className="ms-auto" >
          <Nav className="ms-auto">
              {menuDate.map((menu)=>(
                <NavLink href={menu.path} key={menu.name} active={menu.active}>
                  <div className='list-item'>{menu.name}</div>
                </NavLink> 
              ))}
          </Nav>
        <Nav className='ms-auto'>
          <div className='flex-div'>
            <img src={details.profileImg} alt="profile-img"/>
            <p>{details.profileName}</p>
          </div>
              <Button onClick={handleLogout}>Logout</Button>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default ResNavbar