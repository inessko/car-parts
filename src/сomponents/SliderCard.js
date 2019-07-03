import React from 'react';
import Slider from 'react-slick';
import Product1 from '../img/product.png';

function SliderCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="info-card-right-slider">
      <Slider {...settings}>
        <img src={Product1} alt="Продукт 1" />
        <img src={Product1} alt="Продукт 2" />
        <img src={Product1} alt="Продукт 2" />
      </Slider>
    </div>
  );
}

export default SliderCard;
