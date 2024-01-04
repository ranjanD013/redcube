import React from 'react';

function Testimonial({ testimonial }) {
  return (
    <div className="testimonial-item">
        <div className='testimonialmn'>
            <div className='testImg'>
                <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className='testiContent'>
                <p>{testimonial.testimonialText}</p>
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.group}</h4>
                <img className='grplogo' src={testimonial.CompanyLogo} alt={testimonial.name} />               
                
            </div>
            
        </div>
      
      
    </div>
  );
}

export default Testimonial;
