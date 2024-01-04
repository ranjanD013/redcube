import React from 'react'
import Thbox from './Thbox';
// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cardcontent () { 
    const cards = [
        {
          image: './images/box1.png',
          title: 'Explore Redcube “Career”',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          btnImage: './images/btnarrow.png',
          
        },
        {
        image: './images/box2.png',
        title: 'Explore Redcube “Casestudy”',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        btnImage: './images/btnarrow.png',
        },
        {
        image: './images/box3.png',
        title: 'Explore Redcube “Get In Touch”',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        btnImage: './images/btnarrow.png',
        },
        
      ];

      return (
        <>
        <div className='threebox'>
        <Thbox cards={cards} />      
        </div>
                    
        </>
      );
   

}

export default Cardcontent