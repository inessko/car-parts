import React from 'react';
import PropTypes from 'prop-types';
import Sorting from './Sorting';
import '../scss/modules/topInfo.scss';

function TopInfo(props) {
  const { title } = props;
  return (
    <div className="top-info">
      <h2 className="title2">{title}</h2>
      <Sorting />
    </div>
  );
}
TopInfo.propTypes = {
  title: PropTypes.string,
};

TopInfo.defaultProps = {
  title: 'Заголовок',
};
export default TopInfo;
