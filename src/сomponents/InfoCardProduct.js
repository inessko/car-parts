import React from 'react';
import SliderCard from './SliderCard';
import Feature from './Feature';

function InfoCardProduct() {
  return (
    <div className="info-card">
      <div className="info-card-right">
        <SliderCard />
      </div>
      <div className="info-card-left">
        <h2 className="title2">Опора карданного вала 2101/2102/2103/2104/2105/2106/2107</h2>
        <Feature />
      </div>
    </div>
  );
}

export default InfoCardProduct;
