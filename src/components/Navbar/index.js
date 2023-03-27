import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import {Row,Col} from "react-bootstrap"

const ResNavbar = () => {
  return (
    <Container fluid classname='Navbar-cont'>
      <Navbar collapseOnSelect fixed="Top" expand='sm' >
        <Container>
          <Row>
              <Col>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              </Col>
              <Col>
              <Navbar.Toggle aria-controls='responsive-nav-bar' />
              <Navbar.Collapse id='responsive-nav-bar'>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Col>

          </Row>
        </Container>
      </Navbar>
    </Container>
  )
}

export default ResNavbar