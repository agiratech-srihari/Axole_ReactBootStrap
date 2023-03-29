import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap,faPhone,faPaperPlane } from '@fortawesome/fontawesome-free-solid'

const Question = () => {
  return (
    <Card className='footer-card'>
    <Card.Body>
      <Card.Title className='footer-title'>HAVE A QUESTION?</Card.Title>
      <Card.Text className="footer-text-content">
        <div className='icon-flex-footer'>
        <FontAwesomeIcon icon={faMap} className='footer-icon-content icon-size' />
        <h6 className='footer-h6'>203 Fake St. Mountain View, San Francisco, California, USA</h6>
        </div>
        <div className='icon-flex-footer'>
        <FontAwesomeIcon icon={faPhone} className='footer-icon-content icon-size'/>
        <h6 className='footer-h6'>+2 392 3929 210</h6>
        </div>
        <div className='icon-flex-footer'>
        <FontAwesomeIcon icon={faPaperPlane} className='footer-icon-content icon-size'/>
        <h6 className='footer-h6'>info@yourdomain.com</h6>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Question