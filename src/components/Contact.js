import React from 'react';
import InnerBanner from './InnerBanner';
import ClientsImage from '../Clients/ClientsImage';
import {  Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactForm from '../ContactForm/ContactForm'; 
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <>
      <InnerBanner />
      <div>


        <section>
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Contact us</h2>
              <p>This is the content of Component 1.</p>
            </Col>

            <Col lg={12}>
            <ContactForm />  
            </Col>
          </Row>
        </Container>
        
        </section>
      </div>

      {/* clients logo section  */}
      <section id="section4" className="section">
        <ClientsImage />
      </section>


       {/* Footer  */}
      <section >
        <Footer />
      </section>
    </>

  );
};

export default Contact;