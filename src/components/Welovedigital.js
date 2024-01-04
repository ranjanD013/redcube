import React from 'react'
import wedigital from '../assets/images/wedigital.png';
import arrow2 from '../assets/images/arrow2.png';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welovedigital() {
  return (
    <>

<div className='welovedigi'>
    <Container>
        <Row>
            <Col lg={6} className='px-3 pt-5'>  
                    <img className="" src={wedigital} alt="" />
            </Col>

            <Col lg={6}>  
                <div className='textBoxdigi'>
                    <h2>Take the Plunge, Dive into Digital</h2>
                    <p>We will make you a home online! Sounds Good, right?</p>
                    <p>A decade of Experience to build a disruptive <br/>Digital Marketing Agency</p>
                    <p>That combines the basic concepts with forward thinking for start-ups & established alike. </p>
                    <img className="" src={arrow2} alt="" />
                </div>
            </Col>
        </Row>
    </Container> 
</div>
      
    </>
  )
}

export default Welovedigital;
