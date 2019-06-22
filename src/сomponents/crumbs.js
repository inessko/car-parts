import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/modules/crumbs.scss';

function Crumbs() {
  return (
    <div className="crumbs">
      <ul className="crumbs-menu">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          Каталог
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
}

export default Crumbs;
