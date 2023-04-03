import React from 'react'
import './GridContainer.css'
import { Container, Row, Col } from 'react-bootstrap'
import GridImageCont from '../GridImageCont'
import GridCardCont from '../GridCardContainer'



const index = () => {
    const firstImage = 'https://preview.colorlib.com/theme/axole/images/image_1.jpg.webp';
    const secondImage = 'https://preview.colorlib.com/theme/axole/images/image_2.jpg.webp';
    const thirdImage = 'https://preview.colorlib.com/theme/axole/images/image_3.jpg.webp';
    const FourthImage = 'https://preview.colorlib.com/theme/axole/images/image_4.jpg.webp';
    const fifthImage = 'https://preview.colorlib.com/theme/axole/images/image_5.jpg.webp';
    const sixthImage = 'https://preview.colorlib.com/theme/axole/images/image_6.jpg.webp';
    const seventhImage = 'https://preview.colorlib.com/theme/axole/images/image_7.jpg.webp';
    return (
        <Container className='Grid-container'>
            <Row className='grid-div-conatiner'>
                <Col lg={7} xs={12}>
                        <GridImageCont img={firstImage} />
                </Col>
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
            </Row>
            <Row >
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
                <Col lg={7} xs={12}>

                        <GridImageCont img={secondImage} />

                </Col>
            </Row>
            <Row >
                <Col lg={7} xs={12}>

                        <GridImageCont img={thirdImage} />

                </Col>
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
            </Row>
            <Row >
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
                <Col lg={7} xs={12}>

                        <GridImageCont img={FourthImage} />

                </Col>
            </Row>
            <Row >
                <Col lg={7} xs={12}>

                        <GridImageCont img={fifthImage} />

                </Col>
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
            </Row>
            <Row >
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
                <Col lg={7} xs={12}>


                        <GridImageCont img={sixthImage} />

                </Col>
            </Row>
            <Row >
                <Col lg={7} xs={12}>
                        <GridImageCont img={seventhImage} />
                </Col>
                <Col lg={5} xs={12}>
                    <GridCardCont />
                </Col>
            </Row>
        </Container>

    )
}

export default index