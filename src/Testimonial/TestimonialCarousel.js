import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'react-bootstrap';
import Testimonial from './Testimonial'
import testimonialData from './testimonialData.json';
function TestimonialCarousel() {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>

            <div className="faqmn">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='testimonialmain'>
                                <h2>What our clients are saying?</h2>
                                <Slider {...settings}>
                                    {testimonialData.testimonials.map((testimonial) => (
                                        <Testimonial key={testimonial.id} testimonial={testimonial} />
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TestimonialCarousel;
