import React, { useState, useEffect } from "react";
import "./Scroll.css";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScroll((scrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  console.log(scroll);
  return (
    <div className="scroll-indicator">
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-container">
          <div className="scroll" style={{ width: `${scroll}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
