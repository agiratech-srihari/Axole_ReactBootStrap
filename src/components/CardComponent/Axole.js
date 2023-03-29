import React from 'react'
import Card from 'react-bootstrap/Card';
import './CardComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Axole = () => {
  return (
    <Card className='footer-card'>
    <Card.Body>
      <Card.Title className='footer-title'>AXOLE.</Card.Title>
      <Card.Text className='footer-text'>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Text>
        <div className='icon-flex-footer'>
        <FontAwesomeIcon className='icon-design' icon={faTwitter} />
        <FontAwesomeIcon className='icon-design' icon={faFacebookF} />
        <FontAwesomeIcon className='icon-design' icon={faInstagram} />
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Axole