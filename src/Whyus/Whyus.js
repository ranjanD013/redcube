import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Whyus = () => {
  return (
    <div>
      <section className='whyus'>
            <Container>
                <Row>
                <Col lg={12}> <h2> Why us</h2>  </Col>
                    
                    <Col lg={12}>  
                        <div className='WhyusBox'>
                            <h2>Take the Plunge, Dive into Digital</h2>
                            <p>We will make you a home online! Sounds Good, right?</p>
                            <p>A decade of Experience to build a disruptive <br/>Digital Marketing Agency</p>
                            <p>That combines the basic concepts with forward thinking for start-ups & established alike. </p>
                            
                        </div>
                    </Col>
                </Row>
            </Container> 
     </section>



    </div>
  )
}

export default Whyus
