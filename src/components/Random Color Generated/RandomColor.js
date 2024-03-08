import React, { useState } from "react";
import "./ColorGenerated.css";

const RandomColor = () => {
  const [color, setColor] = useState("#fff");
  const randomColor = (length) => {
    return Math.floor(Math.random() * length);
  };
  const randomColorGenerated = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  };
  return (
    <div className="container" style={{ background: color }}>
      <h1>Random Color Generated</h1>
      <h1>Hex Color : {color}</h1>
      <button onClick={randomColorGenerated}>Generate Random Color</button>
    </div>
  );
};

export default RandomColor;
