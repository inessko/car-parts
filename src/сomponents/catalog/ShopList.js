import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SiteBar from './SiteBar';
import '../../scss/modules/shop/wrap-catalog.scss';
import Product from './Product';

function ShopList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hideMore, setHideMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3004/catalog?_page=${page}&_limit=4`);
      if (result.data.length < 4) {
        setHideMore(true);
      }
      setItems(prevState => {
        return [...prevState, ...result.data];
      });
    };

    fetchData();
  }, [page]);

  function nextPage() {
    setPage(prevState => {
      return prevState + 1;
    });
  }

  return (
    <div className="catalog">
      <SiteBar />
      <Product shop={items} nextPage={nextPage} hideMore={hideMore} />
    </div>
  );
}

export default ShopList;
