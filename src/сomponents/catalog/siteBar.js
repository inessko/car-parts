import React, { useState } from 'react';
import Category from './category';
import '../../scss/modules/shop/category.scss';

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

function SiteBar() {
  const [all, setAll] = useState(All);
  const [car, setCar] = useState(Car);
  const [material, setMaterial] = useState(Material);

  function checkedItem(arr, key) {
    return arr.map(item => {
      if (item.id === key) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
  }

  function updateAll(key) {
    setAll(prevState => {
      return checkedItem(prevState, key);
    });
  }

  function updateCar(key) {
    setCar(prevState => {
      return checkedItem(prevState, key);
    });
  }

  function updateMaterial(key) {
    setMaterial(prevState => {
      return checkedItem(prevState, key);
    });
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

  return (
    <div className="site-bar">
      <Category category={all} updateItem={updateAll} />
      <Category category={car} updateItem={updateCar} title="Автомобили" />
      <Category category={material} updateItem={updateMaterial} title="Материал" />
      <button onClick={filter}>Filter</button>
    </div>
  );
}

export default SiteBar;
