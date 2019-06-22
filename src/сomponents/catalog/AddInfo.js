import React from 'react';

export default function Info() {
  return (
    <div className="container ad-info">
      <div className="ad-info-search">
        <form action="" className="ad-info-search-form">
          <input type="text" placeholder="Что ищем..." />
          <button className="btn btn-shop" type="button">
            Найти
          </button>
        </form>
      </div>
      <div className="ad-info-buttons">
        <button className="btn btn-shop" type="button">
          Оптовый прайс
        </button>
        <button className="btn btn-shop" type="button">
          Стать партнером
        </button>
      </div>
    </div>
  );
}
