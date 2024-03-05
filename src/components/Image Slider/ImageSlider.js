import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);
  console.log(image);
  if (loading) {
    return <div>Loading Data! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured {errorMsg}</div>;
  }
  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="img-container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-img"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {image && image.length
          ? image.map((_, index) => (
              <button
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                key={index}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
