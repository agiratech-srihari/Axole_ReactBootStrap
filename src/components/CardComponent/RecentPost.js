import React from 'react'
import { Card } from 'react-bootstrap'
import FooterImg from '../FooterImg'
const RecentPost = () => {
  return (
    <Card className='footer-card'>
    <Card.Body>
      <Card.Title className='footer-title'>RECENT POST</Card.Title>
      <Card.Text >
        <FooterImg/>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default RecentPost