import React from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
import Phone from './phone';

function MenuToggle(props) {
  const { className, click } = props;
  return (
    <div className={`${className} menu-toggle`}>
      <div
        className="menu-toggle-burger"
        role="button"
        tabIndex={0}
        onClick={() => {}}
        onKeyDown={click}
      >
        <span />
        <span />
      </div>
      <Menu className="menu-toggle-item" />
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
};

MenuToggle.defaultProps = {
  className: '',
};

export default MenuToggle;
