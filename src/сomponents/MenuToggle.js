import React from 'react';
import PropTypes from 'prop-types';
import Phone from './Phone';
import Menu from './MenuItems';

const menuItem = [
  { id: 1, name: 'Каталог', link: '/catalog' },
  { id: 2, name: 'Где купить', link: '/catalog' },
  { id: 3, name: 'О компании', link: '/catalog' },
  { id: 4, name: 'Партнерам', link: '/catalog' },
];
function MenuToggle(props) {
  const { className, click, style } = props;
  return (
    <div className={`${className} menu-toggle`} style={style}>
      <div
        className="menu-toggle-burger"
        role="button"
        tabIndex={0}
        onClick={click}
        onKeyDown={click}
      >
        <span />
        <span />
      </div>
      <Menu className="menu-toggle-item" menu={menuItem} />
      <ul className="menu-toggle-item-sub">
        <li>
          <a href="/">Сертификаты</a>
        </li>
        <li>
          <a href="/">Новости</a>
        </li>
        <li>
          <a href="/">Контакты</a>
        </li>
      </ul>
      <Phone className="menu-toggle-phone" />
    </div>
  );
}

MenuToggle.propTypes = {
  className: PropTypes.string,
  click: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

MenuToggle.defaultProps = {
  className: '',
};

export default MenuToggle;
