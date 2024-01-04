import React from 'react';
// import logo from '../logo.png'
// import sidenav from '../assets/images/sidenav.png';
import banner from '../assets/images/banner.png';
import creative from '../assets/images/creative.png';
import ParentComponent from '../award/ParentComponent';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsImage from '../Clients/ClientsImage';
// import Productslide from '../ProductSection/Productslide';
import Tabbed from '../Services/Tabbed';
import Welovedigital from './Welovedigital';
import AccordionContent from '../WhyusAccordion/AccordionContent';
import TestimonialCarousel from '../Testimonial/TestimonialCarousel';
import Cardcontent from '../Threebox/Cardcontent';
import Teamcontent from '../Teams/Teamcontent';
import Getintouch from '../Gettouch/Getintouch';
import Footer from '../Footer/Footer';
// import VerticalSlider from '../ProductSection/VerticalSlider';

import './Custom.jsx'
import Productimg from '../ProductSection/Productimg';
// import { Link } from 'react-scroll';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Home = () => {

    return (
        <>

            <div className="vscroll">
                {/* <section className='p-0 d-none' id="section1">
                    <div className="section topmenu">
                        <div className="logo"><img className="logoimg" src={logo} alt="logo" /></div>
                        <div className="menuNav">
                            <div className="topnav" id="rTopnav">
                                <div className="mobileWrap">
                                    <ul>
                                        <li>Digital</li>
                                        <li>Our Services</li>
                                        <li>Our Work</li>
                                        <li>Let’s Talk</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="sidenav">
                            <a href="#link">
                                <img src={sidenav} className="" alt="sideimg" />
                            </a>
                        </div>
                    </div>
                </section> */}


                {/* banner */}
                <section id="section2" className='p-0 section'>
                    <div className="bannermn">
                        <img src={banner} alt="Banner" />
                    </div>

                    <ParentComponent />
                </section>
                {/* banner end */}

                {/* We helpLine */}
                <section id="section3" className='pb-0 section' >
                    <Container>
                        <Row>
                            <Col lg={10} className='offset-lg-1'>
                                <div className='helpline'>
                                    <h3>We help companies grow by increasing the creative capital in their brands and businesses, with an obsession for real-world results.</h3>
                                    <a href='#link' className='bttn1'> see what we do </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* We helpLine end */}


                {/* clients logo section  */}
                <section id="section4" className="section">
                    <ClientsImage />
                </section>


                {/* creative */}
                <section id="section5" className="section">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='creative'>
                                    <img src={creative} className="" alt="creative" />
                                    <p> <span>ABOUT</span> </p>
                                    <h2>Embrace the World of Digital Stories!</h2>
                                    <h6>Redcube has challenged the boundaries since its inception. Being the early player that squeezed in disruptive technologies into clients’ business objectives to much delight has had cascading effect for all involved. </h6>
                                </div>
                                <div className='creativebtn'>
                                    <a className='bttn3' href="#link">more About US</a>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* creative end */}

                {/* <section>
                        <Productslide />
                    </section> */}


                {/* product slide  */}
                <Productimg />

                {/* services */}
                <section id="section6" className="section">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Tabbed />
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* we love digital  */}
                <section id="section7" className='p-0 section'>
                    <Welovedigital />
                </section>


                {/* why us */}
                <section id="section8" className='p-0 section'>
                    <AccordionContent />
                </section>


                {/* Testimonial Carousel */}
                <section id="section9" className='section'>
                    < TestimonialCarousel />
                </section>


                {/* three boxes */}
                <section id="section10" className='section'>
                    <Cardcontent />
                </section>


                {/* Red Cube Strategists  */}
                <section id="section11" className='p-0 section'>
                    <Teamcontent />
                </section>

                {/* Get in Touch */}
                <section id="section12" className='p-0 section'>
                    <Getintouch />
                </section>


                {/* Footer  */}
                <section id="section13" className='p-0 section'>
                    <Footer />
                </section>
            </div>
        </>
    );
};

export default Home;