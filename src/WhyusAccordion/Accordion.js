import React, { useState } from 'react';
import './Accordion.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className='whyus'>
            <Container>
                <Row>
                <Col lg={12}> <h2> Why us</h2>  </Col>
                    
                    <Col lg={12}>
                      <div className='WhyusBox'>
                        <div className="accordion">
                          {items.map((item, index) => (
                              <div
                              key={index}
                              className={`accordion-item ${index === activeIndex ? 'active' : ''}`}
                              onClick={() => handleClick(index)}
                              >
                              

                                  <div className="accordion-header">{item.title}</div>
                                  <div className="accordion-content">

                                  
                              
                                  {item.content}
                              </div>
                              </div>
                          ))}
                        </div>                        
                      </div>
                        
                    </Col>
                </Row>
            </Container> 
     </div>
    </>
    
  );
};

export default Accordion;
