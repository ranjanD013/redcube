import React from 'react';
import Slider from 'react-slick';
import './Team.css';

const Team = ({ teamMembers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="team-slide">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h5>{member.name}</h5>
            <h6>{member.role}</h6>
            <p>{member.Year}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
