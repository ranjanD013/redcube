// Footer.js
import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="footer">
         <Container>
                <Row>
                  <Col lg={4}>   
                    <Newsletter/>
                  
                  </Col>
                  <Col lg={3}>   
                    <ul className='footer-column'>
                        <li><a href="#link1">About us</a></li>
                        <li><a href="#link2">life@redcubedigital</a></li>
                        <li><a href="#link3">Career </a></li>
                        <li><a href="#link4">How we work </a></li>
                        <li><a href="#link5">We are Hiring </a></li>
                        <li><a href="#link6">Let's Talk </a></li>
                        <li><a href="#link7">Blog </a></li> 
                    </ul>
                  
                  </Col>
                  <Col lg={2}>  
                    <ul className='footer-column2'>
                      <li><a href="#link1">Services </a></li>
                      <li><a href="#link1">Social </a></li>
                      <li><a href="#link1">Online Ads </a></li>
                      <li><a href="#link1">Animated Vedio </a></li>
                      <li><a href="#link1">SEO </a></li>
                      <li><a href="#link1">Web Design </a></li>                    
                    </ul> 
                   
                  
                  </Col>
                  <Col lg={3}>
                    <div className='footer-column3'>
                      <p>Redcube Digital Media Pvt. Ltd </p>
                      <p>B-102,104 First Floor </p>
                      <p>Panchsheel Vihar, Sheikh Sarai Phase-1 </p>
                      <p>New Delhi</p>                      
                    </div> 
                    <div className='callsec'>
                      <img src='./images/callicon.png' alt='' /> <span>For Business Enquiries </span>
                        <a href="#LINK">+91858883241 </a>                       
                    </div>
                    <div className='hrsec'>
                    <img src='./images/hr.png' alt='' /> <span>HR Related Queries </span>
                        <a href="#LINK">+01148083152 </a>                      
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="text-white "><a className="whatApp" href="#link"><i className="fa-brands fa-whatsapp"></i>   WhatApp</a>
                  </div>
                    
                  </Col>
                  <Col lg={4}>
                    <h4 className='getsocial'>Get Social Conected </h4>
                  </Col>
                  <Col lg={3}>
                  <ul className="list-unstyled d-flex">
                  <i className="fas fa-facebook"></i> icon-long-arrow-up

                    <li><a href='#link'><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#link"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#link"><i className="fa-solid fa-b"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#link"><i className="fa-light fa-globe"></i></a></li>
                  </ul>
                    
                  </Col>


                  <Col lg={12}>               
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                  </Col>
                </Row>
            </Container>       
    </footer>
  );
}

export default Footer;
