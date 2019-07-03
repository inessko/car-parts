import React from 'react';
import { Link } from 'react-router-dom';

export default function TextInfo() {
  return (
    <section id="main" className="main">
      <div className="main-text container">
        <h1 className="title1">Ремонт автомобилей</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatibus.</p>
        <Link className="btn btn-home main-text-btn" to="/">
          Услуги
        </Link>
        <Link className="btn btn-home" to="/catalog">
          Каталог
        </Link>
      </div>
    </section>
  );
}
