import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import '../../scss/modules/shop/siteBar.scss';

const All = [
  { id: 1, name: 'Бархотка' },
  { id: 2, name: 'Башмаки натяжителя' },
  { id: 3, name: 'Брызговики' },
  { id: 4, name: 'Втулки подвески' },
  { id: 5, name: 'Домкрат' },
  { id: 6, name: 'Иномарки' },
  { id: 7, name: 'Автомобильные ковры' },
  { id: 8, name: 'Крепления глушителя' },
];
const Car = [
  { id: 1, name: 'Chevrolet Niva 2123' },
  { id: 2, name: 'LADA VESTA' },
  { id: 3, name: 'ВАЗ 2107-07' },
  { id: 4, name: 'ВАЗ 1117/1118/1119' },
  { id: 5, name: 'ВАЗ 2108-99' },
  { id: 6, name: 'ВАЗ 2110-12 (1)' },
];
const Material = [{ id: 1, name: 'Резина' }, { id: 2, name: 'FPM ФТОР' }];

const items = [
  {
    id: 1,
    name: 'Опора 1',
    img: '',
    categories: [1, 2],
    cars: [3, 5],
    materials: [1],
  },
  {
    id: 1,
    name: 'Опора 2',
    img: '',
    categories: [2, 3],
    cars: [1, 2],
    materials: [1],
  },
  {
    id: 1,
    name: 'Опора 3',
    img: '',
    categories: [3, 4],
    cars: [2, 3],
    materials: [2],
  },
];

function SiteBar(props) {
  const [all, setAll] = useState(All);
  const [car, setCar] = useState(Car);
  const [material, setMaterial] = useState(Material);
  const [topState, setTopState] = useState(0);
  const [buttonShow, setButton] = useState(false);
  const { className } = props;

  function checkedItem(arr, key, ev) {
    const topEv = ev.getBoundingClientRect().top + window.pageYOffset;
    const topSiteBar = ev.closest('.site-bar').getBoundingClientRect().top + window.pageYOffset;
    return arr.map(item => {
      if (item.id === key) {
        setTopState(() => topEv - topSiteBar);
        setButton(true);
        return { ...item, checked: !item.checked };
      }
      return item;
    });
  }

  function updateAll(key, top) {
    setAll(prevState => {
      return checkedItem(prevState, key, top);
    });
  }

  function updateCar(key, top) {
    setCar(prevState => {
      return checkedItem(prevState, key, top);
    });
  }

  function updateMaterial(key, top) {
    setMaterial(prevState => {
      return checkedItem(prevState, key, top);
    });
  }

  function Button() {
    useEffect(() => {
      const timerID = setTimeout(() => setButton(false), 3000);

      return function cleanup() {
        clearInterval(timerID);
      };
    });

    return (
      <button onClick={filter} type="button" className="apply" style={style}>
        Применить
      </button>
    );
  }

  function filter() {
    // TODO need use state array
    const categoriesFiltered = all.filter(item => item.checked).map(item => item.id);
    const carFiltered = car.filter(item => item.checked).map(item => item.id);
    const materialFiltered = material.filter(item => item.checked).map(item => item.id);

    // Filtered items
    const filteredItems = items.filter(item => {
      let inCategory = true;
      let inCar = true;
      let inMaterial = true;
      if (categoriesFiltered.length > 0) {
        inCategory = item.categories.find(c => categoriesFiltered.find(i => c === i));
      }
      if (carFiltered.length > 0) {
        inCar = item.cars.find(c => carFiltered.find(i => c === i));
      }
      if (materialFiltered.length > 0) {
        inMaterial = item.materials.find(c => materialFiltered.find(i => c === i));
      }
      return inCategory && inCar && inMaterial;
    });

    console.log(categoriesFiltered, carFiltered, materialFiltered);
    console.log(filteredItems);
  }

  function udDateChecked(func) {
    func(prevState =>
      prevState.map(item => {
        if (item.checked) {
          setButton(false);
          return { ...item, checked: !item.checked };
        }
        return item;
      }),
    );
  }

  function resetFilter() {
    udDateChecked(setAll);
    udDateChecked(setCar);
    udDateChecked(setMaterial);
  }

  const style = {
    top: `${topState - 10}px`,
  };
  return (
    <div className={`${className} site-bar`}>
      <Category category={all} updateItem={updateAll} />
      <Category category={car} updateItem={updateCar} title="Автомобили" />
      <Category category={material} updateItem={updateMaterial} title="Материал" />
      <button onClick={resetFilter} type="button" className="site-bar-filter-of">
        Сбросить фильтр
      </button>
      {buttonShow ? <Button /> : ''}
    </div>
  );
}

SiteBar.propTypes = {
  className: PropTypes.string,
};
SiteBar.defaultProps = {
  className: '',
};
export default SiteBar;
