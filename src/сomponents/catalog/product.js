import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/modules/shop/shop-list.scss';

function Product(props) {
  const { shop } = props;
  return (
    <div className="shop-list">
      <div className="shop-list-items">
        {shop.map(item => (
          <div key={item.id} className="shop-list-items-item">
            <img src={item.img} alt={item.alt} />
            <p>{item.name}</p>
            <Link className="btn btn-product" to="/">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
      <p className="info">Вы просмотрели 12 из 1 579 товаров</p>
      <button className="btn btn-shop" type="button">
        Показать еще
      </button>
    </div>
  );
}

Product.propTypes = {
  shop: PropTypes.array.isRequired,
};

Product.defaultProps = {};

export default Product;
