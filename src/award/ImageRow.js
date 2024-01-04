import React from 'react';

const ImageRow = ({ imageUrls }) => {
  return (
    <div className="awardmn">
        
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src= {imageUrl} alt={`Image ${index}`} className="image"/>
      ))}
    </div>
  );
};

export default ImageRow;
