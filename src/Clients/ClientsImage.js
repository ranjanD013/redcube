import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from './Clients';

const ClientsImage = () => {
  const images = [    
    'images/client1.png',
    'images/client2.png',
    'images/client3.png',
    'images/client4.png',
    'images/client5.png',
    'images/client6.png',
    'images/client7.png',
    'images/client8.png',
    'images/client9.png',
    'images/client10.png',
    'images/client11.png',
    'images/client12.png',
    'images/client13.png',
    'images/client14.png',
    'images/client15.png',
    'images/client16.png',
    'images/client17.png',
    'images/client18.png',
    'images/client19.png',
    'images/client20.png',
    'images/client21.png',
    'images/client22.png',
    'images/client23.png',
    'images/client24.png',
    'images/client25.png',
    'images/client26.png',
    'images/client27.png',
    'images/client28.png',
    'images/client29.png',
    'images/client30.png',
  
    // Add more image URLs here
  ];

  return (
         
    <>
         <Container>
            <Row>
                <Col lg={12}>                              
                        <Clients imageUrls={images} />  
                        <div className='helpline'>                             
                <a href='#' className='bttn1 bttn2'> more clients </a>
            </div>  
                </Col>
            </Row>
        </Container>
    </>
            
     
      
    
  );
};

export default ClientsImage;
