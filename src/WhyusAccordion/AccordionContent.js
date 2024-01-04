import React from 'react';
import Accordion from './Accordion';
// import './App.css';

function AccordionContent() {
 const accordionItems = [
    {
      title: 'We are boutique',
      content: 'You will work with founders, nimbler, trained and experienced people throughout the entire project.',
    },
    {
      title: 'We create value & deliver results',
      content: 'Content for Section 2',
    },
    {
      title: 'We think design and feel strategy',
      content: 'Content for Section 3',
    },
    {
      title: 'Blend of generalists & specialists',
      content: 'Content for Section 4',
    },
    {
      title: 'We focus on what you need',
      content: 'Content for Section 5',
    },
    {
      title: 'For brand of all sizes ',
      content: 'Content for Section 6',
    },
    // Add more sections as needed
  ];

  return (
    <>      
      <Accordion items={accordionItems} />
    </>
  );
}

export default AccordionContent;
