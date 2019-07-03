import React from 'react';
import { Link } from 'react-router-dom';

export default function Info() {
  return (
    <div className="container ad-info">
      <div className="ad-info-search">
        <form action="" className="ad-info-search-form">
          <input type="text" placeholder="Что ищем..." />
          <button className="btn" type="button">
            Найти
          </button>
        </form>
      </div>
      <div className="ad-info-buttons">
        <Link className="btn btn-shop" type="button" to="/">
          Оптовый прайс
        </Link>
        <Link className="btn btn-shop" type="button" to="/">
          Стать партнером
        </Link>
      </div>
    </div>
  );
}
