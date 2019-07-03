import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/modules/topInfo.scss';
import ShadowBg from './ShadowBg';
import SiteBar from './catalog/SiteBar';
// scss to TopInfo.scss
// button and modal window

function Sorting(props) {
  const { array } = props; // array from sorting
  const [sortModal, setSortModal] = useState(false); // state sortModal sort
  const [filterModal, setFilterModal] = useState(false); // state filter (SiteBar)

  const activeSort = sortModal ? 'active' : '';
  const activeFilter = filterModal ? 'active' : '';

  const style = {
    height: `${sortModal ? (array.length + 1) * 30 + 5 : 0}px`,
    visibility: `${sortModal ? 'visible' : 'hidden'}`,
  }; // animate to height

  function updateSortModal() {
    setSortModal(() => !sortModal);
  } // show and hide sortModal

  function updateFilterModal() {
    setFilterModal(() => !filterModal);
  } // show and hide filterModal
  function updateShadow() {
    setSortModal(() => false);
    setFilterModal(() => false);
  }
  return (
    <div className="sorting">
      <div className="sorting-button-sort">
        <button onClick={updateSortModal} className={`${activeSort} btn-modal`} type="button">
          Сортировать по
        </button>
        <div className={`${activeSort} sorting-modal`} style={style}>
          <ul>
            {array.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sorting-button-filter">
        <button
          type="button"
          className={`${activeFilter} btn-filter btn-modal`}
          onClick={updateFilterModal}
        >
          Фильтры
        </button>
        <SiteBar className={`${activeFilter}`} />
      </div>
      {sortModal || filterModal ? <ShadowBg click={updateShadow} /> : ''}
    </div>
  );
}

Sorting.propTypes = {
  array: PropTypes.array.isRequired,
};

export default Sorting;
