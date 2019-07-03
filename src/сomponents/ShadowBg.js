import React from 'react';
import PropTypes from 'prop-types';

function ShadowBg(props) {
  const { click } = props;
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return <div className="shadow-bg" onClick={click} onKeyDown={click} role="presentation" />;
}
export default ShadowBg;

ShadowBg.propTypes = {
  click: PropTypes.func.isRequired,
};
