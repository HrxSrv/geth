// StarRating.js
import React, { useState, useEffect } from 'react';
import star2 from "./component/star2.png";
import star7 from "./component/star7.png";

const StarRating = ({ onSave , initialRating,workerId,onClose}) => {
  const [selectedRating, setSelectedRating] = useState(initialRating);
  
  // console.log(selectedRating)
  // console.log(initialRating)
  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  useEffect(() => {
    setSelectedRating(initialRating);
  }, [initialRating]);
  
  const handleSave = () => {
    onSave(workerId, selectedRating);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= selectedRating;
      // console.log(filled)
      stars.push(
        <img
          key={i}
          src={filled ? star2 : star7}
          alt={filled ? 'filled star' : 'empty star'}
          onClick={() => handleStarClick(i)}
          className="rating-star"
        />
      );
    }
    return stars;
  };

  return (
    <div className="boxes">
      {renderStars()}
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => onClose()}>Close</button>
      </div>
    </div>
  );
};

export default StarRating;
