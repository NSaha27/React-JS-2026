import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { useState } from "react";

import "./Slider.css";
import cherry from "../assets/cherry.jpg";
import lotus from "../assets/lotus.jpeg";
import jasmine from "../assets/jasmine.jpg";
import lili from "../assets/lili.jpeg";

function Slider() {
  const [counter, setCounter] = useState(0);

  const images = [cherry, lotus, jasmine, lili];

  const handlePrevious = () => {
    if (counter > 0) setCounter((c) => c - 1);
  };
  const handleNext = () => {
    if (counter < images.length - 1) setCounter((c) => c + 1);
  };

  return (
    <div className="slider-container">
      <div
        className="image-holder"
        style={{ backgroundImage: `url(${images[counter]})` }}
      ></div>
      <div className="slide-controller">
        <button
          className="btn"
          onClick={handlePrevious}
          disabled={counter === 0}
        >
          <FaLessThan />
        </button>
        <button
          className="btn"
          onClick={handleNext}
          disabled={counter === images.length - 1}
        >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}

export default Slider;
