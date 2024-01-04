import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../assets/images/slider1.png';
import slide2 from '../assets/images/slider2.png';
import slide3 from '../assets/images/slider3.png';
import slide4 from '../assets/images/slider4.png';
import slide5 from '../assets/images/slider5.png';
import slide6 from '../assets/images/slider6.png';
import slide7 from '../assets/images/slider7.png';



const Productslide = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    const handleScroll = (event) => {
      const { deltaY } = event;
      if (deltaY > 0) {
        sliderElement.slickNext();
      } else {
        sliderElement.slickPrev();
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const settings = {
    dots: false, 
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null, // Disable left arrow
    nextArrow: null, // Disable right arrow
    arrows: false,
  };

  return (
    <div className="mouse-scroll-slick-container1">
      <Slider {...settings} ref={sliderRef}>
        <div className="slick-slide"><img className="" src={slide1} alt="" /></div>
        <div className="slick-slide"><img className="" src={slide2} alt="" /></div>
        <div className="slick-slide"><img className="" src={slide3} alt="" /></div>
        <div className="slick-slide"><img className="" src={slide4} alt="" /></div>
        <div className="slick-slide"><img className="" src={slide5} alt="" /></div>
        <div className="slick-slide"><img className="" src={slide6} alt="" /></div>
        <div className="slick-slide"><img className="" src={slide7} alt="" /></div>      
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Productslide;
