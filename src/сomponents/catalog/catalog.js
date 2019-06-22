import React from 'react';
import Header from '../header';
import logo from '../../img/logo-shop.svg';
import Info from './AddInfo';
import Crumbs from '../crumbs';
import TopInfo from '../topInfo';

export default function Catalog() {
  return (
    <div className="wrapper-catalog wrapper">
      <div className="content-wrapper">
        <div className="wrap-header">
          <Header img={logo} className="header-catalog wrap-shop" />
          <Info />
        </div>
        <div className="container">
          <Crumbs />
          <TopInfo title="Товары" />
        </div>
      </div>
    </div>
  );
}
