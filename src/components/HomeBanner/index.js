import React from 'react'
import { Container } from 'react-bootstrap';
import './HomeBanner.css'
import{Row,Col} from 'react-bootstrap';

const MainBanner = () => {
    return (
        <Container className='homeban-cont'>
            <Row>

            <Col lg={4} md={0}> 
            </Col>
            <Col lg={8} md={12}>
            <div className='content-wrap'>
                <p className='home-text'>A PERSONAL BLOG</p>
                <span className='text-underline'></span>
            </div>
            <h1 className='header-text'>A<span className='color-changer'>xol</span>e.</h1>
            <p className='about-content'> I am a Blogger & Photographer Based in Philliphines</p>
            
            </Col>
            </Row>
        </Container>
    )
}

export default MainBanner