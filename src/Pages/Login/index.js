import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../context/Auth/useAuth'
import { Form, Button, Card } from 'react-bootstrap'
import jwtDecode from 'jwt-decode';

import './Login.css'

const Login = () => {

  const role = [ 'admin','superadmin','contentmanager']

  const getRandomRole = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleCallBack = (res) => {
    console.log('res', jwtDecode(res.credential));
    const credential = jwtDecode(res.credential);
    const details = {
      profileImg:credential.picture,
      profileName:credential.name,
    }
    const randomRole = getRandomRole(role)
    login(credential.jti,details, randomRole)
    navigate("/")
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallBack
    });
    google.accounts.id.renderButton(
      document.getElementById("login_div"),
      { theme: "outline", size: "large" }
    )
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <Container fluid style={{background:'#f8f8f8'}}>
      <div className='login-div-cont'>
        <Card style={{ width: '20rem', marginBottom: '2rem' }}>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Welcome Back</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword5"
                  />
                </Form.Group>
              </Form>
            </Card.Text>
            <Button variant="primary" type='submit' className='submit-button' onClick={handleClick}>Login</Button>
          </Card.Body>
        </Card>

        <GoogleLogin
          onSuccess={credentialResponse => {
            const credential = jwtDecode(credentialResponse.credential);
            const details = {
              profileImg:credential.picture,
              profileName:credential.name,
            }
            const randomRole = getRandomRole(role)
            login(credential.jti,details,randomRole)
            navigate('/')
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          scope={["email", "profile"]}
        />
        <div id="login_div">
        </div>
      </div>
    </Container>
  )
}

export default Login


