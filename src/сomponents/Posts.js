import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SiteBar from './catalog/SiteBar';
import '../scss/modules/shop/wrap-catalog.scss';
import Product from './catalog/Product';

function Posts() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hideMore, setHideMore] = useState(false);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async function getUser() {
      try {
        const result = await axios.get(`http://localhost:3004/catalog?_page=${page}&_limit=4`);
        setLoader(false);
        if (result.data.length < 4) {
          setHideMore(true);
        }
        setItems(prevState => {
          return [...prevState, ...result.data];
        });
      } catch (error) {
        setLoader(true);
      }
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
      <Product shop={items} nextPage={nextPage} hideMore={hideMore} loader={isLoader} />
    </div>
  );
}

export default Posts;
