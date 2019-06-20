import React from 'react';
import PropTypes from 'prop-types';
import TopNav from './topNav';
import Phone from './phone';

function Header(props) {
  const { className, img, info } = props;
  return (
    <header className={className || ''}>
      <div className="container">
        <div className="nav-menu">
          <TopNav img={img} />
          <Phone className="nav-phone" />
        </div>
        {info || ''}
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  info: PropTypes.element,
};

Header.defaultProps = {
  className: '',
  img: '../img/logo.svg',
  info: '',
};

export default Header;
