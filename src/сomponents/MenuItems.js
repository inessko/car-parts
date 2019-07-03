import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Menu(props) {
  const { menu, className } = props;
  return (
    <ul className={className}>
      {menu.map(item => (
        <li key={item.id}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  className: PropTypes.string,
};
Menu.defaultProps = {
  className: 'menu',
};

export default Menu;
