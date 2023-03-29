import React from 'react'
import { Container } from 'react-bootstrap'
import './GridImageCont.css'

import { ParallaxBanner } from 'react-scroll-parallax';

const GridImageCont = (props) => {

    const imageurl = props.img
    return (

        <Container className='image-container'>
    <ParallaxBanner
      layers={[{ image: imageurl, speed: -15 }]}
      className="full img-div"
    />
        </Container>
    )
}

export default GridImageCont