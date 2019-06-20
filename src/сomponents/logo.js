import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Logo(props) {
  const { img } = props;
  return (
    <div className="logo">
      <Link to="/">
        <img src={img} alt="Logo" />
      </Link>
    </div>
  );
}

Logo.propTypes = {
  img: PropTypes.string,
};

Logo.defaultProps = {
  img: '../img/logo.svg',
};

export default Logo;
