import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './TabbedSlider.css';


const TabbedSlider = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.current.slickGoTo(activeTab);
  }, [activeTab]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveTab(next);
    }
  };

  return (
    <div className="tabbed-slider-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {tabs.map((tab, index) => (
            <div key={index} className="slide">
              <div className='imgcontent'>
                <div className='tabImg'>
                    <img src={tab.image} alt={tab.label} />
                </div>
                <div className='tabContent'>
                    <h6> {tab.smalltitle} </h6>
                    <h3>{tab.title} </h3>
                    <p>{tab.content}</p>                    
                    <p><span>{tab.bttnText}</span></p>
                    <a href="#link"><img className='btnarow' src={tab.btnImage} alt={tab.label} /></a> 
                    
                </div>
              
              
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TabbedSlider;
