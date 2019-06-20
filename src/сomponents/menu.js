import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Menu(props) {
  const { className } = props;
  return (
    <ul className={className}>
      <li>
        <Link to="/catalog/">Товары</Link>
      </li>
      <li>
        <Link to="/catalog/">Каталог</Link>
      </li>
      <li>
        <Link to="/catalog/">О компании</Link>
      </li>
      <li>
        <Link to="/catalog/">Партнерам</Link>
      </li>
    </ul>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: 'menu',
};

export default Menu;
