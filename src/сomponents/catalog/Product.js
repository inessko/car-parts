import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/modules/shop/shop-list.scss';
import Loader from '../loader';

function Product(props) {
  const { shop, nextPage, hideMore, loader } = props;
  return (
    <div className="shop-list">
      {loader ? <Loader /> : null}
      <div className="shop-list-items">
        {shop.map(item => (
          <div key={item.id} className="shop-list-items-item">
            <img src={process.env.PUBLIC_URL + item.img} alt={item.alt} />
            <p>{item.name}</p>
            <Link className="btn btn-product" to={item.link}>
              Подробнее
            </Link>
          </div>
        ))}
      </div>
      <p className="info">Вы просмотрели 12 из 1 579 товаров</p>
      {hideMore || (
        <button className="btn btn-shop" type="button" onClick={nextPage}>
          Показать еще
        </button>
      )}
    </div>
  );
}

Product.propTypes = {
  shop: PropTypes.array.isRequired,
  nextPage: PropTypes.func.isRequired,
  loader: PropTypes.bool,
  hideMore: PropTypes.bool,
};

Product.defaultProps = {
  loader: false,
  hideMore: false,
};

export default Product;
