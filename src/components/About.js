import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InnerBanner from './InnerBanner';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
    
    <InnerBanner />
    <section>
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Aboutus</h2>
            <p>This is the content of Component 1.</p>
          </Col>
        </Row>
      </Container>
      </section>

       {/* Footer  */}
       <section >
        <Footer />
      </section>
    </>
  );
};

export default About;