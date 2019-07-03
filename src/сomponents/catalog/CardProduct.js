import React from 'react';
import Header from '../Header';
import logo from '../../img/logo-shop.png';
import Info from './AddInfo';
import Crumbs from '../Crumbs';
import Footer from '../Footer';
import '../../scss/modules/slider.scss';
import InfoCardProduct from '../InfoCardProduct';

function CardProduct() {
  return (
    <div className="wrapper-catalog wrapper">
      <div className="content-wrapper">
        <div className="wrap-header">
          <Header img={logo} className="header-catalog wrap-shop" />
          <Info />
        </div>
        <div className="container">
          <Crumbs />
          <InfoCardProduct />
          <h3 className="title3">Рекомендации</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardProduct;
