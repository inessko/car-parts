import React from 'react';
import PropTypes from 'prop-types';
import '../scss/modules/topInfo.scss';

function TopInfo(props) {
  const { title, right } = props;
  return (
    <div className="top-info">
      <h2 className="title2">{title}</h2>
      <div className="top-info-filter">{right}</div>
    </div>
  );
}

TopInfo.propTypes = {
  title: PropTypes.string,
  right: PropTypes.node,
};

TopInfo.defaultProps = {
  title: 'Заголовок',
  right: '',
};
export default TopInfo;
