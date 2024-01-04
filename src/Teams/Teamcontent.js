import React from 'react';
import Team from './Team';
// import './team.css';

function Teamcontent() {
  const teamMembers = [
    {
      image: './images/ajay-prakash.jpg',
      name: 'Ajay Prakash',
      role: 'CEO',
      Year: 'Over 20+ years of experience in Digital World',
    },
    {
      image: './images/mallika-pande.jpg',
      name: 'Mallika Pande',
      role: 'Director',
      Year: 'Over 15+ years of experience in Digital World',
    },
    {
      image: './images/loren-howard.jpg',
      name: 'Loren Howard',
      role: 'Director Sales (US)',
      Year: ' Over 14+ years of experience in Digital Marketing (US) ',
    },
    {
      image: './images/puja-khanna.jpg',
      name: 'Puja Khanna',
      role: 'Creative Head',
      Year: 'Over 15+ years of experience in Creative Designing',
    },



  ];

  return (
    <>
      <div className='teams'>
        <div className="container">
          <h1 className="my-4">Red Cube Strategists </h1>
          <Team teamMembers={teamMembers} />
        </div>
      </div>
    </>

  );
}

export default Teamcontent;
