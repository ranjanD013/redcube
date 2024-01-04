import React from 'react';

const Clients = ({ imageUrls }) => {
  return (
    <div className="clients">
        
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src= {imageUrl} alt={`Image ${index}`} className="image"/>
      ))}

            
    </div>
  );
};

export default Clients;
