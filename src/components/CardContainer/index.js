import Axole from "../CardComponent/Axole";
import Explore from "../CardComponent/Explore";
import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import RecentPost from "../CardComponent/RecentPost";
import Question from "../CardComponent/Question";
const index = () => {
  return (
    <Container>
        <Row>
            <Col lg={3}>
                <Axole/>
            </Col>
            <Col lg={2}>
                <Explore/>
            </Col>
            <Col lg={4}>
                <RecentPost/>
            </Col>
            <Col lg={3}>
                <Question/>
            </Col>
        </Row>
    </Container>
  )
}

export default index