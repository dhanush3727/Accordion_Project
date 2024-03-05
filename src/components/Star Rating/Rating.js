import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

const Rating = ({ noOfStar = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((__, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            size={40}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
      <h1>Thanks for your rating. You have seleted {rating} stars</h1>
    </div>
  );
};

export default Rating;
