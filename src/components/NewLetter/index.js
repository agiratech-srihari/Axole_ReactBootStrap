import React from 'react'
import { Container } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap'
import './NewLetter.css'


const index = () => {
  return (
    <Container>
        <h3 className='news-header'>
        Newsletter - Stay tune and get the latest update
        </h3>
        <p className='news-content'>
        Far far away, behind the word mountains
        </p>
        <Form>
      <Form.Group className="mb-3 news-input" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email address" />
      <Button variant="primary" type="submit" className="submit-button"> 
        Subscribe
      </Button>
      </Form.Group>
    </Form>

    </Container>
  )
}

export default index