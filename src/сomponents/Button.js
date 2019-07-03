import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
  const { click, name, className, link } = props;
  return (
    <button onClick={click} onKeyDown={click} className={`${className} btn`} type="button">
      <Link to={link}>{name}</Link>
    </button>
  );
}

Button.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
};
Button.defaultProps = {
  name: 'button',
  className: null,
  link: null,
  click: null,
};

export default Button;
