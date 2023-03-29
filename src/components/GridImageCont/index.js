import React from 'react'
import { Container } from 'react-bootstrap'
import './GridImageCont.css'
import Parallax from 'react-rellax'


const index = (props) => {
    const imageurl = props.img
    return (
        <Container className='image-container'>
            <Parallax as='img' speed={5} className="img parallax-cont" src={imageurl}>
            </Parallax>
        </Container>
    )
}

export default index