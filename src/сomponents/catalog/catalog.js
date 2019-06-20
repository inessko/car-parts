import React from 'react';
import Header from '../header';
import logo from '../../img/logo-shop.svg';
import Info from './AddInfo';

export default function Catalog() {
  return (
    <div className="wrapper-catalog wrapper">
      <div className="content-wrapper">
        <Header img={logo} className="header-catalog" info={<Info />} />
      </div>
    </div>
  );
}
