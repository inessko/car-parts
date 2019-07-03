import React from 'react';
import Header from './Header';
import logo from '../img/logo-shop.png';
import Info from './catalog/AddInfo';
import Footer from './Footer';
import Posts from './Posts';

export default function ServiceCompany() {
  return (
    <div className="wrapper-catalog wrapper">
      <div className="content-wrapper">
        <div className="wrap-header">
          <Header img={logo} className="header-catalog wrap-shop" />
          <Info />
        </div>
        <div className="container">
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}
