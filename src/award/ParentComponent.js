

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageRow from './ImageRow';
const ParentComponent = () => {
  const images = [    
    'images/award01.png',
    'images/award02.png',
    'images/award03.png',
    'images/award04.png',
    'images/award05.png',
    // Add more image URLs here
  ];

  return (
         
    <div className="awardtop">
        <Container>
            <Row>
                <Col lg={12}>                              
                        <ImageRow imageUrls={images} />   
                </Col>
            </Row>
        </Container>
    </div>
      
     
      
    
  );
};

export default ParentComponent;
