import React from 'react';
import PropTypes from 'prop-types';

function Phone(props) {
  const { className } = props;
  return (
    <div className={`${className} phone`}>
      8 (800) 555-25-40
      <span>звонок бесплатный</span>
    </div>
  );
}

Phone.propTypes = {
  className: PropTypes.string,
};

Phone.defaultProps = {
  className: '',
};

export default Phone;
