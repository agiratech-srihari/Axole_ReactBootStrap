import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './GridCardCont.css'
import Parallax from 'react-rellax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComment, faUser } from '@fortawesome/fontawesome-free-solid'
const index = () => {
    return (
        <Container className='card-container'>
            <Parallax speed={5} className="parallax-cont">

                <Card className="card-cont">
                    <Card.Body className='card-body'>
                        <Card.Subtitle className='icon-cont'>
                            <div className='div-flex'>
                            <p className='icon-content'><FontAwesomeIcon icon={faUser}  className='icon-color'/> ADMIN</p>
                            <p className='icon-content'><FontAwesomeIcon icon={faCalendarAlt} className='icon-color' /> JAN. 30,2021</p>
                            <p className='icon-content'><FontAwesomeIcon icon={faComment} className='icon-color' /><span className='icon-color'> 3 COMMENTS</span></p>
                            </div>
                        </Card.Subtitle>
                        <Card.Title className='card-title-h1'>Writing A Novel with A Heart</Card.Title>
                        <Card.Text className='card-content'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </Card.Text>
                        <Card.Link href="#" className='card-link'>LEARN MORE →</Card.Link>
                    </Card.Body>
                </Card>

            </Parallax>
         </Container>
    )
}

export default index;



