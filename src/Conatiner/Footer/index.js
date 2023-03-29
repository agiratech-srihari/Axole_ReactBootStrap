import React from 'react'
import { Container } from 'react-bootstrap'
import CardComponent from '../../components/CardContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'
import './Footer.css'
const index = () => {
  return (
    <>
    <Container fluid className='footer-cont-col'>
        <CardComponent />
    </Container>
    <Container fluid className='footer-cont-col-f'>
        <h3 className='footer-final-text'>Copyright ©2023 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart}/> by <span>Colorlib</span></h3>
    </Container>
    </>
  )
}

export default index