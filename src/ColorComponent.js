import React, { useState, useEffect } from "react";

function ColorComponent() {
  const [backColor, setBackColor] = useState("");
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    function rand() {
      return Math.floor(Math.random() * 255);
    }
    let r = rand();
    let g = rand();
    let b = rand();
    const newColor = "rgb(" + r + "," + g + "," + b + ")";
    const newCompColor =
      "rgb(" + (255 - r) + "," + (255 - g) + "," + (255 - b) + ")";
    setBackColor(newColor);
    setTextColor(newCompColor);
  }, [count]);

  return (
    <div style={{ backgroundColor: backColor }} className="rectangular">
      <span style={{ backgroundColor: textColor }} className="circle"></span>
    </div>
  );
}

export default ColorComponent;
