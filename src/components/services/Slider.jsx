import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phone from "../../assets/images/phone.svg";
import "../../assets/Component.css"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: null, // Remove the previous arrow
    nextArrow: null, // Remove the next arrow,
   
  };

  return (
    <div className="w-96 border border-black p-8 items-center">
      <Slider {...settings}>
        <div className="slide">
          <h3>
            <img src={phone} alt="phone" className="center-image" />
          </h3>
        </div>
        <div className="slide">
          <h3>
            <img src={phone} alt="phone" className="center-image" />
          </h3>
        </div>
        <div className="slide">
          <h3>
            <img src={phone} alt="phone" className="center-image" />
          </h3>
        </div>
        <div className="slide">
          <h3>
            <img src={phone} alt="phone" className="center-image" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
