import React from 'react';

export default function Info() {
  return (
    <div className="ad-info">
      <div className="ad-info-search">
        <form action="" className="ad-info-search-form">
          <input type="text" placeholder="Что ищем..." />
        </form>

        <button className="btn" type="button">
          Найти
        </button>
      </div>
      <div className="ad-info-button" />
    </div>
  );
}
