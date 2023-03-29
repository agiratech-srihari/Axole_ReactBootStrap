import React from 'react'
import { Card } from 'react-bootstrap'
import './CardComponent.css'


const Explore = () => {
  return (
    <Card className='footer-card'>
    <Card.Body>
      <Card.Title className='footer-title'>EXPLORE</Card.Title>
      <Card.Text className='footer-link link-1'>→ About</Card.Text>
      <Card.Text className='footer-link'>→ Blog</Card.Text>
      <Card.Text className='footer-link'>→ Contact us</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Explore