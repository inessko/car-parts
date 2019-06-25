import React from 'react';
import SiteBar from './siteBar';
import '../../scss/modules/shop/wrap-catalog.scss';
import Product from './product';
import photo from '../../img/product.png';

const items = [
  {
    id: 1,
    name: 'Опора 1',
    img: photo,
    alt: 'Фото товара 1',
    categories: [1, 2],
    cars: [3, 5],
    materials: [1],
  },
  {
    id: 2,
    name: 'Опора 2',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 3,
    name: 'Опора карданного вала 2101/2102/2103',
    img: photo,
    alt: 'Фото товара 3',
    categories: [3, 4],
    cars: [2, 3],
    materials: [2],
  },
  {
    id: 4,
    name: 'Патрубки системы охлаждения 2112',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 5,
    name: 'Патрубки системы охлаждения 2112',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 6,
    name: 'Патрубки системы охлаждения 2112',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 7,
    name: 'Патрубки системы охлаждения 2112',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 8,
    name: 'Патрубки системы охлаждения 2112',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 9,
    name: 'Патрубки системы охлаждения 2112',
    img: photo,
    alt: 'Фото товара 2',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
];

function WrapCatalog() {
  return (
    <div className="catalog">
      <SiteBar />
      <Product shop={items} />
    </div>
  );
}

export default WrapCatalog;
