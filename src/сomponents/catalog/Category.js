import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Category(props) {
  const { title, category, updateItem } = props;
  const [show, SetShow] = useState(false);

  function UpdateClass() {
    if (document.documentElement.clientWidth <= 1024) {
      return SetShow(() => !show);
    }
  }

  return (
    <div className={`${show ? 'active' : ''} category`}>
      <h5 className="title5" onClick={UpdateClass} onKeyDown={UpdateClass} role="presentation">
        {title}
      </h5>
      <div className="scrollbar" id="style-4">
        <div className="overflow">
          <ul className="category-item">
            {category.map(item => (
              <li
                key={item.id}
                onKeyDown={event => {
                  updateItem(item.id, event.currentTarget.getBoundingClientRect().top);
                }}
                onClick={event => {
                  updateItem(item.id, event.currentTarget);
                }}
                role="menuitem"
                className={item.checked ? 'active' : ''}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string,
  category: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
};

Category.defaultProps = {
  title: 'Категория',
};

export default Category;
