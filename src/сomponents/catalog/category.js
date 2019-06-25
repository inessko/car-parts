import React from 'react';
import PropTypes from 'prop-types';

function Category(props) {
  const { title, category, updateItem } = props;

  return (
    <div className="category">
      <h5 className="title5">{title}</h5>
      <ul className="category-item">
        {category.map(item => (
          <li
            key={item.id}
            onKeyDown={() => updateItem(item.id)}
            onClick={() => updateItem(item.id)}
            role="menuitem"
            className={item.checked ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
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
