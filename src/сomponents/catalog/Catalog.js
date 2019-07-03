import React from 'react';
import Header from '../Header';
import logo from '../../img/logo-shop.png';
import Info from './AddInfo';
import Crumbs from '../Crumbs';
import TopInfo from '../TopInfo';
import ShopList from './ShopList';
import Footer from '../Footer';
import Sorting from '../Sorting';

const sort = [
  { id: 1, name: 'Сначала популярное' },
  { id: 2, name: 'Сначала дешевле' },
  { id: 3, name: 'Сначала дороже' },
];

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
          <TopInfo title="Товары" right={<Sorting array={sort} />} />
          <ShopList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
