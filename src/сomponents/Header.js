import React from 'react';
import PropTypes from 'prop-types';
import TopNav from './TopNav';
import Phone from './Phone';

function Header(props) {
  const { img } = props;
  return (
    <header className="container">
      <div className="nav-menu">
        <TopNav img={img} />
        <Phone className="nav-phone" />
      </div>
    </header>
  );
}

Header.propTypes = {
  img: PropTypes.string,
};

Header.defaultProps = {
  img: '../img/Logo.svg',
};

export default Header;
